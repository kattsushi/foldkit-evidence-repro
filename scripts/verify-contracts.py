#!/usr/bin/env python3
"""Check evidence contracts against an isolated copy of the installed preview."""
from pathlib import Path
import shutil
import subprocess
import tempfile

root = Path(__file__).resolve().parent.parent
with tempfile.TemporaryDirectory(prefix="foldkit-contract-") as scratch:
    work = Path(scratch)
    shutil.copytree(root / "node_modules", work / "node_modules", symlinks=True)
    for name in ("tsconfig.json", "tsconfig.contract.json", "evidence-contract.typecheck.ts"):
        shutil.copy2(root / name, work / name)
    def check(label: str, expect_success: bool):
        result = subprocess.run(["node", "node_modules/@typescript/native/bin/tsc", "-p", "tsconfig.contract.json"], cwd=work, text=True, capture_output=True)
        ok = result.returncode == 0
        if ok != expect_success or (not ok and "TS2344" not in result.stdout + result.stderr):
            raise RuntimeError(f"{label}: unexpected exit {result.returncode}\n{result.stdout}{result.stderr}")
        print(f"{label}: {'PASS' if ok else 'expected TS2344'}")
    check("Published declarations", True)
    subprocess.run(["patch", "-p1", "-i", str(root / "experiments/candidate.patch")], cwd=work / "node_modules/foldkit", check=True, capture_output=True)
    check("Candidate with index-signature fallback", True)
    declaration = work / "node_modules/foldkit/dist/update/update.d.ts"
    content = declaration.read_text()
    start = content.index("type ResultCommandsOf<Value> = ")
    end = content.index("\n", start)
    simple = "type ResultCommandsOf<Value> = Value extends unknown ? 'commands' extends keyof Value ? NonNullable<Value['commands']> : never : never;"
    declaration.write_text(content[:start] + simple + content[end:])
    check("Index-only extraction without fallback", False)
print("Installed declarations were not modified; temporary copy removed.")
