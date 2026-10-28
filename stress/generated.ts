import { Block } from "foldkit"
import { Schema, Tuple } from "effect"
import * as Update from "foldkit/update"
import { defineMessageUnion } from "foldkit/message"
const M0 = Schema.Struct({ count: Schema.Number })
const E0 = defineMessageUnion({ Inc: {} })
const D0 = Block.makeDefinition("L0", { Model: M0, Message: E0 })
const C0 = D0.makeComposition()
const prep0 = () =>
  C0.prepareBlock({
    init: C0.makeInit(() => ({ model: { count: 0 } })),
    update: C0.makeUpdate({
      Inc: (model) => ({ model: { count: model.count + 1 } })
    }),
    operations: { inc: () => Tuple.make(E0.Inc()) }
  })
const B0: Block.FromAssemblyWithoutViewOrOutMessage<typeof M0, typeof prep0> =
  Block.assemble(prep0)
const M1 = Schema.Struct({
  f0: B0.Model,
  f1: B0.Model,
  f2: B0.Model,
  f3: B0.Model,
  f4: B0.Model,
  f5: B0.Model
})
const E1 = defineMessageUnion({ Inc: {} })
const D1 = Block.makeDefinition("L1", { Model: M1, Message: E1 })
const b1_0 = D1.makeBinding(B0, {
  field: "f0",
  init: { contextToArgs: () => Tuple.make() }
})
const b1_1 = D1.makeBinding(B0, {
  field: "f1",
  init: { contextToArgs: () => Tuple.make() }
})
const b1_2 = D1.makeBinding(B0, {
  field: "f2",
  init: { contextToArgs: () => Tuple.make() }
})
const b1_3 = D1.makeBinding(B0, {
  field: "f3",
  init: { contextToArgs: () => Tuple.make() }
})
const b1_4 = D1.makeBinding(B0, {
  field: "f4",
  init: { contextToArgs: () => Tuple.make() }
})
const b1_5 = D1.makeBinding(B0, {
  field: "f5",
  init: { contextToArgs: () => Tuple.make() }
})
const C1 = D1.makeComposition({
  bindings: [b1_0, b1_1, b1_2, b1_3, b1_4, b1_5]
})
const prep1 = () =>
  C1.prepareBlock({
    init: C1.makeInit(() => ({ model: {} })),
    update: C1.makeUpdate({
      Inc: (model) =>
        Update.combineSteps([
          b1_0.inc(),
          b1_1.inc(),
          b1_2.inc(),
          b1_3.inc(),
          b1_4.inc(),
          b1_5.inc()
        ])(model)
    }),
    operations: { inc: () => Tuple.make(E1.Inc()) }
  })
const B1: Block.FromAssemblyWithoutViewOrOutMessage<typeof M1, typeof prep1> =
  Block.assemble(prep1)
const M2 = Schema.Struct({
  f0: B1.Model,
  f1: B1.Model,
  f2: B1.Model,
  f3: B1.Model,
  f4: B1.Model,
  f5: B1.Model
})
const E2 = defineMessageUnion({ Inc: {} })
const D2 = Block.makeDefinition("L2", { Model: M2, Message: E2 })
const b2_0 = D2.makeBinding(B1, {
  field: "f0",
  init: { contextToArgs: () => Tuple.make() }
})
const b2_1 = D2.makeBinding(B1, {
  field: "f1",
  init: { contextToArgs: () => Tuple.make() }
})
const b2_2 = D2.makeBinding(B1, {
  field: "f2",
  init: { contextToArgs: () => Tuple.make() }
})
const b2_3 = D2.makeBinding(B1, {
  field: "f3",
  init: { contextToArgs: () => Tuple.make() }
})
const b2_4 = D2.makeBinding(B1, {
  field: "f4",
  init: { contextToArgs: () => Tuple.make() }
})
const b2_5 = D2.makeBinding(B1, {
  field: "f5",
  init: { contextToArgs: () => Tuple.make() }
})
const C2 = D2.makeComposition({
  bindings: [b2_0, b2_1, b2_2, b2_3, b2_4, b2_5]
})
const prep2 = () =>
  C2.prepareBlock({
    init: C2.makeInit(() => ({ model: {} })),
    update: C2.makeUpdate({
      Inc: (model) =>
        Update.combineSteps([
          b2_0.inc(),
          b2_1.inc(),
          b2_2.inc(),
          b2_3.inc(),
          b2_4.inc(),
          b2_5.inc()
        ])(model)
    }),
    operations: { inc: () => Tuple.make(E2.Inc()) }
  })
const B2: Block.FromAssemblyWithoutViewOrOutMessage<typeof M2, typeof prep2> =
  Block.assemble(prep2)
const M3 = Schema.Struct({
  f0: B2.Model,
  f1: B2.Model,
  f2: B2.Model,
  f3: B2.Model,
  f4: B2.Model,
  f5: B2.Model
})
const E3 = defineMessageUnion({ Inc: {} })
const D3 = Block.makeDefinition("L3", { Model: M3, Message: E3 })
const b3_0 = D3.makeBinding(B2, {
  field: "f0",
  init: { contextToArgs: () => Tuple.make() }
})
const b3_1 = D3.makeBinding(B2, {
  field: "f1",
  init: { contextToArgs: () => Tuple.make() }
})
const b3_2 = D3.makeBinding(B2, {
  field: "f2",
  init: { contextToArgs: () => Tuple.make() }
})
const b3_3 = D3.makeBinding(B2, {
  field: "f3",
  init: { contextToArgs: () => Tuple.make() }
})
const b3_4 = D3.makeBinding(B2, {
  field: "f4",
  init: { contextToArgs: () => Tuple.make() }
})
const b3_5 = D3.makeBinding(B2, {
  field: "f5",
  init: { contextToArgs: () => Tuple.make() }
})
const C3 = D3.makeComposition({
  bindings: [b3_0, b3_1, b3_2, b3_3, b3_4, b3_5]
})
const prep3 = () =>
  C3.prepareBlock({
    init: C3.makeInit(() => ({ model: {} })),
    update: C3.makeUpdate({
      Inc: (model) =>
        Update.combineSteps([
          b3_0.inc(),
          b3_1.inc(),
          b3_2.inc(),
          b3_3.inc(),
          b3_4.inc(),
          b3_5.inc()
        ])(model)
    }),
    operations: { inc: () => Tuple.make(E3.Inc()) }
  })
const B3: Block.FromAssemblyWithoutViewOrOutMessage<typeof M3, typeof prep3> =
  Block.assemble(prep3)
const M4 = Schema.Struct({
  f0: B3.Model,
  f1: B3.Model,
  f2: B3.Model,
  f3: B3.Model,
  f4: B3.Model,
  f5: B3.Model
})
const E4 = defineMessageUnion({ Inc: {} })
const D4 = Block.makeDefinition("L4", { Model: M4, Message: E4 })
const b4_0 = D4.makeBinding(B3, {
  field: "f0",
  init: { contextToArgs: () => Tuple.make() }
})
const b4_1 = D4.makeBinding(B3, {
  field: "f1",
  init: { contextToArgs: () => Tuple.make() }
})
const b4_2 = D4.makeBinding(B3, {
  field: "f2",
  init: { contextToArgs: () => Tuple.make() }
})
const b4_3 = D4.makeBinding(B3, {
  field: "f3",
  init: { contextToArgs: () => Tuple.make() }
})
const b4_4 = D4.makeBinding(B3, {
  field: "f4",
  init: { contextToArgs: () => Tuple.make() }
})
const b4_5 = D4.makeBinding(B3, {
  field: "f5",
  init: { contextToArgs: () => Tuple.make() }
})
const C4 = D4.makeComposition({
  bindings: [b4_0, b4_1, b4_2, b4_3, b4_4, b4_5]
})
const prep4 = () =>
  C4.prepareBlock({
    init: C4.makeInit(() => ({ model: {} })),
    update: C4.makeUpdate({
      Inc: (model) =>
        Update.combineSteps([
          b4_0.inc(),
          b4_1.inc(),
          b4_2.inc(),
          b4_3.inc(),
          b4_4.inc(),
          b4_5.inc()
        ])(model)
    }),
    operations: { inc: () => Tuple.make(E4.Inc()) }
  })
const B4: Block.FromAssemblyWithoutViewOrOutMessage<typeof M4, typeof prep4> =
  Block.assemble(prep4)
const M5 = Schema.Struct({
  f0: B4.Model,
  f1: B4.Model,
  f2: B4.Model,
  f3: B4.Model,
  f4: B4.Model,
  f5: B4.Model
})
const E5 = defineMessageUnion({ Inc: {} })
const D5 = Block.makeDefinition("L5", { Model: M5, Message: E5 })
const b5_0 = D5.makeBinding(B4, {
  field: "f0",
  init: { contextToArgs: () => Tuple.make() }
})
const b5_1 = D5.makeBinding(B4, {
  field: "f1",
  init: { contextToArgs: () => Tuple.make() }
})
const b5_2 = D5.makeBinding(B4, {
  field: "f2",
  init: { contextToArgs: () => Tuple.make() }
})
const b5_3 = D5.makeBinding(B4, {
  field: "f3",
  init: { contextToArgs: () => Tuple.make() }
})
const b5_4 = D5.makeBinding(B4, {
  field: "f4",
  init: { contextToArgs: () => Tuple.make() }
})
const b5_5 = D5.makeBinding(B4, {
  field: "f5",
  init: { contextToArgs: () => Tuple.make() }
})
const C5 = D5.makeComposition({
  bindings: [b5_0, b5_1, b5_2, b5_3, b5_4, b5_5]
})
const prep5 = () =>
  C5.prepareBlock({
    init: C5.makeInit(() => ({ model: {} })),
    update: C5.makeUpdate({
      Inc: (model) =>
        Update.combineSteps([
          b5_0.inc(),
          b5_1.inc(),
          b5_2.inc(),
          b5_3.inc(),
          b5_4.inc(),
          b5_5.inc()
        ])(model)
    }),
    operations: { inc: () => Tuple.make(E5.Inc()) }
  })
const B5: Block.FromAssemblyWithoutViewOrOutMessage<typeof M5, typeof prep5> =
  Block.assemble(prep5)
const M6 = Schema.Struct({
  f0: B5.Model,
  f1: B5.Model,
  f2: B5.Model,
  f3: B5.Model,
  f4: B5.Model,
  f5: B5.Model
})
const E6 = defineMessageUnion({ Inc: {} })
const D6 = Block.makeDefinition("L6", { Model: M6, Message: E6 })
const b6_0 = D6.makeBinding(B5, {
  field: "f0",
  init: { contextToArgs: () => Tuple.make() }
})
const b6_1 = D6.makeBinding(B5, {
  field: "f1",
  init: { contextToArgs: () => Tuple.make() }
})
const b6_2 = D6.makeBinding(B5, {
  field: "f2",
  init: { contextToArgs: () => Tuple.make() }
})
const b6_3 = D6.makeBinding(B5, {
  field: "f3",
  init: { contextToArgs: () => Tuple.make() }
})
const b6_4 = D6.makeBinding(B5, {
  field: "f4",
  init: { contextToArgs: () => Tuple.make() }
})
const b6_5 = D6.makeBinding(B5, {
  field: "f5",
  init: { contextToArgs: () => Tuple.make() }
})
const C6 = D6.makeComposition({
  bindings: [b6_0, b6_1, b6_2, b6_3, b6_4, b6_5]
})
const prep6 = () =>
  C6.prepareBlock({
    init: C6.makeInit(() => ({ model: {} })),
    update: C6.makeUpdate({
      Inc: (model) =>
        Update.combineSteps([
          b6_0.inc(),
          b6_1.inc(),
          b6_2.inc(),
          b6_3.inc(),
          b6_4.inc(),
          b6_5.inc()
        ])(model)
    }),
    operations: { inc: () => Tuple.make(E6.Inc()) }
  })
const B6: Block.FromAssemblyWithoutViewOrOutMessage<typeof M6, typeof prep6> =
  Block.assemble(prep6)
const M7 = Schema.Struct({
  f0: B6.Model,
  f1: B6.Model,
  f2: B6.Model,
  f3: B6.Model,
  f4: B6.Model,
  f5: B6.Model
})
const E7 = defineMessageUnion({ Inc: {} })
const D7 = Block.makeDefinition("L7", { Model: M7, Message: E7 })
const b7_0 = D7.makeBinding(B6, {
  field: "f0",
  init: { contextToArgs: () => Tuple.make() }
})
const b7_1 = D7.makeBinding(B6, {
  field: "f1",
  init: { contextToArgs: () => Tuple.make() }
})
const b7_2 = D7.makeBinding(B6, {
  field: "f2",
  init: { contextToArgs: () => Tuple.make() }
})
const b7_3 = D7.makeBinding(B6, {
  field: "f3",
  init: { contextToArgs: () => Tuple.make() }
})
const b7_4 = D7.makeBinding(B6, {
  field: "f4",
  init: { contextToArgs: () => Tuple.make() }
})
const b7_5 = D7.makeBinding(B6, {
  field: "f5",
  init: { contextToArgs: () => Tuple.make() }
})
const C7 = D7.makeComposition({
  bindings: [b7_0, b7_1, b7_2, b7_3, b7_4, b7_5]
})
const prep7 = () =>
  C7.prepareBlock({
    init: C7.makeInit(() => ({ model: {} })),
    update: C7.makeUpdate({
      Inc: (model) =>
        Update.combineSteps([
          b7_0.inc(),
          b7_1.inc(),
          b7_2.inc(),
          b7_3.inc(),
          b7_4.inc(),
          b7_5.inc()
        ])(model)
    }),
    operations: { inc: () => Tuple.make(E7.Inc()) }
  })
const B7: Block.FromAssemblyWithoutViewOrOutMessage<typeof M7, typeof prep7> =
  Block.assemble(prep7)
const M8 = Schema.Struct({
  f0: B7.Model,
  f1: B7.Model,
  f2: B7.Model,
  f3: B7.Model,
  f4: B7.Model,
  f5: B7.Model
})
const E8 = defineMessageUnion({ Inc: {} })
const D8 = Block.makeDefinition("L8", { Model: M8, Message: E8 })
const b8_0 = D8.makeBinding(B7, {
  field: "f0",
  init: { contextToArgs: () => Tuple.make() }
})
const b8_1 = D8.makeBinding(B7, {
  field: "f1",
  init: { contextToArgs: () => Tuple.make() }
})
const b8_2 = D8.makeBinding(B7, {
  field: "f2",
  init: { contextToArgs: () => Tuple.make() }
})
const b8_3 = D8.makeBinding(B7, {
  field: "f3",
  init: { contextToArgs: () => Tuple.make() }
})
const b8_4 = D8.makeBinding(B7, {
  field: "f4",
  init: { contextToArgs: () => Tuple.make() }
})
const b8_5 = D8.makeBinding(B7, {
  field: "f5",
  init: { contextToArgs: () => Tuple.make() }
})
const C8 = D8.makeComposition({
  bindings: [b8_0, b8_1, b8_2, b8_3, b8_4, b8_5]
})
const prep8 = () =>
  C8.prepareBlock({
    init: C8.makeInit(() => ({ model: {} })),
    update: C8.makeUpdate({
      Inc: (model) =>
        Update.combineSteps([
          b8_0.inc(),
          b8_1.inc(),
          b8_2.inc(),
          b8_3.inc(),
          b8_4.inc(),
          b8_5.inc()
        ])(model)
    }),
    operations: { inc: () => Tuple.make(E8.Inc()) }
  })
const B8: Block.FromAssemblyWithoutViewOrOutMessage<typeof M8, typeof prep8> =
  Block.assemble(prep8)
export { B8 }
