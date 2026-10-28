# Reading the independent reproduction

The failing program is `large-board.ts`. It deliberately expands the 50 form definitions so every Block and binding has a concrete identity. This keeps the file self-contained and allows the compiler to check the same large graph; it is a stress case, not a recommended application layout or a minimal failure.

Read it in this order:

1. `M0`, `E0`, `O0` and `D0` define the first form's Model, Messages, OutMessage and Block definition.
2. `Cmd0_0` through `Cmd0_3` declare Commands. Each has an Effect handler Layer. `u0_0` through `u0_6` bind official Foldkit UI Blocks.
3. `C0` and `prep0` assemble that form; `B0` is the completed Block. The other forms follow the same shape with distinct identities.
4. `RM`, `RE`, `RD`, `b0` and `p0` define the dashboard Model, Messages, Root and child binding/policy. `Root` registers all 50 bindings.
5. `Placements`, `Requirements`, `Result` and `Step` preserve the Root's qualified handlers and registration evidence. `complete` runs each step through the checked `interpreter`, retaining its Commands.
6. `Root.makeUpdate` wires the dashboard actions to those steps. This is where native TypeScript reports TS2589 on the published f3be declarations.

`runtime.ts` initializes the graph and dispatches `Action0`. The returned result contains four Commands; this smoke test does not execute them or claim to exercise browser UI or Effect handlers. `../example/board.ts` is the small runnable browser example, not the failing graph.

The original declaration infers `commands` structurally from each result. The candidate indexes the declared property and keeps the previous inference for index-only shapes. The A/B check establishes an outcome for this workload; it does not establish that the suggested extraction is universally equivalent or that the same threshold applies elsewhere.
