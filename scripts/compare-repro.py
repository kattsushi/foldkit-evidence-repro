#!/usr/bin/env python3
"""Compare the same independent graph with published and candidate declarations."""
from pathlib import Path
import shutil
import re
import subprocess
import tempfile

root = Path(__file__).resolve().parent.parent
with tempfile.TemporaryDirectory(prefix="foldkit-ts2589-") as tmp:
    work = Path(tmp)
    shutil.copytree(root / "node_modules", work / "node_modules", symlinks=True)
    shutil.copytree(root / "reproduction", work / "reproduction")
    for name in ("tsconfig.json", "tsconfig.repro.json"):
        shutil.copy2(root / name, work / name)

    def compile_graph(label: str, expected_error: bool) -> None:
        result = subprocess.run(
            ["node", "node_modules/@typescript/native/bin/tsc", "-p", "tsconfig.repro.json", "--extendedDiagnostics"],
            cwd=work, capture_output=True, text=True, timeout=120,
        )
        output = result.stdout + result.stderr
        if expected_error:
            if result.returncode == 0 or re.findall(r"error TS\d+", output) != ["error TS2589"]:
                raise RuntimeError(f"{label}: expected TS2589, got exit {result.returncode}\n{output}")
            print(f"{label}: expected TS2589 (exit {result.returncode})")
            print(next(line for line in output.splitlines() if "error TS2589" in line))
        elif result.returncode != 0:
            raise RuntimeError(f"{label}: expected success, got exit {result.returncode}\n{output}")
        else:
            print(f"{label}: typecheck passed")

    compile_graph("official", True)
    subprocess.run(
        ["patch", "-p1", "-i", str(root / "experiments/candidate.patch")],
        cwd=work / "node_modules/foldkit", check=True, capture_output=True,
    )
    compile_graph("candidate", False)
print("Both checks used identical source and settings; installed files were not modified.")
