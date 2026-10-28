// Generated independent stress case: 50 forms, each with 7 Foldkit UI Blocks and 4 Commands.
// Start at the Root section near the bottom; the repeated forms preserve exact types.
// See README for original-versus-candidate checks and limitations.
import { Block } from "foldkit"
import { Schema, Tuple, Effect, Layer } from "effect"
import * as Update from "foldkit/update"
import { defineMessageUnion } from "foldkit/message"
import {
  DialogBlock,
  PopoverBlock,
  TooltipBlock,
  SliderBlock,
  DatePickerBlock,
  CalendarBlock,
  DragAndDropBlock
} from "@foldkit/ui"
const M0 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E0 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O0 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D0 = Block.makeDefinition("Child0", {
  Model: M0,
  Message: E0,
  OutMessage: O0
})
const Cmd0_0 = D0.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E0.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E0.Done0(args))
  }
})
const Cmd0_1 = D0.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E0.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E0.Done1(args))
  }
})
const Cmd0_2 = D0.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E0.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E0.Done2(args))
  }
})
const Cmd0_3 = D0.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E0.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E0.Done3(args))
  }
})
const u0_0 = D0.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-0-0" }) }
})
const p0_0 = u0_0.withOutMessagePolicy({
  fold: D0.makeOutMessageFold(DialogBlock, {
    Opened: () => D0.makeNoopStep(),
    Closed: () => D0.makeNoopStep(),
    CompletedClose: () => D0.makeNoopStep()
  })
})
const u0_1 = D0.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-0-1" }) }
})
const p0_1 = u0_1.withOutMessagePolicy({
  fold: D0.makeOutMessageFold(PopoverBlock, {
    Opened: () => D0.makeNoopStep(),
    Closed: () => D0.makeNoopStep()
  })
})
const u0_2 = D0.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-0-2" }) }
})
const p0_2 = u0_2.withOutMessagePolicy({
  fold: D0.makeOutMessageFold(TooltipBlock, {
    Shown: () => D0.makeNoopStep(),
    Hidden: () => D0.makeNoopStep()
  })
})
const u0_3 = D0.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-0-3", min: 0, max: 100, step: 1 })
  }
})
const p0_3 = u0_3.withOutMessagePolicy({
  fold: D0.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D0.makeNoopStep()
  })
})
const u0_4 = D0.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-0-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p0_4 = u0_4.withOutMessagePolicy({
  fold: D0.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D0.makeNoopStep(),
    SelectedDate: () => D0.makeNoopStep(),
    ClearedDate: () => D0.makeNoopStep()
  })
})
const u0_5 = D0.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-0-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p0_5 = u0_5.withOutMessagePolicy({
  fold: D0.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D0.makeNoopStep(),
    SelectedDate: () => D0.makeNoopStep()
  })
})
const u0_6 = D0.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-0-6" }) }
})
const p0_6 = u0_6.withOutMessagePolicy({
  fold: D0.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D0.makeNoopStep(),
    ChangedKeyboardTarget: () => D0.makeNoopStep(),
    Reordered: () => D0.makeNoopStep(),
    Cancelled: () => D0.makeNoopStep()
  })
})
const C0 = D0.makeComposition({
  bindings: [p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6]
})
const prep0 = () =>
  C0.prepareBlock({
    init: C0.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C0.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd0_0({ value: model.count }),
          Cmd0_1({ value: model.count }),
          Cmd0_2({ value: model.count }),
          Cmd0_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O0.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O0.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O0.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O0.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd0_0.layer,
      Cmd0_1.layer,
      Cmd0_2.layer,
      Cmd0_3.layer
    ),
    operations: { start: () => Tuple.make(E0.Start()) }
  })
const B0: Block.FromAssemblyWithOutMessage<typeof M0, typeof prep0> =
  Block.assemble(prep0)
const M1 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E1 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O1 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D1 = Block.makeDefinition("Child1", {
  Model: M1,
  Message: E1,
  OutMessage: O1
})
const Cmd1_0 = D1.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E1.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E1.Done0(args))
  }
})
const Cmd1_1 = D1.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E1.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E1.Done1(args))
  }
})
const Cmd1_2 = D1.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E1.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E1.Done2(args))
  }
})
const Cmd1_3 = D1.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E1.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E1.Done3(args))
  }
})
const u1_0 = D1.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-1-0" }) }
})
const p1_0 = u1_0.withOutMessagePolicy({
  fold: D1.makeOutMessageFold(DialogBlock, {
    Opened: () => D1.makeNoopStep(),
    Closed: () => D1.makeNoopStep(),
    CompletedClose: () => D1.makeNoopStep()
  })
})
const u1_1 = D1.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-1-1" }) }
})
const p1_1 = u1_1.withOutMessagePolicy({
  fold: D1.makeOutMessageFold(PopoverBlock, {
    Opened: () => D1.makeNoopStep(),
    Closed: () => D1.makeNoopStep()
  })
})
const u1_2 = D1.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-1-2" }) }
})
const p1_2 = u1_2.withOutMessagePolicy({
  fold: D1.makeOutMessageFold(TooltipBlock, {
    Shown: () => D1.makeNoopStep(),
    Hidden: () => D1.makeNoopStep()
  })
})
const u1_3 = D1.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-1-3", min: 0, max: 100, step: 1 })
  }
})
const p1_3 = u1_3.withOutMessagePolicy({
  fold: D1.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D1.makeNoopStep()
  })
})
const u1_4 = D1.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-1-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p1_4 = u1_4.withOutMessagePolicy({
  fold: D1.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D1.makeNoopStep(),
    SelectedDate: () => D1.makeNoopStep(),
    ClearedDate: () => D1.makeNoopStep()
  })
})
const u1_5 = D1.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-1-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p1_5 = u1_5.withOutMessagePolicy({
  fold: D1.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D1.makeNoopStep(),
    SelectedDate: () => D1.makeNoopStep()
  })
})
const u1_6 = D1.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-1-6" }) }
})
const p1_6 = u1_6.withOutMessagePolicy({
  fold: D1.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D1.makeNoopStep(),
    ChangedKeyboardTarget: () => D1.makeNoopStep(),
    Reordered: () => D1.makeNoopStep(),
    Cancelled: () => D1.makeNoopStep()
  })
})
const C1 = D1.makeComposition({
  bindings: [p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6]
})
const prep1 = () =>
  C1.prepareBlock({
    init: C1.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C1.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd1_0({ value: model.count }),
          Cmd1_1({ value: model.count }),
          Cmd1_2({ value: model.count }),
          Cmd1_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O1.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O1.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O1.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O1.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd1_0.layer,
      Cmd1_1.layer,
      Cmd1_2.layer,
      Cmd1_3.layer
    ),
    operations: { start: () => Tuple.make(E1.Start()) }
  })
const B1: Block.FromAssemblyWithOutMessage<typeof M1, typeof prep1> =
  Block.assemble(prep1)
const M2 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E2 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O2 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D2 = Block.makeDefinition("Child2", {
  Model: M2,
  Message: E2,
  OutMessage: O2
})
const Cmd2_0 = D2.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E2.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E2.Done0(args))
  }
})
const Cmd2_1 = D2.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E2.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E2.Done1(args))
  }
})
const Cmd2_2 = D2.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E2.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E2.Done2(args))
  }
})
const Cmd2_3 = D2.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E2.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E2.Done3(args))
  }
})
const u2_0 = D2.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-2-0" }) }
})
const p2_0 = u2_0.withOutMessagePolicy({
  fold: D2.makeOutMessageFold(DialogBlock, {
    Opened: () => D2.makeNoopStep(),
    Closed: () => D2.makeNoopStep(),
    CompletedClose: () => D2.makeNoopStep()
  })
})
const u2_1 = D2.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-2-1" }) }
})
const p2_1 = u2_1.withOutMessagePolicy({
  fold: D2.makeOutMessageFold(PopoverBlock, {
    Opened: () => D2.makeNoopStep(),
    Closed: () => D2.makeNoopStep()
  })
})
const u2_2 = D2.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-2-2" }) }
})
const p2_2 = u2_2.withOutMessagePolicy({
  fold: D2.makeOutMessageFold(TooltipBlock, {
    Shown: () => D2.makeNoopStep(),
    Hidden: () => D2.makeNoopStep()
  })
})
const u2_3 = D2.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-2-3", min: 0, max: 100, step: 1 })
  }
})
const p2_3 = u2_3.withOutMessagePolicy({
  fold: D2.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D2.makeNoopStep()
  })
})
const u2_4 = D2.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-2-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p2_4 = u2_4.withOutMessagePolicy({
  fold: D2.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D2.makeNoopStep(),
    SelectedDate: () => D2.makeNoopStep(),
    ClearedDate: () => D2.makeNoopStep()
  })
})
const u2_5 = D2.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-2-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p2_5 = u2_5.withOutMessagePolicy({
  fold: D2.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D2.makeNoopStep(),
    SelectedDate: () => D2.makeNoopStep()
  })
})
const u2_6 = D2.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-2-6" }) }
})
const p2_6 = u2_6.withOutMessagePolicy({
  fold: D2.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D2.makeNoopStep(),
    ChangedKeyboardTarget: () => D2.makeNoopStep(),
    Reordered: () => D2.makeNoopStep(),
    Cancelled: () => D2.makeNoopStep()
  })
})
const C2 = D2.makeComposition({
  bindings: [p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6]
})
const prep2 = () =>
  C2.prepareBlock({
    init: C2.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C2.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd2_0({ value: model.count }),
          Cmd2_1({ value: model.count }),
          Cmd2_2({ value: model.count }),
          Cmd2_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O2.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O2.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O2.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O2.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd2_0.layer,
      Cmd2_1.layer,
      Cmd2_2.layer,
      Cmd2_3.layer
    ),
    operations: { start: () => Tuple.make(E2.Start()) }
  })
const B2: Block.FromAssemblyWithOutMessage<typeof M2, typeof prep2> =
  Block.assemble(prep2)
const M3 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E3 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O3 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D3 = Block.makeDefinition("Child3", {
  Model: M3,
  Message: E3,
  OutMessage: O3
})
const Cmd3_0 = D3.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E3.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E3.Done0(args))
  }
})
const Cmd3_1 = D3.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E3.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E3.Done1(args))
  }
})
const Cmd3_2 = D3.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E3.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E3.Done2(args))
  }
})
const Cmd3_3 = D3.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E3.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E3.Done3(args))
  }
})
const u3_0 = D3.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-3-0" }) }
})
const p3_0 = u3_0.withOutMessagePolicy({
  fold: D3.makeOutMessageFold(DialogBlock, {
    Opened: () => D3.makeNoopStep(),
    Closed: () => D3.makeNoopStep(),
    CompletedClose: () => D3.makeNoopStep()
  })
})
const u3_1 = D3.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-3-1" }) }
})
const p3_1 = u3_1.withOutMessagePolicy({
  fold: D3.makeOutMessageFold(PopoverBlock, {
    Opened: () => D3.makeNoopStep(),
    Closed: () => D3.makeNoopStep()
  })
})
const u3_2 = D3.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-3-2" }) }
})
const p3_2 = u3_2.withOutMessagePolicy({
  fold: D3.makeOutMessageFold(TooltipBlock, {
    Shown: () => D3.makeNoopStep(),
    Hidden: () => D3.makeNoopStep()
  })
})
const u3_3 = D3.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-3-3", min: 0, max: 100, step: 1 })
  }
})
const p3_3 = u3_3.withOutMessagePolicy({
  fold: D3.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D3.makeNoopStep()
  })
})
const u3_4 = D3.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-3-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p3_4 = u3_4.withOutMessagePolicy({
  fold: D3.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D3.makeNoopStep(),
    SelectedDate: () => D3.makeNoopStep(),
    ClearedDate: () => D3.makeNoopStep()
  })
})
const u3_5 = D3.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-3-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p3_5 = u3_5.withOutMessagePolicy({
  fold: D3.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D3.makeNoopStep(),
    SelectedDate: () => D3.makeNoopStep()
  })
})
const u3_6 = D3.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-3-6" }) }
})
const p3_6 = u3_6.withOutMessagePolicy({
  fold: D3.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D3.makeNoopStep(),
    ChangedKeyboardTarget: () => D3.makeNoopStep(),
    Reordered: () => D3.makeNoopStep(),
    Cancelled: () => D3.makeNoopStep()
  })
})
const C3 = D3.makeComposition({
  bindings: [p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6]
})
const prep3 = () =>
  C3.prepareBlock({
    init: C3.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C3.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd3_0({ value: model.count }),
          Cmd3_1({ value: model.count }),
          Cmd3_2({ value: model.count }),
          Cmd3_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O3.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O3.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O3.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O3.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd3_0.layer,
      Cmd3_1.layer,
      Cmd3_2.layer,
      Cmd3_3.layer
    ),
    operations: { start: () => Tuple.make(E3.Start()) }
  })
const B3: Block.FromAssemblyWithOutMessage<typeof M3, typeof prep3> =
  Block.assemble(prep3)
const M4 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E4 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O4 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D4 = Block.makeDefinition("Child4", {
  Model: M4,
  Message: E4,
  OutMessage: O4
})
const Cmd4_0 = D4.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E4.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E4.Done0(args))
  }
})
const Cmd4_1 = D4.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E4.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E4.Done1(args))
  }
})
const Cmd4_2 = D4.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E4.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E4.Done2(args))
  }
})
const Cmd4_3 = D4.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E4.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E4.Done3(args))
  }
})
const u4_0 = D4.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-4-0" }) }
})
const p4_0 = u4_0.withOutMessagePolicy({
  fold: D4.makeOutMessageFold(DialogBlock, {
    Opened: () => D4.makeNoopStep(),
    Closed: () => D4.makeNoopStep(),
    CompletedClose: () => D4.makeNoopStep()
  })
})
const u4_1 = D4.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-4-1" }) }
})
const p4_1 = u4_1.withOutMessagePolicy({
  fold: D4.makeOutMessageFold(PopoverBlock, {
    Opened: () => D4.makeNoopStep(),
    Closed: () => D4.makeNoopStep()
  })
})
const u4_2 = D4.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-4-2" }) }
})
const p4_2 = u4_2.withOutMessagePolicy({
  fold: D4.makeOutMessageFold(TooltipBlock, {
    Shown: () => D4.makeNoopStep(),
    Hidden: () => D4.makeNoopStep()
  })
})
const u4_3 = D4.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-4-3", min: 0, max: 100, step: 1 })
  }
})
const p4_3 = u4_3.withOutMessagePolicy({
  fold: D4.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D4.makeNoopStep()
  })
})
const u4_4 = D4.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-4-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p4_4 = u4_4.withOutMessagePolicy({
  fold: D4.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D4.makeNoopStep(),
    SelectedDate: () => D4.makeNoopStep(),
    ClearedDate: () => D4.makeNoopStep()
  })
})
const u4_5 = D4.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-4-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p4_5 = u4_5.withOutMessagePolicy({
  fold: D4.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D4.makeNoopStep(),
    SelectedDate: () => D4.makeNoopStep()
  })
})
const u4_6 = D4.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-4-6" }) }
})
const p4_6 = u4_6.withOutMessagePolicy({
  fold: D4.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D4.makeNoopStep(),
    ChangedKeyboardTarget: () => D4.makeNoopStep(),
    Reordered: () => D4.makeNoopStep(),
    Cancelled: () => D4.makeNoopStep()
  })
})
const C4 = D4.makeComposition({
  bindings: [p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6]
})
const prep4 = () =>
  C4.prepareBlock({
    init: C4.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C4.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd4_0({ value: model.count }),
          Cmd4_1({ value: model.count }),
          Cmd4_2({ value: model.count }),
          Cmd4_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O4.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O4.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O4.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O4.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd4_0.layer,
      Cmd4_1.layer,
      Cmd4_2.layer,
      Cmd4_3.layer
    ),
    operations: { start: () => Tuple.make(E4.Start()) }
  })
const B4: Block.FromAssemblyWithOutMessage<typeof M4, typeof prep4> =
  Block.assemble(prep4)
const M5 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E5 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O5 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D5 = Block.makeDefinition("Child5", {
  Model: M5,
  Message: E5,
  OutMessage: O5
})
const Cmd5_0 = D5.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E5.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E5.Done0(args))
  }
})
const Cmd5_1 = D5.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E5.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E5.Done1(args))
  }
})
const Cmd5_2 = D5.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E5.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E5.Done2(args))
  }
})
const Cmd5_3 = D5.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E5.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E5.Done3(args))
  }
})
const u5_0 = D5.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-5-0" }) }
})
const p5_0 = u5_0.withOutMessagePolicy({
  fold: D5.makeOutMessageFold(DialogBlock, {
    Opened: () => D5.makeNoopStep(),
    Closed: () => D5.makeNoopStep(),
    CompletedClose: () => D5.makeNoopStep()
  })
})
const u5_1 = D5.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-5-1" }) }
})
const p5_1 = u5_1.withOutMessagePolicy({
  fold: D5.makeOutMessageFold(PopoverBlock, {
    Opened: () => D5.makeNoopStep(),
    Closed: () => D5.makeNoopStep()
  })
})
const u5_2 = D5.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-5-2" }) }
})
const p5_2 = u5_2.withOutMessagePolicy({
  fold: D5.makeOutMessageFold(TooltipBlock, {
    Shown: () => D5.makeNoopStep(),
    Hidden: () => D5.makeNoopStep()
  })
})
const u5_3 = D5.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-5-3", min: 0, max: 100, step: 1 })
  }
})
const p5_3 = u5_3.withOutMessagePolicy({
  fold: D5.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D5.makeNoopStep()
  })
})
const u5_4 = D5.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-5-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p5_4 = u5_4.withOutMessagePolicy({
  fold: D5.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D5.makeNoopStep(),
    SelectedDate: () => D5.makeNoopStep(),
    ClearedDate: () => D5.makeNoopStep()
  })
})
const u5_5 = D5.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-5-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p5_5 = u5_5.withOutMessagePolicy({
  fold: D5.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D5.makeNoopStep(),
    SelectedDate: () => D5.makeNoopStep()
  })
})
const u5_6 = D5.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-5-6" }) }
})
const p5_6 = u5_6.withOutMessagePolicy({
  fold: D5.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D5.makeNoopStep(),
    ChangedKeyboardTarget: () => D5.makeNoopStep(),
    Reordered: () => D5.makeNoopStep(),
    Cancelled: () => D5.makeNoopStep()
  })
})
const C5 = D5.makeComposition({
  bindings: [p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6]
})
const prep5 = () =>
  C5.prepareBlock({
    init: C5.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C5.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd5_0({ value: model.count }),
          Cmd5_1({ value: model.count }),
          Cmd5_2({ value: model.count }),
          Cmd5_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O5.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O5.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O5.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O5.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd5_0.layer,
      Cmd5_1.layer,
      Cmd5_2.layer,
      Cmd5_3.layer
    ),
    operations: { start: () => Tuple.make(E5.Start()) }
  })
const B5: Block.FromAssemblyWithOutMessage<typeof M5, typeof prep5> =
  Block.assemble(prep5)
const M6 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E6 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O6 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D6 = Block.makeDefinition("Child6", {
  Model: M6,
  Message: E6,
  OutMessage: O6
})
const Cmd6_0 = D6.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E6.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E6.Done0(args))
  }
})
const Cmd6_1 = D6.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E6.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E6.Done1(args))
  }
})
const Cmd6_2 = D6.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E6.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E6.Done2(args))
  }
})
const Cmd6_3 = D6.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E6.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E6.Done3(args))
  }
})
const u6_0 = D6.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-6-0" }) }
})
const p6_0 = u6_0.withOutMessagePolicy({
  fold: D6.makeOutMessageFold(DialogBlock, {
    Opened: () => D6.makeNoopStep(),
    Closed: () => D6.makeNoopStep(),
    CompletedClose: () => D6.makeNoopStep()
  })
})
const u6_1 = D6.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-6-1" }) }
})
const p6_1 = u6_1.withOutMessagePolicy({
  fold: D6.makeOutMessageFold(PopoverBlock, {
    Opened: () => D6.makeNoopStep(),
    Closed: () => D6.makeNoopStep()
  })
})
const u6_2 = D6.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-6-2" }) }
})
const p6_2 = u6_2.withOutMessagePolicy({
  fold: D6.makeOutMessageFold(TooltipBlock, {
    Shown: () => D6.makeNoopStep(),
    Hidden: () => D6.makeNoopStep()
  })
})
const u6_3 = D6.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-6-3", min: 0, max: 100, step: 1 })
  }
})
const p6_3 = u6_3.withOutMessagePolicy({
  fold: D6.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D6.makeNoopStep()
  })
})
const u6_4 = D6.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-6-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p6_4 = u6_4.withOutMessagePolicy({
  fold: D6.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D6.makeNoopStep(),
    SelectedDate: () => D6.makeNoopStep(),
    ClearedDate: () => D6.makeNoopStep()
  })
})
const u6_5 = D6.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-6-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p6_5 = u6_5.withOutMessagePolicy({
  fold: D6.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D6.makeNoopStep(),
    SelectedDate: () => D6.makeNoopStep()
  })
})
const u6_6 = D6.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-6-6" }) }
})
const p6_6 = u6_6.withOutMessagePolicy({
  fold: D6.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D6.makeNoopStep(),
    ChangedKeyboardTarget: () => D6.makeNoopStep(),
    Reordered: () => D6.makeNoopStep(),
    Cancelled: () => D6.makeNoopStep()
  })
})
const C6 = D6.makeComposition({
  bindings: [p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6]
})
const prep6 = () =>
  C6.prepareBlock({
    init: C6.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C6.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd6_0({ value: model.count }),
          Cmd6_1({ value: model.count }),
          Cmd6_2({ value: model.count }),
          Cmd6_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O6.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O6.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O6.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O6.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd6_0.layer,
      Cmd6_1.layer,
      Cmd6_2.layer,
      Cmd6_3.layer
    ),
    operations: { start: () => Tuple.make(E6.Start()) }
  })
const B6: Block.FromAssemblyWithOutMessage<typeof M6, typeof prep6> =
  Block.assemble(prep6)
const M7 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E7 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O7 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D7 = Block.makeDefinition("Child7", {
  Model: M7,
  Message: E7,
  OutMessage: O7
})
const Cmd7_0 = D7.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E7.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E7.Done0(args))
  }
})
const Cmd7_1 = D7.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E7.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E7.Done1(args))
  }
})
const Cmd7_2 = D7.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E7.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E7.Done2(args))
  }
})
const Cmd7_3 = D7.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E7.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E7.Done3(args))
  }
})
const u7_0 = D7.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-7-0" }) }
})
const p7_0 = u7_0.withOutMessagePolicy({
  fold: D7.makeOutMessageFold(DialogBlock, {
    Opened: () => D7.makeNoopStep(),
    Closed: () => D7.makeNoopStep(),
    CompletedClose: () => D7.makeNoopStep()
  })
})
const u7_1 = D7.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-7-1" }) }
})
const p7_1 = u7_1.withOutMessagePolicy({
  fold: D7.makeOutMessageFold(PopoverBlock, {
    Opened: () => D7.makeNoopStep(),
    Closed: () => D7.makeNoopStep()
  })
})
const u7_2 = D7.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-7-2" }) }
})
const p7_2 = u7_2.withOutMessagePolicy({
  fold: D7.makeOutMessageFold(TooltipBlock, {
    Shown: () => D7.makeNoopStep(),
    Hidden: () => D7.makeNoopStep()
  })
})
const u7_3 = D7.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-7-3", min: 0, max: 100, step: 1 })
  }
})
const p7_3 = u7_3.withOutMessagePolicy({
  fold: D7.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D7.makeNoopStep()
  })
})
const u7_4 = D7.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-7-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p7_4 = u7_4.withOutMessagePolicy({
  fold: D7.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D7.makeNoopStep(),
    SelectedDate: () => D7.makeNoopStep(),
    ClearedDate: () => D7.makeNoopStep()
  })
})
const u7_5 = D7.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-7-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p7_5 = u7_5.withOutMessagePolicy({
  fold: D7.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D7.makeNoopStep(),
    SelectedDate: () => D7.makeNoopStep()
  })
})
const u7_6 = D7.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-7-6" }) }
})
const p7_6 = u7_6.withOutMessagePolicy({
  fold: D7.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D7.makeNoopStep(),
    ChangedKeyboardTarget: () => D7.makeNoopStep(),
    Reordered: () => D7.makeNoopStep(),
    Cancelled: () => D7.makeNoopStep()
  })
})
const C7 = D7.makeComposition({
  bindings: [p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6]
})
const prep7 = () =>
  C7.prepareBlock({
    init: C7.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C7.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd7_0({ value: model.count }),
          Cmd7_1({ value: model.count }),
          Cmd7_2({ value: model.count }),
          Cmd7_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O7.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O7.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O7.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O7.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd7_0.layer,
      Cmd7_1.layer,
      Cmd7_2.layer,
      Cmd7_3.layer
    ),
    operations: { start: () => Tuple.make(E7.Start()) }
  })
const B7: Block.FromAssemblyWithOutMessage<typeof M7, typeof prep7> =
  Block.assemble(prep7)
const M8 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E8 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O8 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D8 = Block.makeDefinition("Child8", {
  Model: M8,
  Message: E8,
  OutMessage: O8
})
const Cmd8_0 = D8.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E8.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E8.Done0(args))
  }
})
const Cmd8_1 = D8.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E8.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E8.Done1(args))
  }
})
const Cmd8_2 = D8.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E8.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E8.Done2(args))
  }
})
const Cmd8_3 = D8.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E8.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E8.Done3(args))
  }
})
const u8_0 = D8.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-8-0" }) }
})
const p8_0 = u8_0.withOutMessagePolicy({
  fold: D8.makeOutMessageFold(DialogBlock, {
    Opened: () => D8.makeNoopStep(),
    Closed: () => D8.makeNoopStep(),
    CompletedClose: () => D8.makeNoopStep()
  })
})
const u8_1 = D8.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-8-1" }) }
})
const p8_1 = u8_1.withOutMessagePolicy({
  fold: D8.makeOutMessageFold(PopoverBlock, {
    Opened: () => D8.makeNoopStep(),
    Closed: () => D8.makeNoopStep()
  })
})
const u8_2 = D8.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-8-2" }) }
})
const p8_2 = u8_2.withOutMessagePolicy({
  fold: D8.makeOutMessageFold(TooltipBlock, {
    Shown: () => D8.makeNoopStep(),
    Hidden: () => D8.makeNoopStep()
  })
})
const u8_3 = D8.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-8-3", min: 0, max: 100, step: 1 })
  }
})
const p8_3 = u8_3.withOutMessagePolicy({
  fold: D8.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D8.makeNoopStep()
  })
})
const u8_4 = D8.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-8-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p8_4 = u8_4.withOutMessagePolicy({
  fold: D8.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D8.makeNoopStep(),
    SelectedDate: () => D8.makeNoopStep(),
    ClearedDate: () => D8.makeNoopStep()
  })
})
const u8_5 = D8.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-8-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p8_5 = u8_5.withOutMessagePolicy({
  fold: D8.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D8.makeNoopStep(),
    SelectedDate: () => D8.makeNoopStep()
  })
})
const u8_6 = D8.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-8-6" }) }
})
const p8_6 = u8_6.withOutMessagePolicy({
  fold: D8.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D8.makeNoopStep(),
    ChangedKeyboardTarget: () => D8.makeNoopStep(),
    Reordered: () => D8.makeNoopStep(),
    Cancelled: () => D8.makeNoopStep()
  })
})
const C8 = D8.makeComposition({
  bindings: [p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6]
})
const prep8 = () =>
  C8.prepareBlock({
    init: C8.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C8.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd8_0({ value: model.count }),
          Cmd8_1({ value: model.count }),
          Cmd8_2({ value: model.count }),
          Cmd8_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O8.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O8.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O8.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O8.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd8_0.layer,
      Cmd8_1.layer,
      Cmd8_2.layer,
      Cmd8_3.layer
    ),
    operations: { start: () => Tuple.make(E8.Start()) }
  })
const B8: Block.FromAssemblyWithOutMessage<typeof M8, typeof prep8> =
  Block.assemble(prep8)
const M9 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E9 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O9 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D9 = Block.makeDefinition("Child9", {
  Model: M9,
  Message: E9,
  OutMessage: O9
})
const Cmd9_0 = D9.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E9.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E9.Done0(args))
  }
})
const Cmd9_1 = D9.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E9.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E9.Done1(args))
  }
})
const Cmd9_2 = D9.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E9.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E9.Done2(args))
  }
})
const Cmd9_3 = D9.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E9.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E9.Done3(args))
  }
})
const u9_0 = D9.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-9-0" }) }
})
const p9_0 = u9_0.withOutMessagePolicy({
  fold: D9.makeOutMessageFold(DialogBlock, {
    Opened: () => D9.makeNoopStep(),
    Closed: () => D9.makeNoopStep(),
    CompletedClose: () => D9.makeNoopStep()
  })
})
const u9_1 = D9.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-9-1" }) }
})
const p9_1 = u9_1.withOutMessagePolicy({
  fold: D9.makeOutMessageFold(PopoverBlock, {
    Opened: () => D9.makeNoopStep(),
    Closed: () => D9.makeNoopStep()
  })
})
const u9_2 = D9.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-9-2" }) }
})
const p9_2 = u9_2.withOutMessagePolicy({
  fold: D9.makeOutMessageFold(TooltipBlock, {
    Shown: () => D9.makeNoopStep(),
    Hidden: () => D9.makeNoopStep()
  })
})
const u9_3 = D9.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-9-3", min: 0, max: 100, step: 1 })
  }
})
const p9_3 = u9_3.withOutMessagePolicy({
  fold: D9.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D9.makeNoopStep()
  })
})
const u9_4 = D9.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-9-4", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p9_4 = u9_4.withOutMessagePolicy({
  fold: D9.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D9.makeNoopStep(),
    SelectedDate: () => D9.makeNoopStep(),
    ClearedDate: () => D9.makeNoopStep()
  })
})
const u9_5 = D9.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-9-5", today: { year: 2026, month: 10, day: 28 } })
  }
})
const p9_5 = u9_5.withOutMessagePolicy({
  fold: D9.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D9.makeNoopStep(),
    SelectedDate: () => D9.makeNoopStep()
  })
})
const u9_6 = D9.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-9-6" }) }
})
const p9_6 = u9_6.withOutMessagePolicy({
  fold: D9.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D9.makeNoopStep(),
    ChangedKeyboardTarget: () => D9.makeNoopStep(),
    Reordered: () => D9.makeNoopStep(),
    Cancelled: () => D9.makeNoopStep()
  })
})
const C9 = D9.makeComposition({
  bindings: [p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6]
})
const prep9 = () =>
  C9.prepareBlock({
    init: C9.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C9.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd9_0({ value: model.count }),
          Cmd9_1({ value: model.count }),
          Cmd9_2({ value: model.count }),
          Cmd9_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O9.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O9.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O9.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O9.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd9_0.layer,
      Cmd9_1.layer,
      Cmd9_2.layer,
      Cmd9_3.layer
    ),
    operations: { start: () => Tuple.make(E9.Start()) }
  })
const B9: Block.FromAssemblyWithOutMessage<typeof M9, typeof prep9> =
  Block.assemble(prep9)
const M10 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E10 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O10 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D10 = Block.makeDefinition("Child10", {
  Model: M10,
  Message: E10,
  OutMessage: O10
})
const Cmd10_0 = D10.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E10.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E10.Done0(args))
  }
})
const Cmd10_1 = D10.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E10.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E10.Done1(args))
  }
})
const Cmd10_2 = D10.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E10.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E10.Done2(args))
  }
})
const Cmd10_3 = D10.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E10.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E10.Done3(args))
  }
})
const u10_0 = D10.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-10-0" }) }
})
const p10_0 = u10_0.withOutMessagePolicy({
  fold: D10.makeOutMessageFold(DialogBlock, {
    Opened: () => D10.makeNoopStep(),
    Closed: () => D10.makeNoopStep(),
    CompletedClose: () => D10.makeNoopStep()
  })
})
const u10_1 = D10.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-10-1" }) }
})
const p10_1 = u10_1.withOutMessagePolicy({
  fold: D10.makeOutMessageFold(PopoverBlock, {
    Opened: () => D10.makeNoopStep(),
    Closed: () => D10.makeNoopStep()
  })
})
const u10_2 = D10.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-10-2" }) }
})
const p10_2 = u10_2.withOutMessagePolicy({
  fold: D10.makeOutMessageFold(TooltipBlock, {
    Shown: () => D10.makeNoopStep(),
    Hidden: () => D10.makeNoopStep()
  })
})
const u10_3 = D10.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-10-3", min: 0, max: 100, step: 1 })
  }
})
const p10_3 = u10_3.withOutMessagePolicy({
  fold: D10.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D10.makeNoopStep()
  })
})
const u10_4 = D10.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-10-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p10_4 = u10_4.withOutMessagePolicy({
  fold: D10.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D10.makeNoopStep(),
    SelectedDate: () => D10.makeNoopStep(),
    ClearedDate: () => D10.makeNoopStep()
  })
})
const u10_5 = D10.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-10-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p10_5 = u10_5.withOutMessagePolicy({
  fold: D10.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D10.makeNoopStep(),
    SelectedDate: () => D10.makeNoopStep()
  })
})
const u10_6 = D10.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-10-6" }) }
})
const p10_6 = u10_6.withOutMessagePolicy({
  fold: D10.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D10.makeNoopStep(),
    ChangedKeyboardTarget: () => D10.makeNoopStep(),
    Reordered: () => D10.makeNoopStep(),
    Cancelled: () => D10.makeNoopStep()
  })
})
const C10 = D10.makeComposition({
  bindings: [p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6]
})
const prep10 = () =>
  C10.prepareBlock({
    init: C10.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C10.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd10_0({ value: model.count }),
          Cmd10_1({ value: model.count }),
          Cmd10_2({ value: model.count }),
          Cmd10_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O10.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O10.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O10.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O10.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd10_0.layer,
      Cmd10_1.layer,
      Cmd10_2.layer,
      Cmd10_3.layer
    ),
    operations: { start: () => Tuple.make(E10.Start()) }
  })
const B10: Block.FromAssemblyWithOutMessage<typeof M10, typeof prep10> =
  Block.assemble(prep10)
const M11 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E11 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O11 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D11 = Block.makeDefinition("Child11", {
  Model: M11,
  Message: E11,
  OutMessage: O11
})
const Cmd11_0 = D11.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E11.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E11.Done0(args))
  }
})
const Cmd11_1 = D11.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E11.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E11.Done1(args))
  }
})
const Cmd11_2 = D11.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E11.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E11.Done2(args))
  }
})
const Cmd11_3 = D11.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E11.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E11.Done3(args))
  }
})
const u11_0 = D11.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-11-0" }) }
})
const p11_0 = u11_0.withOutMessagePolicy({
  fold: D11.makeOutMessageFold(DialogBlock, {
    Opened: () => D11.makeNoopStep(),
    Closed: () => D11.makeNoopStep(),
    CompletedClose: () => D11.makeNoopStep()
  })
})
const u11_1 = D11.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-11-1" }) }
})
const p11_1 = u11_1.withOutMessagePolicy({
  fold: D11.makeOutMessageFold(PopoverBlock, {
    Opened: () => D11.makeNoopStep(),
    Closed: () => D11.makeNoopStep()
  })
})
const u11_2 = D11.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-11-2" }) }
})
const p11_2 = u11_2.withOutMessagePolicy({
  fold: D11.makeOutMessageFold(TooltipBlock, {
    Shown: () => D11.makeNoopStep(),
    Hidden: () => D11.makeNoopStep()
  })
})
const u11_3 = D11.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-11-3", min: 0, max: 100, step: 1 })
  }
})
const p11_3 = u11_3.withOutMessagePolicy({
  fold: D11.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D11.makeNoopStep()
  })
})
const u11_4 = D11.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-11-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p11_4 = u11_4.withOutMessagePolicy({
  fold: D11.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D11.makeNoopStep(),
    SelectedDate: () => D11.makeNoopStep(),
    ClearedDate: () => D11.makeNoopStep()
  })
})
const u11_5 = D11.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-11-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p11_5 = u11_5.withOutMessagePolicy({
  fold: D11.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D11.makeNoopStep(),
    SelectedDate: () => D11.makeNoopStep()
  })
})
const u11_6 = D11.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-11-6" }) }
})
const p11_6 = u11_6.withOutMessagePolicy({
  fold: D11.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D11.makeNoopStep(),
    ChangedKeyboardTarget: () => D11.makeNoopStep(),
    Reordered: () => D11.makeNoopStep(),
    Cancelled: () => D11.makeNoopStep()
  })
})
const C11 = D11.makeComposition({
  bindings: [p11_0, p11_1, p11_2, p11_3, p11_4, p11_5, p11_6]
})
const prep11 = () =>
  C11.prepareBlock({
    init: C11.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C11.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd11_0({ value: model.count }),
          Cmd11_1({ value: model.count }),
          Cmd11_2({ value: model.count }),
          Cmd11_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O11.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O11.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O11.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O11.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd11_0.layer,
      Cmd11_1.layer,
      Cmd11_2.layer,
      Cmd11_3.layer
    ),
    operations: { start: () => Tuple.make(E11.Start()) }
  })
const B11: Block.FromAssemblyWithOutMessage<typeof M11, typeof prep11> =
  Block.assemble(prep11)
const M12 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E12 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O12 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D12 = Block.makeDefinition("Child12", {
  Model: M12,
  Message: E12,
  OutMessage: O12
})
const Cmd12_0 = D12.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E12.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E12.Done0(args))
  }
})
const Cmd12_1 = D12.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E12.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E12.Done1(args))
  }
})
const Cmd12_2 = D12.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E12.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E12.Done2(args))
  }
})
const Cmd12_3 = D12.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E12.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E12.Done3(args))
  }
})
const u12_0 = D12.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-12-0" }) }
})
const p12_0 = u12_0.withOutMessagePolicy({
  fold: D12.makeOutMessageFold(DialogBlock, {
    Opened: () => D12.makeNoopStep(),
    Closed: () => D12.makeNoopStep(),
    CompletedClose: () => D12.makeNoopStep()
  })
})
const u12_1 = D12.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-12-1" }) }
})
const p12_1 = u12_1.withOutMessagePolicy({
  fold: D12.makeOutMessageFold(PopoverBlock, {
    Opened: () => D12.makeNoopStep(),
    Closed: () => D12.makeNoopStep()
  })
})
const u12_2 = D12.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-12-2" }) }
})
const p12_2 = u12_2.withOutMessagePolicy({
  fold: D12.makeOutMessageFold(TooltipBlock, {
    Shown: () => D12.makeNoopStep(),
    Hidden: () => D12.makeNoopStep()
  })
})
const u12_3 = D12.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-12-3", min: 0, max: 100, step: 1 })
  }
})
const p12_3 = u12_3.withOutMessagePolicy({
  fold: D12.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D12.makeNoopStep()
  })
})
const u12_4 = D12.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-12-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p12_4 = u12_4.withOutMessagePolicy({
  fold: D12.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D12.makeNoopStep(),
    SelectedDate: () => D12.makeNoopStep(),
    ClearedDate: () => D12.makeNoopStep()
  })
})
const u12_5 = D12.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-12-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p12_5 = u12_5.withOutMessagePolicy({
  fold: D12.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D12.makeNoopStep(),
    SelectedDate: () => D12.makeNoopStep()
  })
})
const u12_6 = D12.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-12-6" }) }
})
const p12_6 = u12_6.withOutMessagePolicy({
  fold: D12.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D12.makeNoopStep(),
    ChangedKeyboardTarget: () => D12.makeNoopStep(),
    Reordered: () => D12.makeNoopStep(),
    Cancelled: () => D12.makeNoopStep()
  })
})
const C12 = D12.makeComposition({
  bindings: [p12_0, p12_1, p12_2, p12_3, p12_4, p12_5, p12_6]
})
const prep12 = () =>
  C12.prepareBlock({
    init: C12.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C12.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd12_0({ value: model.count }),
          Cmd12_1({ value: model.count }),
          Cmd12_2({ value: model.count }),
          Cmd12_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O12.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O12.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O12.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O12.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd12_0.layer,
      Cmd12_1.layer,
      Cmd12_2.layer,
      Cmd12_3.layer
    ),
    operations: { start: () => Tuple.make(E12.Start()) }
  })
const B12: Block.FromAssemblyWithOutMessage<typeof M12, typeof prep12> =
  Block.assemble(prep12)
const M13 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E13 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O13 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D13 = Block.makeDefinition("Child13", {
  Model: M13,
  Message: E13,
  OutMessage: O13
})
const Cmd13_0 = D13.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E13.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E13.Done0(args))
  }
})
const Cmd13_1 = D13.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E13.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E13.Done1(args))
  }
})
const Cmd13_2 = D13.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E13.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E13.Done2(args))
  }
})
const Cmd13_3 = D13.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E13.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E13.Done3(args))
  }
})
const u13_0 = D13.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-13-0" }) }
})
const p13_0 = u13_0.withOutMessagePolicy({
  fold: D13.makeOutMessageFold(DialogBlock, {
    Opened: () => D13.makeNoopStep(),
    Closed: () => D13.makeNoopStep(),
    CompletedClose: () => D13.makeNoopStep()
  })
})
const u13_1 = D13.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-13-1" }) }
})
const p13_1 = u13_1.withOutMessagePolicy({
  fold: D13.makeOutMessageFold(PopoverBlock, {
    Opened: () => D13.makeNoopStep(),
    Closed: () => D13.makeNoopStep()
  })
})
const u13_2 = D13.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-13-2" }) }
})
const p13_2 = u13_2.withOutMessagePolicy({
  fold: D13.makeOutMessageFold(TooltipBlock, {
    Shown: () => D13.makeNoopStep(),
    Hidden: () => D13.makeNoopStep()
  })
})
const u13_3 = D13.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-13-3", min: 0, max: 100, step: 1 })
  }
})
const p13_3 = u13_3.withOutMessagePolicy({
  fold: D13.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D13.makeNoopStep()
  })
})
const u13_4 = D13.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-13-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p13_4 = u13_4.withOutMessagePolicy({
  fold: D13.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D13.makeNoopStep(),
    SelectedDate: () => D13.makeNoopStep(),
    ClearedDate: () => D13.makeNoopStep()
  })
})
const u13_5 = D13.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-13-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p13_5 = u13_5.withOutMessagePolicy({
  fold: D13.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D13.makeNoopStep(),
    SelectedDate: () => D13.makeNoopStep()
  })
})
const u13_6 = D13.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-13-6" }) }
})
const p13_6 = u13_6.withOutMessagePolicy({
  fold: D13.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D13.makeNoopStep(),
    ChangedKeyboardTarget: () => D13.makeNoopStep(),
    Reordered: () => D13.makeNoopStep(),
    Cancelled: () => D13.makeNoopStep()
  })
})
const C13 = D13.makeComposition({
  bindings: [p13_0, p13_1, p13_2, p13_3, p13_4, p13_5, p13_6]
})
const prep13 = () =>
  C13.prepareBlock({
    init: C13.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C13.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd13_0({ value: model.count }),
          Cmd13_1({ value: model.count }),
          Cmd13_2({ value: model.count }),
          Cmd13_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O13.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O13.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O13.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O13.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd13_0.layer,
      Cmd13_1.layer,
      Cmd13_2.layer,
      Cmd13_3.layer
    ),
    operations: { start: () => Tuple.make(E13.Start()) }
  })
const B13: Block.FromAssemblyWithOutMessage<typeof M13, typeof prep13> =
  Block.assemble(prep13)
const M14 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E14 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O14 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D14 = Block.makeDefinition("Child14", {
  Model: M14,
  Message: E14,
  OutMessage: O14
})
const Cmd14_0 = D14.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E14.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E14.Done0(args))
  }
})
const Cmd14_1 = D14.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E14.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E14.Done1(args))
  }
})
const Cmd14_2 = D14.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E14.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E14.Done2(args))
  }
})
const Cmd14_3 = D14.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E14.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E14.Done3(args))
  }
})
const u14_0 = D14.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-14-0" }) }
})
const p14_0 = u14_0.withOutMessagePolicy({
  fold: D14.makeOutMessageFold(DialogBlock, {
    Opened: () => D14.makeNoopStep(),
    Closed: () => D14.makeNoopStep(),
    CompletedClose: () => D14.makeNoopStep()
  })
})
const u14_1 = D14.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-14-1" }) }
})
const p14_1 = u14_1.withOutMessagePolicy({
  fold: D14.makeOutMessageFold(PopoverBlock, {
    Opened: () => D14.makeNoopStep(),
    Closed: () => D14.makeNoopStep()
  })
})
const u14_2 = D14.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-14-2" }) }
})
const p14_2 = u14_2.withOutMessagePolicy({
  fold: D14.makeOutMessageFold(TooltipBlock, {
    Shown: () => D14.makeNoopStep(),
    Hidden: () => D14.makeNoopStep()
  })
})
const u14_3 = D14.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-14-3", min: 0, max: 100, step: 1 })
  }
})
const p14_3 = u14_3.withOutMessagePolicy({
  fold: D14.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D14.makeNoopStep()
  })
})
const u14_4 = D14.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-14-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p14_4 = u14_4.withOutMessagePolicy({
  fold: D14.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D14.makeNoopStep(),
    SelectedDate: () => D14.makeNoopStep(),
    ClearedDate: () => D14.makeNoopStep()
  })
})
const u14_5 = D14.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-14-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p14_5 = u14_5.withOutMessagePolicy({
  fold: D14.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D14.makeNoopStep(),
    SelectedDate: () => D14.makeNoopStep()
  })
})
const u14_6 = D14.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-14-6" }) }
})
const p14_6 = u14_6.withOutMessagePolicy({
  fold: D14.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D14.makeNoopStep(),
    ChangedKeyboardTarget: () => D14.makeNoopStep(),
    Reordered: () => D14.makeNoopStep(),
    Cancelled: () => D14.makeNoopStep()
  })
})
const C14 = D14.makeComposition({
  bindings: [p14_0, p14_1, p14_2, p14_3, p14_4, p14_5, p14_6]
})
const prep14 = () =>
  C14.prepareBlock({
    init: C14.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C14.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd14_0({ value: model.count }),
          Cmd14_1({ value: model.count }),
          Cmd14_2({ value: model.count }),
          Cmd14_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O14.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O14.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O14.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O14.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd14_0.layer,
      Cmd14_1.layer,
      Cmd14_2.layer,
      Cmd14_3.layer
    ),
    operations: { start: () => Tuple.make(E14.Start()) }
  })
const B14: Block.FromAssemblyWithOutMessage<typeof M14, typeof prep14> =
  Block.assemble(prep14)
const M15 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E15 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O15 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D15 = Block.makeDefinition("Child15", {
  Model: M15,
  Message: E15,
  OutMessage: O15
})
const Cmd15_0 = D15.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E15.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E15.Done0(args))
  }
})
const Cmd15_1 = D15.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E15.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E15.Done1(args))
  }
})
const Cmd15_2 = D15.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E15.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E15.Done2(args))
  }
})
const Cmd15_3 = D15.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E15.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E15.Done3(args))
  }
})
const u15_0 = D15.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-15-0" }) }
})
const p15_0 = u15_0.withOutMessagePolicy({
  fold: D15.makeOutMessageFold(DialogBlock, {
    Opened: () => D15.makeNoopStep(),
    Closed: () => D15.makeNoopStep(),
    CompletedClose: () => D15.makeNoopStep()
  })
})
const u15_1 = D15.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-15-1" }) }
})
const p15_1 = u15_1.withOutMessagePolicy({
  fold: D15.makeOutMessageFold(PopoverBlock, {
    Opened: () => D15.makeNoopStep(),
    Closed: () => D15.makeNoopStep()
  })
})
const u15_2 = D15.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-15-2" }) }
})
const p15_2 = u15_2.withOutMessagePolicy({
  fold: D15.makeOutMessageFold(TooltipBlock, {
    Shown: () => D15.makeNoopStep(),
    Hidden: () => D15.makeNoopStep()
  })
})
const u15_3 = D15.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-15-3", min: 0, max: 100, step: 1 })
  }
})
const p15_3 = u15_3.withOutMessagePolicy({
  fold: D15.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D15.makeNoopStep()
  })
})
const u15_4 = D15.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-15-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p15_4 = u15_4.withOutMessagePolicy({
  fold: D15.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D15.makeNoopStep(),
    SelectedDate: () => D15.makeNoopStep(),
    ClearedDate: () => D15.makeNoopStep()
  })
})
const u15_5 = D15.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-15-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p15_5 = u15_5.withOutMessagePolicy({
  fold: D15.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D15.makeNoopStep(),
    SelectedDate: () => D15.makeNoopStep()
  })
})
const u15_6 = D15.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-15-6" }) }
})
const p15_6 = u15_6.withOutMessagePolicy({
  fold: D15.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D15.makeNoopStep(),
    ChangedKeyboardTarget: () => D15.makeNoopStep(),
    Reordered: () => D15.makeNoopStep(),
    Cancelled: () => D15.makeNoopStep()
  })
})
const C15 = D15.makeComposition({
  bindings: [p15_0, p15_1, p15_2, p15_3, p15_4, p15_5, p15_6]
})
const prep15 = () =>
  C15.prepareBlock({
    init: C15.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C15.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd15_0({ value: model.count }),
          Cmd15_1({ value: model.count }),
          Cmd15_2({ value: model.count }),
          Cmd15_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O15.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O15.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O15.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O15.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd15_0.layer,
      Cmd15_1.layer,
      Cmd15_2.layer,
      Cmd15_3.layer
    ),
    operations: { start: () => Tuple.make(E15.Start()) }
  })
const B15: Block.FromAssemblyWithOutMessage<typeof M15, typeof prep15> =
  Block.assemble(prep15)
const M16 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E16 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O16 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D16 = Block.makeDefinition("Child16", {
  Model: M16,
  Message: E16,
  OutMessage: O16
})
const Cmd16_0 = D16.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E16.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E16.Done0(args))
  }
})
const Cmd16_1 = D16.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E16.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E16.Done1(args))
  }
})
const Cmd16_2 = D16.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E16.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E16.Done2(args))
  }
})
const Cmd16_3 = D16.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E16.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E16.Done3(args))
  }
})
const u16_0 = D16.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-16-0" }) }
})
const p16_0 = u16_0.withOutMessagePolicy({
  fold: D16.makeOutMessageFold(DialogBlock, {
    Opened: () => D16.makeNoopStep(),
    Closed: () => D16.makeNoopStep(),
    CompletedClose: () => D16.makeNoopStep()
  })
})
const u16_1 = D16.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-16-1" }) }
})
const p16_1 = u16_1.withOutMessagePolicy({
  fold: D16.makeOutMessageFold(PopoverBlock, {
    Opened: () => D16.makeNoopStep(),
    Closed: () => D16.makeNoopStep()
  })
})
const u16_2 = D16.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-16-2" }) }
})
const p16_2 = u16_2.withOutMessagePolicy({
  fold: D16.makeOutMessageFold(TooltipBlock, {
    Shown: () => D16.makeNoopStep(),
    Hidden: () => D16.makeNoopStep()
  })
})
const u16_3 = D16.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-16-3", min: 0, max: 100, step: 1 })
  }
})
const p16_3 = u16_3.withOutMessagePolicy({
  fold: D16.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D16.makeNoopStep()
  })
})
const u16_4 = D16.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-16-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p16_4 = u16_4.withOutMessagePolicy({
  fold: D16.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D16.makeNoopStep(),
    SelectedDate: () => D16.makeNoopStep(),
    ClearedDate: () => D16.makeNoopStep()
  })
})
const u16_5 = D16.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-16-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p16_5 = u16_5.withOutMessagePolicy({
  fold: D16.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D16.makeNoopStep(),
    SelectedDate: () => D16.makeNoopStep()
  })
})
const u16_6 = D16.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-16-6" }) }
})
const p16_6 = u16_6.withOutMessagePolicy({
  fold: D16.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D16.makeNoopStep(),
    ChangedKeyboardTarget: () => D16.makeNoopStep(),
    Reordered: () => D16.makeNoopStep(),
    Cancelled: () => D16.makeNoopStep()
  })
})
const C16 = D16.makeComposition({
  bindings: [p16_0, p16_1, p16_2, p16_3, p16_4, p16_5, p16_6]
})
const prep16 = () =>
  C16.prepareBlock({
    init: C16.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C16.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd16_0({ value: model.count }),
          Cmd16_1({ value: model.count }),
          Cmd16_2({ value: model.count }),
          Cmd16_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O16.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O16.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O16.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O16.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd16_0.layer,
      Cmd16_1.layer,
      Cmd16_2.layer,
      Cmd16_3.layer
    ),
    operations: { start: () => Tuple.make(E16.Start()) }
  })
const B16: Block.FromAssemblyWithOutMessage<typeof M16, typeof prep16> =
  Block.assemble(prep16)
const M17 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E17 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O17 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D17 = Block.makeDefinition("Child17", {
  Model: M17,
  Message: E17,
  OutMessage: O17
})
const Cmd17_0 = D17.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E17.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E17.Done0(args))
  }
})
const Cmd17_1 = D17.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E17.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E17.Done1(args))
  }
})
const Cmd17_2 = D17.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E17.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E17.Done2(args))
  }
})
const Cmd17_3 = D17.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E17.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E17.Done3(args))
  }
})
const u17_0 = D17.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-17-0" }) }
})
const p17_0 = u17_0.withOutMessagePolicy({
  fold: D17.makeOutMessageFold(DialogBlock, {
    Opened: () => D17.makeNoopStep(),
    Closed: () => D17.makeNoopStep(),
    CompletedClose: () => D17.makeNoopStep()
  })
})
const u17_1 = D17.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-17-1" }) }
})
const p17_1 = u17_1.withOutMessagePolicy({
  fold: D17.makeOutMessageFold(PopoverBlock, {
    Opened: () => D17.makeNoopStep(),
    Closed: () => D17.makeNoopStep()
  })
})
const u17_2 = D17.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-17-2" }) }
})
const p17_2 = u17_2.withOutMessagePolicy({
  fold: D17.makeOutMessageFold(TooltipBlock, {
    Shown: () => D17.makeNoopStep(),
    Hidden: () => D17.makeNoopStep()
  })
})
const u17_3 = D17.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-17-3", min: 0, max: 100, step: 1 })
  }
})
const p17_3 = u17_3.withOutMessagePolicy({
  fold: D17.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D17.makeNoopStep()
  })
})
const u17_4 = D17.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-17-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p17_4 = u17_4.withOutMessagePolicy({
  fold: D17.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D17.makeNoopStep(),
    SelectedDate: () => D17.makeNoopStep(),
    ClearedDate: () => D17.makeNoopStep()
  })
})
const u17_5 = D17.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-17-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p17_5 = u17_5.withOutMessagePolicy({
  fold: D17.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D17.makeNoopStep(),
    SelectedDate: () => D17.makeNoopStep()
  })
})
const u17_6 = D17.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-17-6" }) }
})
const p17_6 = u17_6.withOutMessagePolicy({
  fold: D17.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D17.makeNoopStep(),
    ChangedKeyboardTarget: () => D17.makeNoopStep(),
    Reordered: () => D17.makeNoopStep(),
    Cancelled: () => D17.makeNoopStep()
  })
})
const C17 = D17.makeComposition({
  bindings: [p17_0, p17_1, p17_2, p17_3, p17_4, p17_5, p17_6]
})
const prep17 = () =>
  C17.prepareBlock({
    init: C17.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C17.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd17_0({ value: model.count }),
          Cmd17_1({ value: model.count }),
          Cmd17_2({ value: model.count }),
          Cmd17_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O17.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O17.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O17.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O17.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd17_0.layer,
      Cmd17_1.layer,
      Cmd17_2.layer,
      Cmd17_3.layer
    ),
    operations: { start: () => Tuple.make(E17.Start()) }
  })
const B17: Block.FromAssemblyWithOutMessage<typeof M17, typeof prep17> =
  Block.assemble(prep17)
const M18 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E18 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O18 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D18 = Block.makeDefinition("Child18", {
  Model: M18,
  Message: E18,
  OutMessage: O18
})
const Cmd18_0 = D18.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E18.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E18.Done0(args))
  }
})
const Cmd18_1 = D18.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E18.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E18.Done1(args))
  }
})
const Cmd18_2 = D18.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E18.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E18.Done2(args))
  }
})
const Cmd18_3 = D18.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E18.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E18.Done3(args))
  }
})
const u18_0 = D18.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-18-0" }) }
})
const p18_0 = u18_0.withOutMessagePolicy({
  fold: D18.makeOutMessageFold(DialogBlock, {
    Opened: () => D18.makeNoopStep(),
    Closed: () => D18.makeNoopStep(),
    CompletedClose: () => D18.makeNoopStep()
  })
})
const u18_1 = D18.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-18-1" }) }
})
const p18_1 = u18_1.withOutMessagePolicy({
  fold: D18.makeOutMessageFold(PopoverBlock, {
    Opened: () => D18.makeNoopStep(),
    Closed: () => D18.makeNoopStep()
  })
})
const u18_2 = D18.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-18-2" }) }
})
const p18_2 = u18_2.withOutMessagePolicy({
  fold: D18.makeOutMessageFold(TooltipBlock, {
    Shown: () => D18.makeNoopStep(),
    Hidden: () => D18.makeNoopStep()
  })
})
const u18_3 = D18.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-18-3", min: 0, max: 100, step: 1 })
  }
})
const p18_3 = u18_3.withOutMessagePolicy({
  fold: D18.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D18.makeNoopStep()
  })
})
const u18_4 = D18.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-18-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p18_4 = u18_4.withOutMessagePolicy({
  fold: D18.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D18.makeNoopStep(),
    SelectedDate: () => D18.makeNoopStep(),
    ClearedDate: () => D18.makeNoopStep()
  })
})
const u18_5 = D18.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-18-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p18_5 = u18_5.withOutMessagePolicy({
  fold: D18.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D18.makeNoopStep(),
    SelectedDate: () => D18.makeNoopStep()
  })
})
const u18_6 = D18.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-18-6" }) }
})
const p18_6 = u18_6.withOutMessagePolicy({
  fold: D18.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D18.makeNoopStep(),
    ChangedKeyboardTarget: () => D18.makeNoopStep(),
    Reordered: () => D18.makeNoopStep(),
    Cancelled: () => D18.makeNoopStep()
  })
})
const C18 = D18.makeComposition({
  bindings: [p18_0, p18_1, p18_2, p18_3, p18_4, p18_5, p18_6]
})
const prep18 = () =>
  C18.prepareBlock({
    init: C18.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C18.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd18_0({ value: model.count }),
          Cmd18_1({ value: model.count }),
          Cmd18_2({ value: model.count }),
          Cmd18_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O18.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O18.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O18.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O18.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd18_0.layer,
      Cmd18_1.layer,
      Cmd18_2.layer,
      Cmd18_3.layer
    ),
    operations: { start: () => Tuple.make(E18.Start()) }
  })
const B18: Block.FromAssemblyWithOutMessage<typeof M18, typeof prep18> =
  Block.assemble(prep18)
const M19 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E19 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O19 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D19 = Block.makeDefinition("Child19", {
  Model: M19,
  Message: E19,
  OutMessage: O19
})
const Cmd19_0 = D19.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E19.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E19.Done0(args))
  }
})
const Cmd19_1 = D19.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E19.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E19.Done1(args))
  }
})
const Cmd19_2 = D19.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E19.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E19.Done2(args))
  }
})
const Cmd19_3 = D19.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E19.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E19.Done3(args))
  }
})
const u19_0 = D19.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-19-0" }) }
})
const p19_0 = u19_0.withOutMessagePolicy({
  fold: D19.makeOutMessageFold(DialogBlock, {
    Opened: () => D19.makeNoopStep(),
    Closed: () => D19.makeNoopStep(),
    CompletedClose: () => D19.makeNoopStep()
  })
})
const u19_1 = D19.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-19-1" }) }
})
const p19_1 = u19_1.withOutMessagePolicy({
  fold: D19.makeOutMessageFold(PopoverBlock, {
    Opened: () => D19.makeNoopStep(),
    Closed: () => D19.makeNoopStep()
  })
})
const u19_2 = D19.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-19-2" }) }
})
const p19_2 = u19_2.withOutMessagePolicy({
  fold: D19.makeOutMessageFold(TooltipBlock, {
    Shown: () => D19.makeNoopStep(),
    Hidden: () => D19.makeNoopStep()
  })
})
const u19_3 = D19.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-19-3", min: 0, max: 100, step: 1 })
  }
})
const p19_3 = u19_3.withOutMessagePolicy({
  fold: D19.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D19.makeNoopStep()
  })
})
const u19_4 = D19.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-19-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p19_4 = u19_4.withOutMessagePolicy({
  fold: D19.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D19.makeNoopStep(),
    SelectedDate: () => D19.makeNoopStep(),
    ClearedDate: () => D19.makeNoopStep()
  })
})
const u19_5 = D19.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-19-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p19_5 = u19_5.withOutMessagePolicy({
  fold: D19.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D19.makeNoopStep(),
    SelectedDate: () => D19.makeNoopStep()
  })
})
const u19_6 = D19.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-19-6" }) }
})
const p19_6 = u19_6.withOutMessagePolicy({
  fold: D19.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D19.makeNoopStep(),
    ChangedKeyboardTarget: () => D19.makeNoopStep(),
    Reordered: () => D19.makeNoopStep(),
    Cancelled: () => D19.makeNoopStep()
  })
})
const C19 = D19.makeComposition({
  bindings: [p19_0, p19_1, p19_2, p19_3, p19_4, p19_5, p19_6]
})
const prep19 = () =>
  C19.prepareBlock({
    init: C19.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C19.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd19_0({ value: model.count }),
          Cmd19_1({ value: model.count }),
          Cmd19_2({ value: model.count }),
          Cmd19_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O19.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O19.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O19.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O19.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd19_0.layer,
      Cmd19_1.layer,
      Cmd19_2.layer,
      Cmd19_3.layer
    ),
    operations: { start: () => Tuple.make(E19.Start()) }
  })
const B19: Block.FromAssemblyWithOutMessage<typeof M19, typeof prep19> =
  Block.assemble(prep19)
const M20 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E20 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O20 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D20 = Block.makeDefinition("Child20", {
  Model: M20,
  Message: E20,
  OutMessage: O20
})
const Cmd20_0 = D20.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E20.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E20.Done0(args))
  }
})
const Cmd20_1 = D20.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E20.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E20.Done1(args))
  }
})
const Cmd20_2 = D20.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E20.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E20.Done2(args))
  }
})
const Cmd20_3 = D20.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E20.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E20.Done3(args))
  }
})
const u20_0 = D20.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-20-0" }) }
})
const p20_0 = u20_0.withOutMessagePolicy({
  fold: D20.makeOutMessageFold(DialogBlock, {
    Opened: () => D20.makeNoopStep(),
    Closed: () => D20.makeNoopStep(),
    CompletedClose: () => D20.makeNoopStep()
  })
})
const u20_1 = D20.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-20-1" }) }
})
const p20_1 = u20_1.withOutMessagePolicy({
  fold: D20.makeOutMessageFold(PopoverBlock, {
    Opened: () => D20.makeNoopStep(),
    Closed: () => D20.makeNoopStep()
  })
})
const u20_2 = D20.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-20-2" }) }
})
const p20_2 = u20_2.withOutMessagePolicy({
  fold: D20.makeOutMessageFold(TooltipBlock, {
    Shown: () => D20.makeNoopStep(),
    Hidden: () => D20.makeNoopStep()
  })
})
const u20_3 = D20.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-20-3", min: 0, max: 100, step: 1 })
  }
})
const p20_3 = u20_3.withOutMessagePolicy({
  fold: D20.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D20.makeNoopStep()
  })
})
const u20_4 = D20.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-20-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p20_4 = u20_4.withOutMessagePolicy({
  fold: D20.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D20.makeNoopStep(),
    SelectedDate: () => D20.makeNoopStep(),
    ClearedDate: () => D20.makeNoopStep()
  })
})
const u20_5 = D20.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-20-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p20_5 = u20_5.withOutMessagePolicy({
  fold: D20.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D20.makeNoopStep(),
    SelectedDate: () => D20.makeNoopStep()
  })
})
const u20_6 = D20.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-20-6" }) }
})
const p20_6 = u20_6.withOutMessagePolicy({
  fold: D20.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D20.makeNoopStep(),
    ChangedKeyboardTarget: () => D20.makeNoopStep(),
    Reordered: () => D20.makeNoopStep(),
    Cancelled: () => D20.makeNoopStep()
  })
})
const C20 = D20.makeComposition({
  bindings: [p20_0, p20_1, p20_2, p20_3, p20_4, p20_5, p20_6]
})
const prep20 = () =>
  C20.prepareBlock({
    init: C20.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C20.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd20_0({ value: model.count }),
          Cmd20_1({ value: model.count }),
          Cmd20_2({ value: model.count }),
          Cmd20_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O20.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O20.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O20.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O20.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd20_0.layer,
      Cmd20_1.layer,
      Cmd20_2.layer,
      Cmd20_3.layer
    ),
    operations: { start: () => Tuple.make(E20.Start()) }
  })
const B20: Block.FromAssemblyWithOutMessage<typeof M20, typeof prep20> =
  Block.assemble(prep20)
const M21 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E21 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O21 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D21 = Block.makeDefinition("Child21", {
  Model: M21,
  Message: E21,
  OutMessage: O21
})
const Cmd21_0 = D21.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E21.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E21.Done0(args))
  }
})
const Cmd21_1 = D21.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E21.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E21.Done1(args))
  }
})
const Cmd21_2 = D21.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E21.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E21.Done2(args))
  }
})
const Cmd21_3 = D21.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E21.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E21.Done3(args))
  }
})
const u21_0 = D21.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-21-0" }) }
})
const p21_0 = u21_0.withOutMessagePolicy({
  fold: D21.makeOutMessageFold(DialogBlock, {
    Opened: () => D21.makeNoopStep(),
    Closed: () => D21.makeNoopStep(),
    CompletedClose: () => D21.makeNoopStep()
  })
})
const u21_1 = D21.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-21-1" }) }
})
const p21_1 = u21_1.withOutMessagePolicy({
  fold: D21.makeOutMessageFold(PopoverBlock, {
    Opened: () => D21.makeNoopStep(),
    Closed: () => D21.makeNoopStep()
  })
})
const u21_2 = D21.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-21-2" }) }
})
const p21_2 = u21_2.withOutMessagePolicy({
  fold: D21.makeOutMessageFold(TooltipBlock, {
    Shown: () => D21.makeNoopStep(),
    Hidden: () => D21.makeNoopStep()
  })
})
const u21_3 = D21.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-21-3", min: 0, max: 100, step: 1 })
  }
})
const p21_3 = u21_3.withOutMessagePolicy({
  fold: D21.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D21.makeNoopStep()
  })
})
const u21_4 = D21.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-21-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p21_4 = u21_4.withOutMessagePolicy({
  fold: D21.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D21.makeNoopStep(),
    SelectedDate: () => D21.makeNoopStep(),
    ClearedDate: () => D21.makeNoopStep()
  })
})
const u21_5 = D21.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-21-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p21_5 = u21_5.withOutMessagePolicy({
  fold: D21.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D21.makeNoopStep(),
    SelectedDate: () => D21.makeNoopStep()
  })
})
const u21_6 = D21.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-21-6" }) }
})
const p21_6 = u21_6.withOutMessagePolicy({
  fold: D21.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D21.makeNoopStep(),
    ChangedKeyboardTarget: () => D21.makeNoopStep(),
    Reordered: () => D21.makeNoopStep(),
    Cancelled: () => D21.makeNoopStep()
  })
})
const C21 = D21.makeComposition({
  bindings: [p21_0, p21_1, p21_2, p21_3, p21_4, p21_5, p21_6]
})
const prep21 = () =>
  C21.prepareBlock({
    init: C21.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C21.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd21_0({ value: model.count }),
          Cmd21_1({ value: model.count }),
          Cmd21_2({ value: model.count }),
          Cmd21_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O21.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O21.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O21.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O21.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd21_0.layer,
      Cmd21_1.layer,
      Cmd21_2.layer,
      Cmd21_3.layer
    ),
    operations: { start: () => Tuple.make(E21.Start()) }
  })
const B21: Block.FromAssemblyWithOutMessage<typeof M21, typeof prep21> =
  Block.assemble(prep21)
const M22 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E22 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O22 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D22 = Block.makeDefinition("Child22", {
  Model: M22,
  Message: E22,
  OutMessage: O22
})
const Cmd22_0 = D22.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E22.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E22.Done0(args))
  }
})
const Cmd22_1 = D22.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E22.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E22.Done1(args))
  }
})
const Cmd22_2 = D22.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E22.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E22.Done2(args))
  }
})
const Cmd22_3 = D22.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E22.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E22.Done3(args))
  }
})
const u22_0 = D22.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-22-0" }) }
})
const p22_0 = u22_0.withOutMessagePolicy({
  fold: D22.makeOutMessageFold(DialogBlock, {
    Opened: () => D22.makeNoopStep(),
    Closed: () => D22.makeNoopStep(),
    CompletedClose: () => D22.makeNoopStep()
  })
})
const u22_1 = D22.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-22-1" }) }
})
const p22_1 = u22_1.withOutMessagePolicy({
  fold: D22.makeOutMessageFold(PopoverBlock, {
    Opened: () => D22.makeNoopStep(),
    Closed: () => D22.makeNoopStep()
  })
})
const u22_2 = D22.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-22-2" }) }
})
const p22_2 = u22_2.withOutMessagePolicy({
  fold: D22.makeOutMessageFold(TooltipBlock, {
    Shown: () => D22.makeNoopStep(),
    Hidden: () => D22.makeNoopStep()
  })
})
const u22_3 = D22.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-22-3", min: 0, max: 100, step: 1 })
  }
})
const p22_3 = u22_3.withOutMessagePolicy({
  fold: D22.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D22.makeNoopStep()
  })
})
const u22_4 = D22.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-22-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p22_4 = u22_4.withOutMessagePolicy({
  fold: D22.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D22.makeNoopStep(),
    SelectedDate: () => D22.makeNoopStep(),
    ClearedDate: () => D22.makeNoopStep()
  })
})
const u22_5 = D22.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-22-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p22_5 = u22_5.withOutMessagePolicy({
  fold: D22.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D22.makeNoopStep(),
    SelectedDate: () => D22.makeNoopStep()
  })
})
const u22_6 = D22.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-22-6" }) }
})
const p22_6 = u22_6.withOutMessagePolicy({
  fold: D22.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D22.makeNoopStep(),
    ChangedKeyboardTarget: () => D22.makeNoopStep(),
    Reordered: () => D22.makeNoopStep(),
    Cancelled: () => D22.makeNoopStep()
  })
})
const C22 = D22.makeComposition({
  bindings: [p22_0, p22_1, p22_2, p22_3, p22_4, p22_5, p22_6]
})
const prep22 = () =>
  C22.prepareBlock({
    init: C22.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C22.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd22_0({ value: model.count }),
          Cmd22_1({ value: model.count }),
          Cmd22_2({ value: model.count }),
          Cmd22_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O22.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O22.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O22.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O22.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd22_0.layer,
      Cmd22_1.layer,
      Cmd22_2.layer,
      Cmd22_3.layer
    ),
    operations: { start: () => Tuple.make(E22.Start()) }
  })
const B22: Block.FromAssemblyWithOutMessage<typeof M22, typeof prep22> =
  Block.assemble(prep22)
const M23 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E23 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O23 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D23 = Block.makeDefinition("Child23", {
  Model: M23,
  Message: E23,
  OutMessage: O23
})
const Cmd23_0 = D23.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E23.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E23.Done0(args))
  }
})
const Cmd23_1 = D23.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E23.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E23.Done1(args))
  }
})
const Cmd23_2 = D23.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E23.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E23.Done2(args))
  }
})
const Cmd23_3 = D23.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E23.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E23.Done3(args))
  }
})
const u23_0 = D23.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-23-0" }) }
})
const p23_0 = u23_0.withOutMessagePolicy({
  fold: D23.makeOutMessageFold(DialogBlock, {
    Opened: () => D23.makeNoopStep(),
    Closed: () => D23.makeNoopStep(),
    CompletedClose: () => D23.makeNoopStep()
  })
})
const u23_1 = D23.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-23-1" }) }
})
const p23_1 = u23_1.withOutMessagePolicy({
  fold: D23.makeOutMessageFold(PopoverBlock, {
    Opened: () => D23.makeNoopStep(),
    Closed: () => D23.makeNoopStep()
  })
})
const u23_2 = D23.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-23-2" }) }
})
const p23_2 = u23_2.withOutMessagePolicy({
  fold: D23.makeOutMessageFold(TooltipBlock, {
    Shown: () => D23.makeNoopStep(),
    Hidden: () => D23.makeNoopStep()
  })
})
const u23_3 = D23.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-23-3", min: 0, max: 100, step: 1 })
  }
})
const p23_3 = u23_3.withOutMessagePolicy({
  fold: D23.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D23.makeNoopStep()
  })
})
const u23_4 = D23.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-23-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p23_4 = u23_4.withOutMessagePolicy({
  fold: D23.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D23.makeNoopStep(),
    SelectedDate: () => D23.makeNoopStep(),
    ClearedDate: () => D23.makeNoopStep()
  })
})
const u23_5 = D23.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-23-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p23_5 = u23_5.withOutMessagePolicy({
  fold: D23.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D23.makeNoopStep(),
    SelectedDate: () => D23.makeNoopStep()
  })
})
const u23_6 = D23.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-23-6" }) }
})
const p23_6 = u23_6.withOutMessagePolicy({
  fold: D23.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D23.makeNoopStep(),
    ChangedKeyboardTarget: () => D23.makeNoopStep(),
    Reordered: () => D23.makeNoopStep(),
    Cancelled: () => D23.makeNoopStep()
  })
})
const C23 = D23.makeComposition({
  bindings: [p23_0, p23_1, p23_2, p23_3, p23_4, p23_5, p23_6]
})
const prep23 = () =>
  C23.prepareBlock({
    init: C23.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C23.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd23_0({ value: model.count }),
          Cmd23_1({ value: model.count }),
          Cmd23_2({ value: model.count }),
          Cmd23_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O23.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O23.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O23.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O23.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd23_0.layer,
      Cmd23_1.layer,
      Cmd23_2.layer,
      Cmd23_3.layer
    ),
    operations: { start: () => Tuple.make(E23.Start()) }
  })
const B23: Block.FromAssemblyWithOutMessage<typeof M23, typeof prep23> =
  Block.assemble(prep23)
const M24 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E24 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O24 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D24 = Block.makeDefinition("Child24", {
  Model: M24,
  Message: E24,
  OutMessage: O24
})
const Cmd24_0 = D24.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E24.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E24.Done0(args))
  }
})
const Cmd24_1 = D24.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E24.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E24.Done1(args))
  }
})
const Cmd24_2 = D24.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E24.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E24.Done2(args))
  }
})
const Cmd24_3 = D24.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E24.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E24.Done3(args))
  }
})
const u24_0 = D24.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-24-0" }) }
})
const p24_0 = u24_0.withOutMessagePolicy({
  fold: D24.makeOutMessageFold(DialogBlock, {
    Opened: () => D24.makeNoopStep(),
    Closed: () => D24.makeNoopStep(),
    CompletedClose: () => D24.makeNoopStep()
  })
})
const u24_1 = D24.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-24-1" }) }
})
const p24_1 = u24_1.withOutMessagePolicy({
  fold: D24.makeOutMessageFold(PopoverBlock, {
    Opened: () => D24.makeNoopStep(),
    Closed: () => D24.makeNoopStep()
  })
})
const u24_2 = D24.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-24-2" }) }
})
const p24_2 = u24_2.withOutMessagePolicy({
  fold: D24.makeOutMessageFold(TooltipBlock, {
    Shown: () => D24.makeNoopStep(),
    Hidden: () => D24.makeNoopStep()
  })
})
const u24_3 = D24.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-24-3", min: 0, max: 100, step: 1 })
  }
})
const p24_3 = u24_3.withOutMessagePolicy({
  fold: D24.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D24.makeNoopStep()
  })
})
const u24_4 = D24.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-24-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p24_4 = u24_4.withOutMessagePolicy({
  fold: D24.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D24.makeNoopStep(),
    SelectedDate: () => D24.makeNoopStep(),
    ClearedDate: () => D24.makeNoopStep()
  })
})
const u24_5 = D24.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-24-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p24_5 = u24_5.withOutMessagePolicy({
  fold: D24.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D24.makeNoopStep(),
    SelectedDate: () => D24.makeNoopStep()
  })
})
const u24_6 = D24.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-24-6" }) }
})
const p24_6 = u24_6.withOutMessagePolicy({
  fold: D24.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D24.makeNoopStep(),
    ChangedKeyboardTarget: () => D24.makeNoopStep(),
    Reordered: () => D24.makeNoopStep(),
    Cancelled: () => D24.makeNoopStep()
  })
})
const C24 = D24.makeComposition({
  bindings: [p24_0, p24_1, p24_2, p24_3, p24_4, p24_5, p24_6]
})
const prep24 = () =>
  C24.prepareBlock({
    init: C24.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C24.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd24_0({ value: model.count }),
          Cmd24_1({ value: model.count }),
          Cmd24_2({ value: model.count }),
          Cmd24_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O24.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O24.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O24.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O24.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd24_0.layer,
      Cmd24_1.layer,
      Cmd24_2.layer,
      Cmd24_3.layer
    ),
    operations: { start: () => Tuple.make(E24.Start()) }
  })
const B24: Block.FromAssemblyWithOutMessage<typeof M24, typeof prep24> =
  Block.assemble(prep24)
const M25 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E25 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O25 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D25 = Block.makeDefinition("Child25", {
  Model: M25,
  Message: E25,
  OutMessage: O25
})
const Cmd25_0 = D25.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E25.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E25.Done0(args))
  }
})
const Cmd25_1 = D25.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E25.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E25.Done1(args))
  }
})
const Cmd25_2 = D25.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E25.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E25.Done2(args))
  }
})
const Cmd25_3 = D25.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E25.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E25.Done3(args))
  }
})
const u25_0 = D25.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-25-0" }) }
})
const p25_0 = u25_0.withOutMessagePolicy({
  fold: D25.makeOutMessageFold(DialogBlock, {
    Opened: () => D25.makeNoopStep(),
    Closed: () => D25.makeNoopStep(),
    CompletedClose: () => D25.makeNoopStep()
  })
})
const u25_1 = D25.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-25-1" }) }
})
const p25_1 = u25_1.withOutMessagePolicy({
  fold: D25.makeOutMessageFold(PopoverBlock, {
    Opened: () => D25.makeNoopStep(),
    Closed: () => D25.makeNoopStep()
  })
})
const u25_2 = D25.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-25-2" }) }
})
const p25_2 = u25_2.withOutMessagePolicy({
  fold: D25.makeOutMessageFold(TooltipBlock, {
    Shown: () => D25.makeNoopStep(),
    Hidden: () => D25.makeNoopStep()
  })
})
const u25_3 = D25.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-25-3", min: 0, max: 100, step: 1 })
  }
})
const p25_3 = u25_3.withOutMessagePolicy({
  fold: D25.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D25.makeNoopStep()
  })
})
const u25_4 = D25.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-25-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p25_4 = u25_4.withOutMessagePolicy({
  fold: D25.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D25.makeNoopStep(),
    SelectedDate: () => D25.makeNoopStep(),
    ClearedDate: () => D25.makeNoopStep()
  })
})
const u25_5 = D25.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-25-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p25_5 = u25_5.withOutMessagePolicy({
  fold: D25.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D25.makeNoopStep(),
    SelectedDate: () => D25.makeNoopStep()
  })
})
const u25_6 = D25.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-25-6" }) }
})
const p25_6 = u25_6.withOutMessagePolicy({
  fold: D25.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D25.makeNoopStep(),
    ChangedKeyboardTarget: () => D25.makeNoopStep(),
    Reordered: () => D25.makeNoopStep(),
    Cancelled: () => D25.makeNoopStep()
  })
})
const C25 = D25.makeComposition({
  bindings: [p25_0, p25_1, p25_2, p25_3, p25_4, p25_5, p25_6]
})
const prep25 = () =>
  C25.prepareBlock({
    init: C25.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C25.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd25_0({ value: model.count }),
          Cmd25_1({ value: model.count }),
          Cmd25_2({ value: model.count }),
          Cmd25_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O25.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O25.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O25.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O25.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd25_0.layer,
      Cmd25_1.layer,
      Cmd25_2.layer,
      Cmd25_3.layer
    ),
    operations: { start: () => Tuple.make(E25.Start()) }
  })
const B25: Block.FromAssemblyWithOutMessage<typeof M25, typeof prep25> =
  Block.assemble(prep25)
const M26 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E26 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O26 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D26 = Block.makeDefinition("Child26", {
  Model: M26,
  Message: E26,
  OutMessage: O26
})
const Cmd26_0 = D26.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E26.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E26.Done0(args))
  }
})
const Cmd26_1 = D26.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E26.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E26.Done1(args))
  }
})
const Cmd26_2 = D26.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E26.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E26.Done2(args))
  }
})
const Cmd26_3 = D26.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E26.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E26.Done3(args))
  }
})
const u26_0 = D26.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-26-0" }) }
})
const p26_0 = u26_0.withOutMessagePolicy({
  fold: D26.makeOutMessageFold(DialogBlock, {
    Opened: () => D26.makeNoopStep(),
    Closed: () => D26.makeNoopStep(),
    CompletedClose: () => D26.makeNoopStep()
  })
})
const u26_1 = D26.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-26-1" }) }
})
const p26_1 = u26_1.withOutMessagePolicy({
  fold: D26.makeOutMessageFold(PopoverBlock, {
    Opened: () => D26.makeNoopStep(),
    Closed: () => D26.makeNoopStep()
  })
})
const u26_2 = D26.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-26-2" }) }
})
const p26_2 = u26_2.withOutMessagePolicy({
  fold: D26.makeOutMessageFold(TooltipBlock, {
    Shown: () => D26.makeNoopStep(),
    Hidden: () => D26.makeNoopStep()
  })
})
const u26_3 = D26.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-26-3", min: 0, max: 100, step: 1 })
  }
})
const p26_3 = u26_3.withOutMessagePolicy({
  fold: D26.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D26.makeNoopStep()
  })
})
const u26_4 = D26.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-26-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p26_4 = u26_4.withOutMessagePolicy({
  fold: D26.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D26.makeNoopStep(),
    SelectedDate: () => D26.makeNoopStep(),
    ClearedDate: () => D26.makeNoopStep()
  })
})
const u26_5 = D26.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-26-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p26_5 = u26_5.withOutMessagePolicy({
  fold: D26.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D26.makeNoopStep(),
    SelectedDate: () => D26.makeNoopStep()
  })
})
const u26_6 = D26.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-26-6" }) }
})
const p26_6 = u26_6.withOutMessagePolicy({
  fold: D26.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D26.makeNoopStep(),
    ChangedKeyboardTarget: () => D26.makeNoopStep(),
    Reordered: () => D26.makeNoopStep(),
    Cancelled: () => D26.makeNoopStep()
  })
})
const C26 = D26.makeComposition({
  bindings: [p26_0, p26_1, p26_2, p26_3, p26_4, p26_5, p26_6]
})
const prep26 = () =>
  C26.prepareBlock({
    init: C26.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C26.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd26_0({ value: model.count }),
          Cmd26_1({ value: model.count }),
          Cmd26_2({ value: model.count }),
          Cmd26_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O26.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O26.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O26.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O26.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd26_0.layer,
      Cmd26_1.layer,
      Cmd26_2.layer,
      Cmd26_3.layer
    ),
    operations: { start: () => Tuple.make(E26.Start()) }
  })
const B26: Block.FromAssemblyWithOutMessage<typeof M26, typeof prep26> =
  Block.assemble(prep26)
const M27 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E27 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O27 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D27 = Block.makeDefinition("Child27", {
  Model: M27,
  Message: E27,
  OutMessage: O27
})
const Cmd27_0 = D27.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E27.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E27.Done0(args))
  }
})
const Cmd27_1 = D27.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E27.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E27.Done1(args))
  }
})
const Cmd27_2 = D27.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E27.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E27.Done2(args))
  }
})
const Cmd27_3 = D27.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E27.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E27.Done3(args))
  }
})
const u27_0 = D27.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-27-0" }) }
})
const p27_0 = u27_0.withOutMessagePolicy({
  fold: D27.makeOutMessageFold(DialogBlock, {
    Opened: () => D27.makeNoopStep(),
    Closed: () => D27.makeNoopStep(),
    CompletedClose: () => D27.makeNoopStep()
  })
})
const u27_1 = D27.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-27-1" }) }
})
const p27_1 = u27_1.withOutMessagePolicy({
  fold: D27.makeOutMessageFold(PopoverBlock, {
    Opened: () => D27.makeNoopStep(),
    Closed: () => D27.makeNoopStep()
  })
})
const u27_2 = D27.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-27-2" }) }
})
const p27_2 = u27_2.withOutMessagePolicy({
  fold: D27.makeOutMessageFold(TooltipBlock, {
    Shown: () => D27.makeNoopStep(),
    Hidden: () => D27.makeNoopStep()
  })
})
const u27_3 = D27.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-27-3", min: 0, max: 100, step: 1 })
  }
})
const p27_3 = u27_3.withOutMessagePolicy({
  fold: D27.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D27.makeNoopStep()
  })
})
const u27_4 = D27.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-27-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p27_4 = u27_4.withOutMessagePolicy({
  fold: D27.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D27.makeNoopStep(),
    SelectedDate: () => D27.makeNoopStep(),
    ClearedDate: () => D27.makeNoopStep()
  })
})
const u27_5 = D27.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-27-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p27_5 = u27_5.withOutMessagePolicy({
  fold: D27.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D27.makeNoopStep(),
    SelectedDate: () => D27.makeNoopStep()
  })
})
const u27_6 = D27.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-27-6" }) }
})
const p27_6 = u27_6.withOutMessagePolicy({
  fold: D27.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D27.makeNoopStep(),
    ChangedKeyboardTarget: () => D27.makeNoopStep(),
    Reordered: () => D27.makeNoopStep(),
    Cancelled: () => D27.makeNoopStep()
  })
})
const C27 = D27.makeComposition({
  bindings: [p27_0, p27_1, p27_2, p27_3, p27_4, p27_5, p27_6]
})
const prep27 = () =>
  C27.prepareBlock({
    init: C27.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C27.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd27_0({ value: model.count }),
          Cmd27_1({ value: model.count }),
          Cmd27_2({ value: model.count }),
          Cmd27_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O27.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O27.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O27.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O27.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd27_0.layer,
      Cmd27_1.layer,
      Cmd27_2.layer,
      Cmd27_3.layer
    ),
    operations: { start: () => Tuple.make(E27.Start()) }
  })
const B27: Block.FromAssemblyWithOutMessage<typeof M27, typeof prep27> =
  Block.assemble(prep27)
const M28 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E28 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O28 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D28 = Block.makeDefinition("Child28", {
  Model: M28,
  Message: E28,
  OutMessage: O28
})
const Cmd28_0 = D28.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E28.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E28.Done0(args))
  }
})
const Cmd28_1 = D28.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E28.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E28.Done1(args))
  }
})
const Cmd28_2 = D28.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E28.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E28.Done2(args))
  }
})
const Cmd28_3 = D28.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E28.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E28.Done3(args))
  }
})
const u28_0 = D28.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-28-0" }) }
})
const p28_0 = u28_0.withOutMessagePolicy({
  fold: D28.makeOutMessageFold(DialogBlock, {
    Opened: () => D28.makeNoopStep(),
    Closed: () => D28.makeNoopStep(),
    CompletedClose: () => D28.makeNoopStep()
  })
})
const u28_1 = D28.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-28-1" }) }
})
const p28_1 = u28_1.withOutMessagePolicy({
  fold: D28.makeOutMessageFold(PopoverBlock, {
    Opened: () => D28.makeNoopStep(),
    Closed: () => D28.makeNoopStep()
  })
})
const u28_2 = D28.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-28-2" }) }
})
const p28_2 = u28_2.withOutMessagePolicy({
  fold: D28.makeOutMessageFold(TooltipBlock, {
    Shown: () => D28.makeNoopStep(),
    Hidden: () => D28.makeNoopStep()
  })
})
const u28_3 = D28.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-28-3", min: 0, max: 100, step: 1 })
  }
})
const p28_3 = u28_3.withOutMessagePolicy({
  fold: D28.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D28.makeNoopStep()
  })
})
const u28_4 = D28.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-28-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p28_4 = u28_4.withOutMessagePolicy({
  fold: D28.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D28.makeNoopStep(),
    SelectedDate: () => D28.makeNoopStep(),
    ClearedDate: () => D28.makeNoopStep()
  })
})
const u28_5 = D28.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-28-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p28_5 = u28_5.withOutMessagePolicy({
  fold: D28.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D28.makeNoopStep(),
    SelectedDate: () => D28.makeNoopStep()
  })
})
const u28_6 = D28.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-28-6" }) }
})
const p28_6 = u28_6.withOutMessagePolicy({
  fold: D28.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D28.makeNoopStep(),
    ChangedKeyboardTarget: () => D28.makeNoopStep(),
    Reordered: () => D28.makeNoopStep(),
    Cancelled: () => D28.makeNoopStep()
  })
})
const C28 = D28.makeComposition({
  bindings: [p28_0, p28_1, p28_2, p28_3, p28_4, p28_5, p28_6]
})
const prep28 = () =>
  C28.prepareBlock({
    init: C28.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C28.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd28_0({ value: model.count }),
          Cmd28_1({ value: model.count }),
          Cmd28_2({ value: model.count }),
          Cmd28_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O28.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O28.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O28.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O28.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd28_0.layer,
      Cmd28_1.layer,
      Cmd28_2.layer,
      Cmd28_3.layer
    ),
    operations: { start: () => Tuple.make(E28.Start()) }
  })
const B28: Block.FromAssemblyWithOutMessage<typeof M28, typeof prep28> =
  Block.assemble(prep28)
const M29 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E29 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O29 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D29 = Block.makeDefinition("Child29", {
  Model: M29,
  Message: E29,
  OutMessage: O29
})
const Cmd29_0 = D29.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E29.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E29.Done0(args))
  }
})
const Cmd29_1 = D29.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E29.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E29.Done1(args))
  }
})
const Cmd29_2 = D29.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E29.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E29.Done2(args))
  }
})
const Cmd29_3 = D29.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E29.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E29.Done3(args))
  }
})
const u29_0 = D29.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-29-0" }) }
})
const p29_0 = u29_0.withOutMessagePolicy({
  fold: D29.makeOutMessageFold(DialogBlock, {
    Opened: () => D29.makeNoopStep(),
    Closed: () => D29.makeNoopStep(),
    CompletedClose: () => D29.makeNoopStep()
  })
})
const u29_1 = D29.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-29-1" }) }
})
const p29_1 = u29_1.withOutMessagePolicy({
  fold: D29.makeOutMessageFold(PopoverBlock, {
    Opened: () => D29.makeNoopStep(),
    Closed: () => D29.makeNoopStep()
  })
})
const u29_2 = D29.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-29-2" }) }
})
const p29_2 = u29_2.withOutMessagePolicy({
  fold: D29.makeOutMessageFold(TooltipBlock, {
    Shown: () => D29.makeNoopStep(),
    Hidden: () => D29.makeNoopStep()
  })
})
const u29_3 = D29.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-29-3", min: 0, max: 100, step: 1 })
  }
})
const p29_3 = u29_3.withOutMessagePolicy({
  fold: D29.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D29.makeNoopStep()
  })
})
const u29_4 = D29.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-29-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p29_4 = u29_4.withOutMessagePolicy({
  fold: D29.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D29.makeNoopStep(),
    SelectedDate: () => D29.makeNoopStep(),
    ClearedDate: () => D29.makeNoopStep()
  })
})
const u29_5 = D29.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-29-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p29_5 = u29_5.withOutMessagePolicy({
  fold: D29.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D29.makeNoopStep(),
    SelectedDate: () => D29.makeNoopStep()
  })
})
const u29_6 = D29.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-29-6" }) }
})
const p29_6 = u29_6.withOutMessagePolicy({
  fold: D29.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D29.makeNoopStep(),
    ChangedKeyboardTarget: () => D29.makeNoopStep(),
    Reordered: () => D29.makeNoopStep(),
    Cancelled: () => D29.makeNoopStep()
  })
})
const C29 = D29.makeComposition({
  bindings: [p29_0, p29_1, p29_2, p29_3, p29_4, p29_5, p29_6]
})
const prep29 = () =>
  C29.prepareBlock({
    init: C29.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C29.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd29_0({ value: model.count }),
          Cmd29_1({ value: model.count }),
          Cmd29_2({ value: model.count }),
          Cmd29_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O29.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O29.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O29.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O29.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd29_0.layer,
      Cmd29_1.layer,
      Cmd29_2.layer,
      Cmd29_3.layer
    ),
    operations: { start: () => Tuple.make(E29.Start()) }
  })
const B29: Block.FromAssemblyWithOutMessage<typeof M29, typeof prep29> =
  Block.assemble(prep29)
const M30 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E30 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O30 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D30 = Block.makeDefinition("Child30", {
  Model: M30,
  Message: E30,
  OutMessage: O30
})
const Cmd30_0 = D30.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E30.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E30.Done0(args))
  }
})
const Cmd30_1 = D30.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E30.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E30.Done1(args))
  }
})
const Cmd30_2 = D30.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E30.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E30.Done2(args))
  }
})
const Cmd30_3 = D30.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E30.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E30.Done3(args))
  }
})
const u30_0 = D30.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-30-0" }) }
})
const p30_0 = u30_0.withOutMessagePolicy({
  fold: D30.makeOutMessageFold(DialogBlock, {
    Opened: () => D30.makeNoopStep(),
    Closed: () => D30.makeNoopStep(),
    CompletedClose: () => D30.makeNoopStep()
  })
})
const u30_1 = D30.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-30-1" }) }
})
const p30_1 = u30_1.withOutMessagePolicy({
  fold: D30.makeOutMessageFold(PopoverBlock, {
    Opened: () => D30.makeNoopStep(),
    Closed: () => D30.makeNoopStep()
  })
})
const u30_2 = D30.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-30-2" }) }
})
const p30_2 = u30_2.withOutMessagePolicy({
  fold: D30.makeOutMessageFold(TooltipBlock, {
    Shown: () => D30.makeNoopStep(),
    Hidden: () => D30.makeNoopStep()
  })
})
const u30_3 = D30.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-30-3", min: 0, max: 100, step: 1 })
  }
})
const p30_3 = u30_3.withOutMessagePolicy({
  fold: D30.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D30.makeNoopStep()
  })
})
const u30_4 = D30.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-30-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p30_4 = u30_4.withOutMessagePolicy({
  fold: D30.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D30.makeNoopStep(),
    SelectedDate: () => D30.makeNoopStep(),
    ClearedDate: () => D30.makeNoopStep()
  })
})
const u30_5 = D30.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-30-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p30_5 = u30_5.withOutMessagePolicy({
  fold: D30.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D30.makeNoopStep(),
    SelectedDate: () => D30.makeNoopStep()
  })
})
const u30_6 = D30.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-30-6" }) }
})
const p30_6 = u30_6.withOutMessagePolicy({
  fold: D30.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D30.makeNoopStep(),
    ChangedKeyboardTarget: () => D30.makeNoopStep(),
    Reordered: () => D30.makeNoopStep(),
    Cancelled: () => D30.makeNoopStep()
  })
})
const C30 = D30.makeComposition({
  bindings: [p30_0, p30_1, p30_2, p30_3, p30_4, p30_5, p30_6]
})
const prep30 = () =>
  C30.prepareBlock({
    init: C30.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C30.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd30_0({ value: model.count }),
          Cmd30_1({ value: model.count }),
          Cmd30_2({ value: model.count }),
          Cmd30_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O30.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O30.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O30.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O30.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd30_0.layer,
      Cmd30_1.layer,
      Cmd30_2.layer,
      Cmd30_3.layer
    ),
    operations: { start: () => Tuple.make(E30.Start()) }
  })
const B30: Block.FromAssemblyWithOutMessage<typeof M30, typeof prep30> =
  Block.assemble(prep30)
const M31 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E31 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O31 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D31 = Block.makeDefinition("Child31", {
  Model: M31,
  Message: E31,
  OutMessage: O31
})
const Cmd31_0 = D31.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E31.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E31.Done0(args))
  }
})
const Cmd31_1 = D31.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E31.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E31.Done1(args))
  }
})
const Cmd31_2 = D31.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E31.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E31.Done2(args))
  }
})
const Cmd31_3 = D31.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E31.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E31.Done3(args))
  }
})
const u31_0 = D31.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-31-0" }) }
})
const p31_0 = u31_0.withOutMessagePolicy({
  fold: D31.makeOutMessageFold(DialogBlock, {
    Opened: () => D31.makeNoopStep(),
    Closed: () => D31.makeNoopStep(),
    CompletedClose: () => D31.makeNoopStep()
  })
})
const u31_1 = D31.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-31-1" }) }
})
const p31_1 = u31_1.withOutMessagePolicy({
  fold: D31.makeOutMessageFold(PopoverBlock, {
    Opened: () => D31.makeNoopStep(),
    Closed: () => D31.makeNoopStep()
  })
})
const u31_2 = D31.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-31-2" }) }
})
const p31_2 = u31_2.withOutMessagePolicy({
  fold: D31.makeOutMessageFold(TooltipBlock, {
    Shown: () => D31.makeNoopStep(),
    Hidden: () => D31.makeNoopStep()
  })
})
const u31_3 = D31.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-31-3", min: 0, max: 100, step: 1 })
  }
})
const p31_3 = u31_3.withOutMessagePolicy({
  fold: D31.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D31.makeNoopStep()
  })
})
const u31_4 = D31.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-31-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p31_4 = u31_4.withOutMessagePolicy({
  fold: D31.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D31.makeNoopStep(),
    SelectedDate: () => D31.makeNoopStep(),
    ClearedDate: () => D31.makeNoopStep()
  })
})
const u31_5 = D31.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-31-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p31_5 = u31_5.withOutMessagePolicy({
  fold: D31.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D31.makeNoopStep(),
    SelectedDate: () => D31.makeNoopStep()
  })
})
const u31_6 = D31.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-31-6" }) }
})
const p31_6 = u31_6.withOutMessagePolicy({
  fold: D31.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D31.makeNoopStep(),
    ChangedKeyboardTarget: () => D31.makeNoopStep(),
    Reordered: () => D31.makeNoopStep(),
    Cancelled: () => D31.makeNoopStep()
  })
})
const C31 = D31.makeComposition({
  bindings: [p31_0, p31_1, p31_2, p31_3, p31_4, p31_5, p31_6]
})
const prep31 = () =>
  C31.prepareBlock({
    init: C31.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C31.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd31_0({ value: model.count }),
          Cmd31_1({ value: model.count }),
          Cmd31_2({ value: model.count }),
          Cmd31_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O31.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O31.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O31.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O31.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd31_0.layer,
      Cmd31_1.layer,
      Cmd31_2.layer,
      Cmd31_3.layer
    ),
    operations: { start: () => Tuple.make(E31.Start()) }
  })
const B31: Block.FromAssemblyWithOutMessage<typeof M31, typeof prep31> =
  Block.assemble(prep31)
const M32 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E32 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O32 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D32 = Block.makeDefinition("Child32", {
  Model: M32,
  Message: E32,
  OutMessage: O32
})
const Cmd32_0 = D32.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E32.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E32.Done0(args))
  }
})
const Cmd32_1 = D32.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E32.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E32.Done1(args))
  }
})
const Cmd32_2 = D32.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E32.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E32.Done2(args))
  }
})
const Cmd32_3 = D32.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E32.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E32.Done3(args))
  }
})
const u32_0 = D32.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-32-0" }) }
})
const p32_0 = u32_0.withOutMessagePolicy({
  fold: D32.makeOutMessageFold(DialogBlock, {
    Opened: () => D32.makeNoopStep(),
    Closed: () => D32.makeNoopStep(),
    CompletedClose: () => D32.makeNoopStep()
  })
})
const u32_1 = D32.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-32-1" }) }
})
const p32_1 = u32_1.withOutMessagePolicy({
  fold: D32.makeOutMessageFold(PopoverBlock, {
    Opened: () => D32.makeNoopStep(),
    Closed: () => D32.makeNoopStep()
  })
})
const u32_2 = D32.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-32-2" }) }
})
const p32_2 = u32_2.withOutMessagePolicy({
  fold: D32.makeOutMessageFold(TooltipBlock, {
    Shown: () => D32.makeNoopStep(),
    Hidden: () => D32.makeNoopStep()
  })
})
const u32_3 = D32.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-32-3", min: 0, max: 100, step: 1 })
  }
})
const p32_3 = u32_3.withOutMessagePolicy({
  fold: D32.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D32.makeNoopStep()
  })
})
const u32_4 = D32.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-32-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p32_4 = u32_4.withOutMessagePolicy({
  fold: D32.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D32.makeNoopStep(),
    SelectedDate: () => D32.makeNoopStep(),
    ClearedDate: () => D32.makeNoopStep()
  })
})
const u32_5 = D32.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-32-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p32_5 = u32_5.withOutMessagePolicy({
  fold: D32.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D32.makeNoopStep(),
    SelectedDate: () => D32.makeNoopStep()
  })
})
const u32_6 = D32.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-32-6" }) }
})
const p32_6 = u32_6.withOutMessagePolicy({
  fold: D32.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D32.makeNoopStep(),
    ChangedKeyboardTarget: () => D32.makeNoopStep(),
    Reordered: () => D32.makeNoopStep(),
    Cancelled: () => D32.makeNoopStep()
  })
})
const C32 = D32.makeComposition({
  bindings: [p32_0, p32_1, p32_2, p32_3, p32_4, p32_5, p32_6]
})
const prep32 = () =>
  C32.prepareBlock({
    init: C32.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C32.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd32_0({ value: model.count }),
          Cmd32_1({ value: model.count }),
          Cmd32_2({ value: model.count }),
          Cmd32_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O32.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O32.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O32.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O32.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd32_0.layer,
      Cmd32_1.layer,
      Cmd32_2.layer,
      Cmd32_3.layer
    ),
    operations: { start: () => Tuple.make(E32.Start()) }
  })
const B32: Block.FromAssemblyWithOutMessage<typeof M32, typeof prep32> =
  Block.assemble(prep32)
const M33 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E33 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O33 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D33 = Block.makeDefinition("Child33", {
  Model: M33,
  Message: E33,
  OutMessage: O33
})
const Cmd33_0 = D33.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E33.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E33.Done0(args))
  }
})
const Cmd33_1 = D33.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E33.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E33.Done1(args))
  }
})
const Cmd33_2 = D33.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E33.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E33.Done2(args))
  }
})
const Cmd33_3 = D33.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E33.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E33.Done3(args))
  }
})
const u33_0 = D33.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-33-0" }) }
})
const p33_0 = u33_0.withOutMessagePolicy({
  fold: D33.makeOutMessageFold(DialogBlock, {
    Opened: () => D33.makeNoopStep(),
    Closed: () => D33.makeNoopStep(),
    CompletedClose: () => D33.makeNoopStep()
  })
})
const u33_1 = D33.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-33-1" }) }
})
const p33_1 = u33_1.withOutMessagePolicy({
  fold: D33.makeOutMessageFold(PopoverBlock, {
    Opened: () => D33.makeNoopStep(),
    Closed: () => D33.makeNoopStep()
  })
})
const u33_2 = D33.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-33-2" }) }
})
const p33_2 = u33_2.withOutMessagePolicy({
  fold: D33.makeOutMessageFold(TooltipBlock, {
    Shown: () => D33.makeNoopStep(),
    Hidden: () => D33.makeNoopStep()
  })
})
const u33_3 = D33.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-33-3", min: 0, max: 100, step: 1 })
  }
})
const p33_3 = u33_3.withOutMessagePolicy({
  fold: D33.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D33.makeNoopStep()
  })
})
const u33_4 = D33.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-33-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p33_4 = u33_4.withOutMessagePolicy({
  fold: D33.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D33.makeNoopStep(),
    SelectedDate: () => D33.makeNoopStep(),
    ClearedDate: () => D33.makeNoopStep()
  })
})
const u33_5 = D33.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-33-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p33_5 = u33_5.withOutMessagePolicy({
  fold: D33.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D33.makeNoopStep(),
    SelectedDate: () => D33.makeNoopStep()
  })
})
const u33_6 = D33.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-33-6" }) }
})
const p33_6 = u33_6.withOutMessagePolicy({
  fold: D33.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D33.makeNoopStep(),
    ChangedKeyboardTarget: () => D33.makeNoopStep(),
    Reordered: () => D33.makeNoopStep(),
    Cancelled: () => D33.makeNoopStep()
  })
})
const C33 = D33.makeComposition({
  bindings: [p33_0, p33_1, p33_2, p33_3, p33_4, p33_5, p33_6]
})
const prep33 = () =>
  C33.prepareBlock({
    init: C33.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C33.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd33_0({ value: model.count }),
          Cmd33_1({ value: model.count }),
          Cmd33_2({ value: model.count }),
          Cmd33_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O33.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O33.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O33.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O33.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd33_0.layer,
      Cmd33_1.layer,
      Cmd33_2.layer,
      Cmd33_3.layer
    ),
    operations: { start: () => Tuple.make(E33.Start()) }
  })
const B33: Block.FromAssemblyWithOutMessage<typeof M33, typeof prep33> =
  Block.assemble(prep33)
const M34 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E34 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O34 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D34 = Block.makeDefinition("Child34", {
  Model: M34,
  Message: E34,
  OutMessage: O34
})
const Cmd34_0 = D34.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E34.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E34.Done0(args))
  }
})
const Cmd34_1 = D34.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E34.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E34.Done1(args))
  }
})
const Cmd34_2 = D34.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E34.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E34.Done2(args))
  }
})
const Cmd34_3 = D34.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E34.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E34.Done3(args))
  }
})
const u34_0 = D34.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-34-0" }) }
})
const p34_0 = u34_0.withOutMessagePolicy({
  fold: D34.makeOutMessageFold(DialogBlock, {
    Opened: () => D34.makeNoopStep(),
    Closed: () => D34.makeNoopStep(),
    CompletedClose: () => D34.makeNoopStep()
  })
})
const u34_1 = D34.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-34-1" }) }
})
const p34_1 = u34_1.withOutMessagePolicy({
  fold: D34.makeOutMessageFold(PopoverBlock, {
    Opened: () => D34.makeNoopStep(),
    Closed: () => D34.makeNoopStep()
  })
})
const u34_2 = D34.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-34-2" }) }
})
const p34_2 = u34_2.withOutMessagePolicy({
  fold: D34.makeOutMessageFold(TooltipBlock, {
    Shown: () => D34.makeNoopStep(),
    Hidden: () => D34.makeNoopStep()
  })
})
const u34_3 = D34.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-34-3", min: 0, max: 100, step: 1 })
  }
})
const p34_3 = u34_3.withOutMessagePolicy({
  fold: D34.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D34.makeNoopStep()
  })
})
const u34_4 = D34.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-34-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p34_4 = u34_4.withOutMessagePolicy({
  fold: D34.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D34.makeNoopStep(),
    SelectedDate: () => D34.makeNoopStep(),
    ClearedDate: () => D34.makeNoopStep()
  })
})
const u34_5 = D34.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-34-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p34_5 = u34_5.withOutMessagePolicy({
  fold: D34.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D34.makeNoopStep(),
    SelectedDate: () => D34.makeNoopStep()
  })
})
const u34_6 = D34.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-34-6" }) }
})
const p34_6 = u34_6.withOutMessagePolicy({
  fold: D34.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D34.makeNoopStep(),
    ChangedKeyboardTarget: () => D34.makeNoopStep(),
    Reordered: () => D34.makeNoopStep(),
    Cancelled: () => D34.makeNoopStep()
  })
})
const C34 = D34.makeComposition({
  bindings: [p34_0, p34_1, p34_2, p34_3, p34_4, p34_5, p34_6]
})
const prep34 = () =>
  C34.prepareBlock({
    init: C34.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C34.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd34_0({ value: model.count }),
          Cmd34_1({ value: model.count }),
          Cmd34_2({ value: model.count }),
          Cmd34_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O34.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O34.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O34.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O34.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd34_0.layer,
      Cmd34_1.layer,
      Cmd34_2.layer,
      Cmd34_3.layer
    ),
    operations: { start: () => Tuple.make(E34.Start()) }
  })
const B34: Block.FromAssemblyWithOutMessage<typeof M34, typeof prep34> =
  Block.assemble(prep34)
const M35 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E35 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O35 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D35 = Block.makeDefinition("Child35", {
  Model: M35,
  Message: E35,
  OutMessage: O35
})
const Cmd35_0 = D35.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E35.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E35.Done0(args))
  }
})
const Cmd35_1 = D35.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E35.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E35.Done1(args))
  }
})
const Cmd35_2 = D35.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E35.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E35.Done2(args))
  }
})
const Cmd35_3 = D35.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E35.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E35.Done3(args))
  }
})
const u35_0 = D35.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-35-0" }) }
})
const p35_0 = u35_0.withOutMessagePolicy({
  fold: D35.makeOutMessageFold(DialogBlock, {
    Opened: () => D35.makeNoopStep(),
    Closed: () => D35.makeNoopStep(),
    CompletedClose: () => D35.makeNoopStep()
  })
})
const u35_1 = D35.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-35-1" }) }
})
const p35_1 = u35_1.withOutMessagePolicy({
  fold: D35.makeOutMessageFold(PopoverBlock, {
    Opened: () => D35.makeNoopStep(),
    Closed: () => D35.makeNoopStep()
  })
})
const u35_2 = D35.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-35-2" }) }
})
const p35_2 = u35_2.withOutMessagePolicy({
  fold: D35.makeOutMessageFold(TooltipBlock, {
    Shown: () => D35.makeNoopStep(),
    Hidden: () => D35.makeNoopStep()
  })
})
const u35_3 = D35.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-35-3", min: 0, max: 100, step: 1 })
  }
})
const p35_3 = u35_3.withOutMessagePolicy({
  fold: D35.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D35.makeNoopStep()
  })
})
const u35_4 = D35.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-35-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p35_4 = u35_4.withOutMessagePolicy({
  fold: D35.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D35.makeNoopStep(),
    SelectedDate: () => D35.makeNoopStep(),
    ClearedDate: () => D35.makeNoopStep()
  })
})
const u35_5 = D35.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-35-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p35_5 = u35_5.withOutMessagePolicy({
  fold: D35.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D35.makeNoopStep(),
    SelectedDate: () => D35.makeNoopStep()
  })
})
const u35_6 = D35.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-35-6" }) }
})
const p35_6 = u35_6.withOutMessagePolicy({
  fold: D35.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D35.makeNoopStep(),
    ChangedKeyboardTarget: () => D35.makeNoopStep(),
    Reordered: () => D35.makeNoopStep(),
    Cancelled: () => D35.makeNoopStep()
  })
})
const C35 = D35.makeComposition({
  bindings: [p35_0, p35_1, p35_2, p35_3, p35_4, p35_5, p35_6]
})
const prep35 = () =>
  C35.prepareBlock({
    init: C35.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C35.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd35_0({ value: model.count }),
          Cmd35_1({ value: model.count }),
          Cmd35_2({ value: model.count }),
          Cmd35_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O35.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O35.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O35.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O35.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd35_0.layer,
      Cmd35_1.layer,
      Cmd35_2.layer,
      Cmd35_3.layer
    ),
    operations: { start: () => Tuple.make(E35.Start()) }
  })
const B35: Block.FromAssemblyWithOutMessage<typeof M35, typeof prep35> =
  Block.assemble(prep35)
const M36 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E36 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O36 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D36 = Block.makeDefinition("Child36", {
  Model: M36,
  Message: E36,
  OutMessage: O36
})
const Cmd36_0 = D36.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E36.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E36.Done0(args))
  }
})
const Cmd36_1 = D36.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E36.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E36.Done1(args))
  }
})
const Cmd36_2 = D36.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E36.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E36.Done2(args))
  }
})
const Cmd36_3 = D36.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E36.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E36.Done3(args))
  }
})
const u36_0 = D36.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-36-0" }) }
})
const p36_0 = u36_0.withOutMessagePolicy({
  fold: D36.makeOutMessageFold(DialogBlock, {
    Opened: () => D36.makeNoopStep(),
    Closed: () => D36.makeNoopStep(),
    CompletedClose: () => D36.makeNoopStep()
  })
})
const u36_1 = D36.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-36-1" }) }
})
const p36_1 = u36_1.withOutMessagePolicy({
  fold: D36.makeOutMessageFold(PopoverBlock, {
    Opened: () => D36.makeNoopStep(),
    Closed: () => D36.makeNoopStep()
  })
})
const u36_2 = D36.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-36-2" }) }
})
const p36_2 = u36_2.withOutMessagePolicy({
  fold: D36.makeOutMessageFold(TooltipBlock, {
    Shown: () => D36.makeNoopStep(),
    Hidden: () => D36.makeNoopStep()
  })
})
const u36_3 = D36.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-36-3", min: 0, max: 100, step: 1 })
  }
})
const p36_3 = u36_3.withOutMessagePolicy({
  fold: D36.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D36.makeNoopStep()
  })
})
const u36_4 = D36.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-36-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p36_4 = u36_4.withOutMessagePolicy({
  fold: D36.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D36.makeNoopStep(),
    SelectedDate: () => D36.makeNoopStep(),
    ClearedDate: () => D36.makeNoopStep()
  })
})
const u36_5 = D36.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-36-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p36_5 = u36_5.withOutMessagePolicy({
  fold: D36.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D36.makeNoopStep(),
    SelectedDate: () => D36.makeNoopStep()
  })
})
const u36_6 = D36.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-36-6" }) }
})
const p36_6 = u36_6.withOutMessagePolicy({
  fold: D36.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D36.makeNoopStep(),
    ChangedKeyboardTarget: () => D36.makeNoopStep(),
    Reordered: () => D36.makeNoopStep(),
    Cancelled: () => D36.makeNoopStep()
  })
})
const C36 = D36.makeComposition({
  bindings: [p36_0, p36_1, p36_2, p36_3, p36_4, p36_5, p36_6]
})
const prep36 = () =>
  C36.prepareBlock({
    init: C36.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C36.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd36_0({ value: model.count }),
          Cmd36_1({ value: model.count }),
          Cmd36_2({ value: model.count }),
          Cmd36_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O36.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O36.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O36.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O36.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd36_0.layer,
      Cmd36_1.layer,
      Cmd36_2.layer,
      Cmd36_3.layer
    ),
    operations: { start: () => Tuple.make(E36.Start()) }
  })
const B36: Block.FromAssemblyWithOutMessage<typeof M36, typeof prep36> =
  Block.assemble(prep36)
const M37 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E37 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O37 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D37 = Block.makeDefinition("Child37", {
  Model: M37,
  Message: E37,
  OutMessage: O37
})
const Cmd37_0 = D37.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E37.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E37.Done0(args))
  }
})
const Cmd37_1 = D37.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E37.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E37.Done1(args))
  }
})
const Cmd37_2 = D37.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E37.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E37.Done2(args))
  }
})
const Cmd37_3 = D37.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E37.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E37.Done3(args))
  }
})
const u37_0 = D37.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-37-0" }) }
})
const p37_0 = u37_0.withOutMessagePolicy({
  fold: D37.makeOutMessageFold(DialogBlock, {
    Opened: () => D37.makeNoopStep(),
    Closed: () => D37.makeNoopStep(),
    CompletedClose: () => D37.makeNoopStep()
  })
})
const u37_1 = D37.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-37-1" }) }
})
const p37_1 = u37_1.withOutMessagePolicy({
  fold: D37.makeOutMessageFold(PopoverBlock, {
    Opened: () => D37.makeNoopStep(),
    Closed: () => D37.makeNoopStep()
  })
})
const u37_2 = D37.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-37-2" }) }
})
const p37_2 = u37_2.withOutMessagePolicy({
  fold: D37.makeOutMessageFold(TooltipBlock, {
    Shown: () => D37.makeNoopStep(),
    Hidden: () => D37.makeNoopStep()
  })
})
const u37_3 = D37.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-37-3", min: 0, max: 100, step: 1 })
  }
})
const p37_3 = u37_3.withOutMessagePolicy({
  fold: D37.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D37.makeNoopStep()
  })
})
const u37_4 = D37.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-37-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p37_4 = u37_4.withOutMessagePolicy({
  fold: D37.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D37.makeNoopStep(),
    SelectedDate: () => D37.makeNoopStep(),
    ClearedDate: () => D37.makeNoopStep()
  })
})
const u37_5 = D37.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-37-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p37_5 = u37_5.withOutMessagePolicy({
  fold: D37.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D37.makeNoopStep(),
    SelectedDate: () => D37.makeNoopStep()
  })
})
const u37_6 = D37.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-37-6" }) }
})
const p37_6 = u37_6.withOutMessagePolicy({
  fold: D37.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D37.makeNoopStep(),
    ChangedKeyboardTarget: () => D37.makeNoopStep(),
    Reordered: () => D37.makeNoopStep(),
    Cancelled: () => D37.makeNoopStep()
  })
})
const C37 = D37.makeComposition({
  bindings: [p37_0, p37_1, p37_2, p37_3, p37_4, p37_5, p37_6]
})
const prep37 = () =>
  C37.prepareBlock({
    init: C37.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C37.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd37_0({ value: model.count }),
          Cmd37_1({ value: model.count }),
          Cmd37_2({ value: model.count }),
          Cmd37_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O37.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O37.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O37.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O37.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd37_0.layer,
      Cmd37_1.layer,
      Cmd37_2.layer,
      Cmd37_3.layer
    ),
    operations: { start: () => Tuple.make(E37.Start()) }
  })
const B37: Block.FromAssemblyWithOutMessage<typeof M37, typeof prep37> =
  Block.assemble(prep37)
const M38 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E38 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O38 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D38 = Block.makeDefinition("Child38", {
  Model: M38,
  Message: E38,
  OutMessage: O38
})
const Cmd38_0 = D38.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E38.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E38.Done0(args))
  }
})
const Cmd38_1 = D38.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E38.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E38.Done1(args))
  }
})
const Cmd38_2 = D38.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E38.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E38.Done2(args))
  }
})
const Cmd38_3 = D38.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E38.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E38.Done3(args))
  }
})
const u38_0 = D38.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-38-0" }) }
})
const p38_0 = u38_0.withOutMessagePolicy({
  fold: D38.makeOutMessageFold(DialogBlock, {
    Opened: () => D38.makeNoopStep(),
    Closed: () => D38.makeNoopStep(),
    CompletedClose: () => D38.makeNoopStep()
  })
})
const u38_1 = D38.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-38-1" }) }
})
const p38_1 = u38_1.withOutMessagePolicy({
  fold: D38.makeOutMessageFold(PopoverBlock, {
    Opened: () => D38.makeNoopStep(),
    Closed: () => D38.makeNoopStep()
  })
})
const u38_2 = D38.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-38-2" }) }
})
const p38_2 = u38_2.withOutMessagePolicy({
  fold: D38.makeOutMessageFold(TooltipBlock, {
    Shown: () => D38.makeNoopStep(),
    Hidden: () => D38.makeNoopStep()
  })
})
const u38_3 = D38.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-38-3", min: 0, max: 100, step: 1 })
  }
})
const p38_3 = u38_3.withOutMessagePolicy({
  fold: D38.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D38.makeNoopStep()
  })
})
const u38_4 = D38.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-38-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p38_4 = u38_4.withOutMessagePolicy({
  fold: D38.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D38.makeNoopStep(),
    SelectedDate: () => D38.makeNoopStep(),
    ClearedDate: () => D38.makeNoopStep()
  })
})
const u38_5 = D38.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-38-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p38_5 = u38_5.withOutMessagePolicy({
  fold: D38.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D38.makeNoopStep(),
    SelectedDate: () => D38.makeNoopStep()
  })
})
const u38_6 = D38.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-38-6" }) }
})
const p38_6 = u38_6.withOutMessagePolicy({
  fold: D38.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D38.makeNoopStep(),
    ChangedKeyboardTarget: () => D38.makeNoopStep(),
    Reordered: () => D38.makeNoopStep(),
    Cancelled: () => D38.makeNoopStep()
  })
})
const C38 = D38.makeComposition({
  bindings: [p38_0, p38_1, p38_2, p38_3, p38_4, p38_5, p38_6]
})
const prep38 = () =>
  C38.prepareBlock({
    init: C38.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C38.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd38_0({ value: model.count }),
          Cmd38_1({ value: model.count }),
          Cmd38_2({ value: model.count }),
          Cmd38_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O38.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O38.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O38.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O38.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd38_0.layer,
      Cmd38_1.layer,
      Cmd38_2.layer,
      Cmd38_3.layer
    ),
    operations: { start: () => Tuple.make(E38.Start()) }
  })
const B38: Block.FromAssemblyWithOutMessage<typeof M38, typeof prep38> =
  Block.assemble(prep38)
const M39 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E39 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O39 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D39 = Block.makeDefinition("Child39", {
  Model: M39,
  Message: E39,
  OutMessage: O39
})
const Cmd39_0 = D39.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E39.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E39.Done0(args))
  }
})
const Cmd39_1 = D39.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E39.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E39.Done1(args))
  }
})
const Cmd39_2 = D39.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E39.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E39.Done2(args))
  }
})
const Cmd39_3 = D39.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E39.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E39.Done3(args))
  }
})
const u39_0 = D39.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-39-0" }) }
})
const p39_0 = u39_0.withOutMessagePolicy({
  fold: D39.makeOutMessageFold(DialogBlock, {
    Opened: () => D39.makeNoopStep(),
    Closed: () => D39.makeNoopStep(),
    CompletedClose: () => D39.makeNoopStep()
  })
})
const u39_1 = D39.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-39-1" }) }
})
const p39_1 = u39_1.withOutMessagePolicy({
  fold: D39.makeOutMessageFold(PopoverBlock, {
    Opened: () => D39.makeNoopStep(),
    Closed: () => D39.makeNoopStep()
  })
})
const u39_2 = D39.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-39-2" }) }
})
const p39_2 = u39_2.withOutMessagePolicy({
  fold: D39.makeOutMessageFold(TooltipBlock, {
    Shown: () => D39.makeNoopStep(),
    Hidden: () => D39.makeNoopStep()
  })
})
const u39_3 = D39.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-39-3", min: 0, max: 100, step: 1 })
  }
})
const p39_3 = u39_3.withOutMessagePolicy({
  fold: D39.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D39.makeNoopStep()
  })
})
const u39_4 = D39.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-39-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p39_4 = u39_4.withOutMessagePolicy({
  fold: D39.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D39.makeNoopStep(),
    SelectedDate: () => D39.makeNoopStep(),
    ClearedDate: () => D39.makeNoopStep()
  })
})
const u39_5 = D39.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-39-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p39_5 = u39_5.withOutMessagePolicy({
  fold: D39.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D39.makeNoopStep(),
    SelectedDate: () => D39.makeNoopStep()
  })
})
const u39_6 = D39.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-39-6" }) }
})
const p39_6 = u39_6.withOutMessagePolicy({
  fold: D39.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D39.makeNoopStep(),
    ChangedKeyboardTarget: () => D39.makeNoopStep(),
    Reordered: () => D39.makeNoopStep(),
    Cancelled: () => D39.makeNoopStep()
  })
})
const C39 = D39.makeComposition({
  bindings: [p39_0, p39_1, p39_2, p39_3, p39_4, p39_5, p39_6]
})
const prep39 = () =>
  C39.prepareBlock({
    init: C39.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C39.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd39_0({ value: model.count }),
          Cmd39_1({ value: model.count }),
          Cmd39_2({ value: model.count }),
          Cmd39_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O39.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O39.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O39.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O39.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd39_0.layer,
      Cmd39_1.layer,
      Cmd39_2.layer,
      Cmd39_3.layer
    ),
    operations: { start: () => Tuple.make(E39.Start()) }
  })
const B39: Block.FromAssemblyWithOutMessage<typeof M39, typeof prep39> =
  Block.assemble(prep39)
const M40 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E40 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O40 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D40 = Block.makeDefinition("Child40", {
  Model: M40,
  Message: E40,
  OutMessage: O40
})
const Cmd40_0 = D40.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E40.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E40.Done0(args))
  }
})
const Cmd40_1 = D40.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E40.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E40.Done1(args))
  }
})
const Cmd40_2 = D40.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E40.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E40.Done2(args))
  }
})
const Cmd40_3 = D40.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E40.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E40.Done3(args))
  }
})
const u40_0 = D40.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-40-0" }) }
})
const p40_0 = u40_0.withOutMessagePolicy({
  fold: D40.makeOutMessageFold(DialogBlock, {
    Opened: () => D40.makeNoopStep(),
    Closed: () => D40.makeNoopStep(),
    CompletedClose: () => D40.makeNoopStep()
  })
})
const u40_1 = D40.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-40-1" }) }
})
const p40_1 = u40_1.withOutMessagePolicy({
  fold: D40.makeOutMessageFold(PopoverBlock, {
    Opened: () => D40.makeNoopStep(),
    Closed: () => D40.makeNoopStep()
  })
})
const u40_2 = D40.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-40-2" }) }
})
const p40_2 = u40_2.withOutMessagePolicy({
  fold: D40.makeOutMessageFold(TooltipBlock, {
    Shown: () => D40.makeNoopStep(),
    Hidden: () => D40.makeNoopStep()
  })
})
const u40_3 = D40.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-40-3", min: 0, max: 100, step: 1 })
  }
})
const p40_3 = u40_3.withOutMessagePolicy({
  fold: D40.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D40.makeNoopStep()
  })
})
const u40_4 = D40.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-40-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p40_4 = u40_4.withOutMessagePolicy({
  fold: D40.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D40.makeNoopStep(),
    SelectedDate: () => D40.makeNoopStep(),
    ClearedDate: () => D40.makeNoopStep()
  })
})
const u40_5 = D40.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-40-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p40_5 = u40_5.withOutMessagePolicy({
  fold: D40.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D40.makeNoopStep(),
    SelectedDate: () => D40.makeNoopStep()
  })
})
const u40_6 = D40.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-40-6" }) }
})
const p40_6 = u40_6.withOutMessagePolicy({
  fold: D40.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D40.makeNoopStep(),
    ChangedKeyboardTarget: () => D40.makeNoopStep(),
    Reordered: () => D40.makeNoopStep(),
    Cancelled: () => D40.makeNoopStep()
  })
})
const C40 = D40.makeComposition({
  bindings: [p40_0, p40_1, p40_2, p40_3, p40_4, p40_5, p40_6]
})
const prep40 = () =>
  C40.prepareBlock({
    init: C40.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C40.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd40_0({ value: model.count }),
          Cmd40_1({ value: model.count }),
          Cmd40_2({ value: model.count }),
          Cmd40_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O40.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O40.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O40.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O40.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd40_0.layer,
      Cmd40_1.layer,
      Cmd40_2.layer,
      Cmd40_3.layer
    ),
    operations: { start: () => Tuple.make(E40.Start()) }
  })
const B40: Block.FromAssemblyWithOutMessage<typeof M40, typeof prep40> =
  Block.assemble(prep40)
const M41 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E41 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O41 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D41 = Block.makeDefinition("Child41", {
  Model: M41,
  Message: E41,
  OutMessage: O41
})
const Cmd41_0 = D41.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E41.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E41.Done0(args))
  }
})
const Cmd41_1 = D41.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E41.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E41.Done1(args))
  }
})
const Cmd41_2 = D41.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E41.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E41.Done2(args))
  }
})
const Cmd41_3 = D41.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E41.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E41.Done3(args))
  }
})
const u41_0 = D41.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-41-0" }) }
})
const p41_0 = u41_0.withOutMessagePolicy({
  fold: D41.makeOutMessageFold(DialogBlock, {
    Opened: () => D41.makeNoopStep(),
    Closed: () => D41.makeNoopStep(),
    CompletedClose: () => D41.makeNoopStep()
  })
})
const u41_1 = D41.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-41-1" }) }
})
const p41_1 = u41_1.withOutMessagePolicy({
  fold: D41.makeOutMessageFold(PopoverBlock, {
    Opened: () => D41.makeNoopStep(),
    Closed: () => D41.makeNoopStep()
  })
})
const u41_2 = D41.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-41-2" }) }
})
const p41_2 = u41_2.withOutMessagePolicy({
  fold: D41.makeOutMessageFold(TooltipBlock, {
    Shown: () => D41.makeNoopStep(),
    Hidden: () => D41.makeNoopStep()
  })
})
const u41_3 = D41.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-41-3", min: 0, max: 100, step: 1 })
  }
})
const p41_3 = u41_3.withOutMessagePolicy({
  fold: D41.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D41.makeNoopStep()
  })
})
const u41_4 = D41.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-41-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p41_4 = u41_4.withOutMessagePolicy({
  fold: D41.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D41.makeNoopStep(),
    SelectedDate: () => D41.makeNoopStep(),
    ClearedDate: () => D41.makeNoopStep()
  })
})
const u41_5 = D41.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-41-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p41_5 = u41_5.withOutMessagePolicy({
  fold: D41.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D41.makeNoopStep(),
    SelectedDate: () => D41.makeNoopStep()
  })
})
const u41_6 = D41.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-41-6" }) }
})
const p41_6 = u41_6.withOutMessagePolicy({
  fold: D41.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D41.makeNoopStep(),
    ChangedKeyboardTarget: () => D41.makeNoopStep(),
    Reordered: () => D41.makeNoopStep(),
    Cancelled: () => D41.makeNoopStep()
  })
})
const C41 = D41.makeComposition({
  bindings: [p41_0, p41_1, p41_2, p41_3, p41_4, p41_5, p41_6]
})
const prep41 = () =>
  C41.prepareBlock({
    init: C41.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C41.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd41_0({ value: model.count }),
          Cmd41_1({ value: model.count }),
          Cmd41_2({ value: model.count }),
          Cmd41_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O41.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O41.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O41.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O41.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd41_0.layer,
      Cmd41_1.layer,
      Cmd41_2.layer,
      Cmd41_3.layer
    ),
    operations: { start: () => Tuple.make(E41.Start()) }
  })
const B41: Block.FromAssemblyWithOutMessage<typeof M41, typeof prep41> =
  Block.assemble(prep41)
const M42 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E42 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O42 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D42 = Block.makeDefinition("Child42", {
  Model: M42,
  Message: E42,
  OutMessage: O42
})
const Cmd42_0 = D42.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E42.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E42.Done0(args))
  }
})
const Cmd42_1 = D42.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E42.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E42.Done1(args))
  }
})
const Cmd42_2 = D42.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E42.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E42.Done2(args))
  }
})
const Cmd42_3 = D42.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E42.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E42.Done3(args))
  }
})
const u42_0 = D42.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-42-0" }) }
})
const p42_0 = u42_0.withOutMessagePolicy({
  fold: D42.makeOutMessageFold(DialogBlock, {
    Opened: () => D42.makeNoopStep(),
    Closed: () => D42.makeNoopStep(),
    CompletedClose: () => D42.makeNoopStep()
  })
})
const u42_1 = D42.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-42-1" }) }
})
const p42_1 = u42_1.withOutMessagePolicy({
  fold: D42.makeOutMessageFold(PopoverBlock, {
    Opened: () => D42.makeNoopStep(),
    Closed: () => D42.makeNoopStep()
  })
})
const u42_2 = D42.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-42-2" }) }
})
const p42_2 = u42_2.withOutMessagePolicy({
  fold: D42.makeOutMessageFold(TooltipBlock, {
    Shown: () => D42.makeNoopStep(),
    Hidden: () => D42.makeNoopStep()
  })
})
const u42_3 = D42.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-42-3", min: 0, max: 100, step: 1 })
  }
})
const p42_3 = u42_3.withOutMessagePolicy({
  fold: D42.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D42.makeNoopStep()
  })
})
const u42_4 = D42.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-42-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p42_4 = u42_4.withOutMessagePolicy({
  fold: D42.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D42.makeNoopStep(),
    SelectedDate: () => D42.makeNoopStep(),
    ClearedDate: () => D42.makeNoopStep()
  })
})
const u42_5 = D42.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-42-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p42_5 = u42_5.withOutMessagePolicy({
  fold: D42.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D42.makeNoopStep(),
    SelectedDate: () => D42.makeNoopStep()
  })
})
const u42_6 = D42.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-42-6" }) }
})
const p42_6 = u42_6.withOutMessagePolicy({
  fold: D42.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D42.makeNoopStep(),
    ChangedKeyboardTarget: () => D42.makeNoopStep(),
    Reordered: () => D42.makeNoopStep(),
    Cancelled: () => D42.makeNoopStep()
  })
})
const C42 = D42.makeComposition({
  bindings: [p42_0, p42_1, p42_2, p42_3, p42_4, p42_5, p42_6]
})
const prep42 = () =>
  C42.prepareBlock({
    init: C42.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C42.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd42_0({ value: model.count }),
          Cmd42_1({ value: model.count }),
          Cmd42_2({ value: model.count }),
          Cmd42_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O42.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O42.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O42.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O42.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd42_0.layer,
      Cmd42_1.layer,
      Cmd42_2.layer,
      Cmd42_3.layer
    ),
    operations: { start: () => Tuple.make(E42.Start()) }
  })
const B42: Block.FromAssemblyWithOutMessage<typeof M42, typeof prep42> =
  Block.assemble(prep42)
const M43 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E43 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O43 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D43 = Block.makeDefinition("Child43", {
  Model: M43,
  Message: E43,
  OutMessage: O43
})
const Cmd43_0 = D43.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E43.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E43.Done0(args))
  }
})
const Cmd43_1 = D43.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E43.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E43.Done1(args))
  }
})
const Cmd43_2 = D43.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E43.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E43.Done2(args))
  }
})
const Cmd43_3 = D43.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E43.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E43.Done3(args))
  }
})
const u43_0 = D43.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-43-0" }) }
})
const p43_0 = u43_0.withOutMessagePolicy({
  fold: D43.makeOutMessageFold(DialogBlock, {
    Opened: () => D43.makeNoopStep(),
    Closed: () => D43.makeNoopStep(),
    CompletedClose: () => D43.makeNoopStep()
  })
})
const u43_1 = D43.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-43-1" }) }
})
const p43_1 = u43_1.withOutMessagePolicy({
  fold: D43.makeOutMessageFold(PopoverBlock, {
    Opened: () => D43.makeNoopStep(),
    Closed: () => D43.makeNoopStep()
  })
})
const u43_2 = D43.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-43-2" }) }
})
const p43_2 = u43_2.withOutMessagePolicy({
  fold: D43.makeOutMessageFold(TooltipBlock, {
    Shown: () => D43.makeNoopStep(),
    Hidden: () => D43.makeNoopStep()
  })
})
const u43_3 = D43.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-43-3", min: 0, max: 100, step: 1 })
  }
})
const p43_3 = u43_3.withOutMessagePolicy({
  fold: D43.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D43.makeNoopStep()
  })
})
const u43_4 = D43.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-43-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p43_4 = u43_4.withOutMessagePolicy({
  fold: D43.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D43.makeNoopStep(),
    SelectedDate: () => D43.makeNoopStep(),
    ClearedDate: () => D43.makeNoopStep()
  })
})
const u43_5 = D43.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-43-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p43_5 = u43_5.withOutMessagePolicy({
  fold: D43.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D43.makeNoopStep(),
    SelectedDate: () => D43.makeNoopStep()
  })
})
const u43_6 = D43.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-43-6" }) }
})
const p43_6 = u43_6.withOutMessagePolicy({
  fold: D43.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D43.makeNoopStep(),
    ChangedKeyboardTarget: () => D43.makeNoopStep(),
    Reordered: () => D43.makeNoopStep(),
    Cancelled: () => D43.makeNoopStep()
  })
})
const C43 = D43.makeComposition({
  bindings: [p43_0, p43_1, p43_2, p43_3, p43_4, p43_5, p43_6]
})
const prep43 = () =>
  C43.prepareBlock({
    init: C43.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C43.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd43_0({ value: model.count }),
          Cmd43_1({ value: model.count }),
          Cmd43_2({ value: model.count }),
          Cmd43_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O43.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O43.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O43.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O43.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd43_0.layer,
      Cmd43_1.layer,
      Cmd43_2.layer,
      Cmd43_3.layer
    ),
    operations: { start: () => Tuple.make(E43.Start()) }
  })
const B43: Block.FromAssemblyWithOutMessage<typeof M43, typeof prep43> =
  Block.assemble(prep43)
const M44 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E44 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O44 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D44 = Block.makeDefinition("Child44", {
  Model: M44,
  Message: E44,
  OutMessage: O44
})
const Cmd44_0 = D44.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E44.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E44.Done0(args))
  }
})
const Cmd44_1 = D44.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E44.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E44.Done1(args))
  }
})
const Cmd44_2 = D44.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E44.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E44.Done2(args))
  }
})
const Cmd44_3 = D44.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E44.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E44.Done3(args))
  }
})
const u44_0 = D44.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-44-0" }) }
})
const p44_0 = u44_0.withOutMessagePolicy({
  fold: D44.makeOutMessageFold(DialogBlock, {
    Opened: () => D44.makeNoopStep(),
    Closed: () => D44.makeNoopStep(),
    CompletedClose: () => D44.makeNoopStep()
  })
})
const u44_1 = D44.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-44-1" }) }
})
const p44_1 = u44_1.withOutMessagePolicy({
  fold: D44.makeOutMessageFold(PopoverBlock, {
    Opened: () => D44.makeNoopStep(),
    Closed: () => D44.makeNoopStep()
  })
})
const u44_2 = D44.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-44-2" }) }
})
const p44_2 = u44_2.withOutMessagePolicy({
  fold: D44.makeOutMessageFold(TooltipBlock, {
    Shown: () => D44.makeNoopStep(),
    Hidden: () => D44.makeNoopStep()
  })
})
const u44_3 = D44.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-44-3", min: 0, max: 100, step: 1 })
  }
})
const p44_3 = u44_3.withOutMessagePolicy({
  fold: D44.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D44.makeNoopStep()
  })
})
const u44_4 = D44.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-44-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p44_4 = u44_4.withOutMessagePolicy({
  fold: D44.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D44.makeNoopStep(),
    SelectedDate: () => D44.makeNoopStep(),
    ClearedDate: () => D44.makeNoopStep()
  })
})
const u44_5 = D44.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-44-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p44_5 = u44_5.withOutMessagePolicy({
  fold: D44.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D44.makeNoopStep(),
    SelectedDate: () => D44.makeNoopStep()
  })
})
const u44_6 = D44.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-44-6" }) }
})
const p44_6 = u44_6.withOutMessagePolicy({
  fold: D44.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D44.makeNoopStep(),
    ChangedKeyboardTarget: () => D44.makeNoopStep(),
    Reordered: () => D44.makeNoopStep(),
    Cancelled: () => D44.makeNoopStep()
  })
})
const C44 = D44.makeComposition({
  bindings: [p44_0, p44_1, p44_2, p44_3, p44_4, p44_5, p44_6]
})
const prep44 = () =>
  C44.prepareBlock({
    init: C44.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C44.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd44_0({ value: model.count }),
          Cmd44_1({ value: model.count }),
          Cmd44_2({ value: model.count }),
          Cmd44_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O44.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O44.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O44.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O44.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd44_0.layer,
      Cmd44_1.layer,
      Cmd44_2.layer,
      Cmd44_3.layer
    ),
    operations: { start: () => Tuple.make(E44.Start()) }
  })
const B44: Block.FromAssemblyWithOutMessage<typeof M44, typeof prep44> =
  Block.assemble(prep44)
const M45 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E45 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O45 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D45 = Block.makeDefinition("Child45", {
  Model: M45,
  Message: E45,
  OutMessage: O45
})
const Cmd45_0 = D45.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E45.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E45.Done0(args))
  }
})
const Cmd45_1 = D45.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E45.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E45.Done1(args))
  }
})
const Cmd45_2 = D45.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E45.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E45.Done2(args))
  }
})
const Cmd45_3 = D45.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E45.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E45.Done3(args))
  }
})
const u45_0 = D45.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-45-0" }) }
})
const p45_0 = u45_0.withOutMessagePolicy({
  fold: D45.makeOutMessageFold(DialogBlock, {
    Opened: () => D45.makeNoopStep(),
    Closed: () => D45.makeNoopStep(),
    CompletedClose: () => D45.makeNoopStep()
  })
})
const u45_1 = D45.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-45-1" }) }
})
const p45_1 = u45_1.withOutMessagePolicy({
  fold: D45.makeOutMessageFold(PopoverBlock, {
    Opened: () => D45.makeNoopStep(),
    Closed: () => D45.makeNoopStep()
  })
})
const u45_2 = D45.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-45-2" }) }
})
const p45_2 = u45_2.withOutMessagePolicy({
  fold: D45.makeOutMessageFold(TooltipBlock, {
    Shown: () => D45.makeNoopStep(),
    Hidden: () => D45.makeNoopStep()
  })
})
const u45_3 = D45.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-45-3", min: 0, max: 100, step: 1 })
  }
})
const p45_3 = u45_3.withOutMessagePolicy({
  fold: D45.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D45.makeNoopStep()
  })
})
const u45_4 = D45.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-45-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p45_4 = u45_4.withOutMessagePolicy({
  fold: D45.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D45.makeNoopStep(),
    SelectedDate: () => D45.makeNoopStep(),
    ClearedDate: () => D45.makeNoopStep()
  })
})
const u45_5 = D45.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-45-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p45_5 = u45_5.withOutMessagePolicy({
  fold: D45.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D45.makeNoopStep(),
    SelectedDate: () => D45.makeNoopStep()
  })
})
const u45_6 = D45.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-45-6" }) }
})
const p45_6 = u45_6.withOutMessagePolicy({
  fold: D45.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D45.makeNoopStep(),
    ChangedKeyboardTarget: () => D45.makeNoopStep(),
    Reordered: () => D45.makeNoopStep(),
    Cancelled: () => D45.makeNoopStep()
  })
})
const C45 = D45.makeComposition({
  bindings: [p45_0, p45_1, p45_2, p45_3, p45_4, p45_5, p45_6]
})
const prep45 = () =>
  C45.prepareBlock({
    init: C45.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C45.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd45_0({ value: model.count }),
          Cmd45_1({ value: model.count }),
          Cmd45_2({ value: model.count }),
          Cmd45_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O45.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O45.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O45.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O45.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd45_0.layer,
      Cmd45_1.layer,
      Cmd45_2.layer,
      Cmd45_3.layer
    ),
    operations: { start: () => Tuple.make(E45.Start()) }
  })
const B45: Block.FromAssemblyWithOutMessage<typeof M45, typeof prep45> =
  Block.assemble(prep45)
const M46 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E46 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O46 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D46 = Block.makeDefinition("Child46", {
  Model: M46,
  Message: E46,
  OutMessage: O46
})
const Cmd46_0 = D46.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E46.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E46.Done0(args))
  }
})
const Cmd46_1 = D46.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E46.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E46.Done1(args))
  }
})
const Cmd46_2 = D46.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E46.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E46.Done2(args))
  }
})
const Cmd46_3 = D46.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E46.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E46.Done3(args))
  }
})
const u46_0 = D46.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-46-0" }) }
})
const p46_0 = u46_0.withOutMessagePolicy({
  fold: D46.makeOutMessageFold(DialogBlock, {
    Opened: () => D46.makeNoopStep(),
    Closed: () => D46.makeNoopStep(),
    CompletedClose: () => D46.makeNoopStep()
  })
})
const u46_1 = D46.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-46-1" }) }
})
const p46_1 = u46_1.withOutMessagePolicy({
  fold: D46.makeOutMessageFold(PopoverBlock, {
    Opened: () => D46.makeNoopStep(),
    Closed: () => D46.makeNoopStep()
  })
})
const u46_2 = D46.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-46-2" }) }
})
const p46_2 = u46_2.withOutMessagePolicy({
  fold: D46.makeOutMessageFold(TooltipBlock, {
    Shown: () => D46.makeNoopStep(),
    Hidden: () => D46.makeNoopStep()
  })
})
const u46_3 = D46.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-46-3", min: 0, max: 100, step: 1 })
  }
})
const p46_3 = u46_3.withOutMessagePolicy({
  fold: D46.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D46.makeNoopStep()
  })
})
const u46_4 = D46.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-46-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p46_4 = u46_4.withOutMessagePolicy({
  fold: D46.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D46.makeNoopStep(),
    SelectedDate: () => D46.makeNoopStep(),
    ClearedDate: () => D46.makeNoopStep()
  })
})
const u46_5 = D46.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-46-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p46_5 = u46_5.withOutMessagePolicy({
  fold: D46.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D46.makeNoopStep(),
    SelectedDate: () => D46.makeNoopStep()
  })
})
const u46_6 = D46.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-46-6" }) }
})
const p46_6 = u46_6.withOutMessagePolicy({
  fold: D46.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D46.makeNoopStep(),
    ChangedKeyboardTarget: () => D46.makeNoopStep(),
    Reordered: () => D46.makeNoopStep(),
    Cancelled: () => D46.makeNoopStep()
  })
})
const C46 = D46.makeComposition({
  bindings: [p46_0, p46_1, p46_2, p46_3, p46_4, p46_5, p46_6]
})
const prep46 = () =>
  C46.prepareBlock({
    init: C46.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C46.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd46_0({ value: model.count }),
          Cmd46_1({ value: model.count }),
          Cmd46_2({ value: model.count }),
          Cmd46_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O46.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O46.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O46.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O46.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd46_0.layer,
      Cmd46_1.layer,
      Cmd46_2.layer,
      Cmd46_3.layer
    ),
    operations: { start: () => Tuple.make(E46.Start()) }
  })
const B46: Block.FromAssemblyWithOutMessage<typeof M46, typeof prep46> =
  Block.assemble(prep46)
const M47 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E47 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O47 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D47 = Block.makeDefinition("Child47", {
  Model: M47,
  Message: E47,
  OutMessage: O47
})
const Cmd47_0 = D47.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E47.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E47.Done0(args))
  }
})
const Cmd47_1 = D47.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E47.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E47.Done1(args))
  }
})
const Cmd47_2 = D47.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E47.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E47.Done2(args))
  }
})
const Cmd47_3 = D47.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E47.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E47.Done3(args))
  }
})
const u47_0 = D47.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-47-0" }) }
})
const p47_0 = u47_0.withOutMessagePolicy({
  fold: D47.makeOutMessageFold(DialogBlock, {
    Opened: () => D47.makeNoopStep(),
    Closed: () => D47.makeNoopStep(),
    CompletedClose: () => D47.makeNoopStep()
  })
})
const u47_1 = D47.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-47-1" }) }
})
const p47_1 = u47_1.withOutMessagePolicy({
  fold: D47.makeOutMessageFold(PopoverBlock, {
    Opened: () => D47.makeNoopStep(),
    Closed: () => D47.makeNoopStep()
  })
})
const u47_2 = D47.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-47-2" }) }
})
const p47_2 = u47_2.withOutMessagePolicy({
  fold: D47.makeOutMessageFold(TooltipBlock, {
    Shown: () => D47.makeNoopStep(),
    Hidden: () => D47.makeNoopStep()
  })
})
const u47_3 = D47.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-47-3", min: 0, max: 100, step: 1 })
  }
})
const p47_3 = u47_3.withOutMessagePolicy({
  fold: D47.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D47.makeNoopStep()
  })
})
const u47_4 = D47.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-47-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p47_4 = u47_4.withOutMessagePolicy({
  fold: D47.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D47.makeNoopStep(),
    SelectedDate: () => D47.makeNoopStep(),
    ClearedDate: () => D47.makeNoopStep()
  })
})
const u47_5 = D47.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-47-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p47_5 = u47_5.withOutMessagePolicy({
  fold: D47.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D47.makeNoopStep(),
    SelectedDate: () => D47.makeNoopStep()
  })
})
const u47_6 = D47.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-47-6" }) }
})
const p47_6 = u47_6.withOutMessagePolicy({
  fold: D47.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D47.makeNoopStep(),
    ChangedKeyboardTarget: () => D47.makeNoopStep(),
    Reordered: () => D47.makeNoopStep(),
    Cancelled: () => D47.makeNoopStep()
  })
})
const C47 = D47.makeComposition({
  bindings: [p47_0, p47_1, p47_2, p47_3, p47_4, p47_5, p47_6]
})
const prep47 = () =>
  C47.prepareBlock({
    init: C47.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C47.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd47_0({ value: model.count }),
          Cmd47_1({ value: model.count }),
          Cmd47_2({ value: model.count }),
          Cmd47_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O47.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O47.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O47.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O47.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd47_0.layer,
      Cmd47_1.layer,
      Cmd47_2.layer,
      Cmd47_3.layer
    ),
    operations: { start: () => Tuple.make(E47.Start()) }
  })
const B47: Block.FromAssemblyWithOutMessage<typeof M47, typeof prep47> =
  Block.assemble(prep47)
const M48 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E48 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O48 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D48 = Block.makeDefinition("Child48", {
  Model: M48,
  Message: E48,
  OutMessage: O48
})
const Cmd48_0 = D48.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E48.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E48.Done0(args))
  }
})
const Cmd48_1 = D48.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E48.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E48.Done1(args))
  }
})
const Cmd48_2 = D48.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E48.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E48.Done2(args))
  }
})
const Cmd48_3 = D48.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E48.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E48.Done3(args))
  }
})
const u48_0 = D48.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-48-0" }) }
})
const p48_0 = u48_0.withOutMessagePolicy({
  fold: D48.makeOutMessageFold(DialogBlock, {
    Opened: () => D48.makeNoopStep(),
    Closed: () => D48.makeNoopStep(),
    CompletedClose: () => D48.makeNoopStep()
  })
})
const u48_1 = D48.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-48-1" }) }
})
const p48_1 = u48_1.withOutMessagePolicy({
  fold: D48.makeOutMessageFold(PopoverBlock, {
    Opened: () => D48.makeNoopStep(),
    Closed: () => D48.makeNoopStep()
  })
})
const u48_2 = D48.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-48-2" }) }
})
const p48_2 = u48_2.withOutMessagePolicy({
  fold: D48.makeOutMessageFold(TooltipBlock, {
    Shown: () => D48.makeNoopStep(),
    Hidden: () => D48.makeNoopStep()
  })
})
const u48_3 = D48.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-48-3", min: 0, max: 100, step: 1 })
  }
})
const p48_3 = u48_3.withOutMessagePolicy({
  fold: D48.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D48.makeNoopStep()
  })
})
const u48_4 = D48.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-48-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p48_4 = u48_4.withOutMessagePolicy({
  fold: D48.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D48.makeNoopStep(),
    SelectedDate: () => D48.makeNoopStep(),
    ClearedDate: () => D48.makeNoopStep()
  })
})
const u48_5 = D48.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-48-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p48_5 = u48_5.withOutMessagePolicy({
  fold: D48.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D48.makeNoopStep(),
    SelectedDate: () => D48.makeNoopStep()
  })
})
const u48_6 = D48.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-48-6" }) }
})
const p48_6 = u48_6.withOutMessagePolicy({
  fold: D48.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D48.makeNoopStep(),
    ChangedKeyboardTarget: () => D48.makeNoopStep(),
    Reordered: () => D48.makeNoopStep(),
    Cancelled: () => D48.makeNoopStep()
  })
})
const C48 = D48.makeComposition({
  bindings: [p48_0, p48_1, p48_2, p48_3, p48_4, p48_5, p48_6]
})
const prep48 = () =>
  C48.prepareBlock({
    init: C48.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C48.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd48_0({ value: model.count }),
          Cmd48_1({ value: model.count }),
          Cmd48_2({ value: model.count }),
          Cmd48_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O48.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O48.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O48.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O48.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd48_0.layer,
      Cmd48_1.layer,
      Cmd48_2.layer,
      Cmd48_3.layer
    ),
    operations: { start: () => Tuple.make(E48.Start()) }
  })
const B48: Block.FromAssemblyWithOutMessage<typeof M48, typeof prep48> =
  Block.assemble(prep48)
const M49 = Schema.Struct({
  count: Schema.Number,
  f0: Schema.String,
  f1: Schema.String,
  f2: Schema.String,
  f3: Schema.String,
  f4: Schema.String,
  f5: Schema.String,
  f6: Schema.String,
  f7: Schema.String,
  u0: DialogBlock.Model,
  u1: PopoverBlock.Model,
  u2: TooltipBlock.Model,
  u3: SliderBlock.Model,
  u4: DatePickerBlock.Model,
  u5: CalendarBlock.Model,
  u6: DragAndDropBlock.Model
})
const E49 = defineMessageUnion({
  Start: {},
  Done0: { value: Schema.Number },
  Done1: { value: Schema.Number },
  Done2: { value: Schema.Number },
  Done3: { value: Schema.Number }
})
const O49 = defineMessageUnion({ Reported: { value: Schema.Number } })
const D49 = Block.makeDefinition("Child49", {
  Model: M49,
  Message: E49,
  OutMessage: O49
})
const Cmd49_0 = D49.makeCommand("Work0", {
  args: { value: Schema.Number },
  messages: [E49.Done0],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E49.Done0(args))
  }
})
const Cmd49_1 = D49.makeCommand("Work1", {
  args: { value: Schema.Number },
  messages: [E49.Done1],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E49.Done1(args))
  }
})
const Cmd49_2 = D49.makeCommand("Work2", {
  args: { value: Schema.Number },
  messages: [E49.Done2],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E49.Done2(args))
  }
})
const Cmd49_3 = D49.makeCommand("Work3", {
  args: { value: Schema.Number },
  messages: [E49.Done3],
  handler: function* () {
    yield* Effect.void
    return (args) => Effect.succeed(E49.Done3(args))
  }
})
const u49_0 = D49.makeBinding(DialogBlock, {
  field: "u0",
  init: { contextToArgs: () => Tuple.make({ id: "child-49-0" }) }
})
const p49_0 = u49_0.withOutMessagePolicy({
  fold: D49.makeOutMessageFold(DialogBlock, {
    Opened: () => D49.makeNoopStep(),
    Closed: () => D49.makeNoopStep(),
    CompletedClose: () => D49.makeNoopStep()
  })
})
const u49_1 = D49.makeBinding(PopoverBlock, {
  field: "u1",
  init: { contextToArgs: () => Tuple.make({ id: "child-49-1" }) }
})
const p49_1 = u49_1.withOutMessagePolicy({
  fold: D49.makeOutMessageFold(PopoverBlock, {
    Opened: () => D49.makeNoopStep(),
    Closed: () => D49.makeNoopStep()
  })
})
const u49_2 = D49.makeBinding(TooltipBlock, {
  field: "u2",
  init: { contextToArgs: () => Tuple.make({ id: "child-49-2" }) }
})
const p49_2 = u49_2.withOutMessagePolicy({
  fold: D49.makeOutMessageFold(TooltipBlock, {
    Shown: () => D49.makeNoopStep(),
    Hidden: () => D49.makeNoopStep()
  })
})
const u49_3 = D49.makeBinding(SliderBlock, {
  field: "u3",
  init: {
    contextToArgs: () =>
      Tuple.make({ id: "child-49-3", min: 0, max: 100, step: 1 })
  }
})
const p49_3 = u49_3.withOutMessagePolicy({
  fold: D49.makeOutMessageFold(SliderBlock, {
    ChangedValue: () => D49.makeNoopStep()
  })
})
const u49_4 = D49.makeBinding(DatePickerBlock, {
  field: "u4",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-49-4",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p49_4 = u49_4.withOutMessagePolicy({
  fold: D49.makeOutMessageFold(DatePickerBlock, {
    ChangedViewMonth: () => D49.makeNoopStep(),
    SelectedDate: () => D49.makeNoopStep(),
    ClearedDate: () => D49.makeNoopStep()
  })
})
const u49_5 = D49.makeBinding(CalendarBlock, {
  field: "u5",
  init: {
    contextToArgs: () =>
      Tuple.make({
        id: "child-49-5",
        today: { year: 2026, month: 10, day: 28 }
      })
  }
})
const p49_5 = u49_5.withOutMessagePolicy({
  fold: D49.makeOutMessageFold(CalendarBlock, {
    ChangedViewMonth: () => D49.makeNoopStep(),
    SelectedDate: () => D49.makeNoopStep()
  })
})
const u49_6 = D49.makeBinding(DragAndDropBlock, {
  field: "u6",
  init: { contextToArgs: () => Tuple.make({ id: "child-49-6" }) }
})
const p49_6 = u49_6.withOutMessagePolicy({
  fold: D49.makeOutMessageFold(DragAndDropBlock, {
    StartedKeyboardDrag: () => D49.makeNoopStep(),
    ChangedKeyboardTarget: () => D49.makeNoopStep(),
    Reordered: () => D49.makeNoopStep(),
    Cancelled: () => D49.makeNoopStep()
  })
})
const C49 = D49.makeComposition({
  bindings: [p49_0, p49_1, p49_2, p49_3, p49_4, p49_5, p49_6]
})
const prep49 = () =>
  C49.prepareBlock({
    init: C49.makeInit(() => ({
      model: {
        count: 0,
        f0: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: ""
      }
    })),
    update: C49.makeUpdate({
      Start: (model) => ({
        model,
        commands: [
          Cmd49_0({ value: model.count }),
          Cmd49_1({ value: model.count }),
          Cmd49_2({ value: model.count }),
          Cmd49_3({ value: model.count })
        ]
      }),
      Done0: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O49.Reported({ value: msg.value })
      }),
      Done1: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O49.Reported({ value: msg.value })
      }),
      Done2: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O49.Reported({ value: msg.value })
      }),
      Done3: (model, msg) => ({
        model: { ...model, count: msg.value },
        outMessage: O49.Reported({ value: msg.value })
      })
    }),
    EffectsLayer: Layer.mergeAll(
      Cmd49_0.layer,
      Cmd49_1.layer,
      Cmd49_2.layer,
      Cmd49_3.layer
    ),
    operations: { start: () => Tuple.make(E49.Start()) }
  })
const B49: Block.FromAssemblyWithOutMessage<typeof M49, typeof prep49> =
  Block.assemble(prep49)
const RM = Schema.Struct({
  b0: B0.Model,
  b1: B1.Model,
  b2: B2.Model,
  b3: B3.Model,
  b4: B4.Model,
  b5: B5.Model,
  b6: B6.Model,
  b7: B7.Model,
  b8: B8.Model,
  b9: B9.Model,
  b10: B10.Model,
  b11: B11.Model,
  b12: B12.Model,
  b13: B13.Model,
  b14: B14.Model,
  b15: B15.Model,
  b16: B16.Model,
  b17: B17.Model,
  b18: B18.Model,
  b19: B19.Model,
  b20: B20.Model,
  b21: B21.Model,
  b22: B22.Model,
  b23: B23.Model,
  b24: B24.Model,
  b25: B25.Model,
  b26: B26.Model,
  b27: B27.Model,
  b28: B28.Model,
  b29: B29.Model,
  b30: B30.Model,
  b31: B31.Model,
  b32: B32.Model,
  b33: B33.Model,
  b34: B34.Model,
  b35: B35.Model,
  b36: B36.Model,
  b37: B37.Model,
  b38: B38.Model,
  b39: B39.Model,
  b40: B40.Model,
  b41: B41.Model,
  b42: B42.Model,
  b43: B43.Model,
  b44: B44.Model,
  b45: B45.Model,
  b46: B46.Model,
  b47: B47.Model,
  b48: B48.Model,
  b49: B49.Model
})
const RE = defineMessageUnion({
  Action0: {},
  Action1: {},
  Action2: {},
  Action3: {},
  Action4: {},
  Action5: {},
  Action6: {},
  Action7: {},
  Action8: {},
  Action9: {},
  Action10: {},
  Action11: {},
  Action12: {},
  Action13: {},
  Action14: {},
  Action15: {},
  Action16: {},
  Action17: {},
  Action18: {},
  Action19: {},
  Action20: {},
  Action21: {},
  Action22: {},
  Action23: {},
  Action24: {},
  Action25: {},
  Action26: {},
  Action27: {},
  Action28: {},
  Action29: {},
  Action30: {},
  Action31: {},
  Action32: {},
  Action33: {},
  Action34: {},
  Action35: {},
  Action36: {},
  Action37: {},
  Action38: {},
  Action39: {},
  Action40: {},
  Action41: {},
  Action42: {},
  Action43: {},
  Action44: {},
  Action45: {},
  Action46: {},
  Action47: {},
  Action48: {},
  Action49: {},
  Action50: {},
  Action51: {},
  Action52: {},
  Action53: {},
  Action54: {},
  Action55: {},
  Action56: {},
  Action57: {},
  Action58: {},
  Action59: {},
  Action60: {},
  Action61: {},
  Action62: {},
  Action63: {},
  Action64: {},
  Action65: {},
  Action66: {},
  Action67: {},
  Action68: {},
  Action69: {},
  Action70: {},
  Action71: {},
  Action72: {},
  Action73: {},
  Action74: {},
  Action75: {},
  Action76: {},
  Action77: {},
  Action78: {},
  Action79: {}
})
const RD = Block.makeDefinition("Root", { Model: RM, Message: RE })
const b0 = RD.makeBinding(B0, {
  field: "b0",
  init: { contextToArgs: () => Tuple.make() }
})
const b1 = RD.makeBinding(B1, {
  field: "b1",
  init: { contextToArgs: () => Tuple.make() }
})
const b2 = RD.makeBinding(B2, {
  field: "b2",
  init: { contextToArgs: () => Tuple.make() }
})
const b3 = RD.makeBinding(B3, {
  field: "b3",
  init: { contextToArgs: () => Tuple.make() }
})
const b4 = RD.makeBinding(B4, {
  field: "b4",
  init: { contextToArgs: () => Tuple.make() }
})
const b5 = RD.makeBinding(B5, {
  field: "b5",
  init: { contextToArgs: () => Tuple.make() }
})
const b6 = RD.makeBinding(B6, {
  field: "b6",
  init: { contextToArgs: () => Tuple.make() }
})
const b7 = RD.makeBinding(B7, {
  field: "b7",
  init: { contextToArgs: () => Tuple.make() }
})
const b8 = RD.makeBinding(B8, {
  field: "b8",
  init: { contextToArgs: () => Tuple.make() }
})
const b9 = RD.makeBinding(B9, {
  field: "b9",
  init: { contextToArgs: () => Tuple.make() }
})
const b10 = RD.makeBinding(B10, {
  field: "b10",
  init: { contextToArgs: () => Tuple.make() }
})
const b11 = RD.makeBinding(B11, {
  field: "b11",
  init: { contextToArgs: () => Tuple.make() }
})
const b12 = RD.makeBinding(B12, {
  field: "b12",
  init: { contextToArgs: () => Tuple.make() }
})
const b13 = RD.makeBinding(B13, {
  field: "b13",
  init: { contextToArgs: () => Tuple.make() }
})
const b14 = RD.makeBinding(B14, {
  field: "b14",
  init: { contextToArgs: () => Tuple.make() }
})
const b15 = RD.makeBinding(B15, {
  field: "b15",
  init: { contextToArgs: () => Tuple.make() }
})
const b16 = RD.makeBinding(B16, {
  field: "b16",
  init: { contextToArgs: () => Tuple.make() }
})
const b17 = RD.makeBinding(B17, {
  field: "b17",
  init: { contextToArgs: () => Tuple.make() }
})
const b18 = RD.makeBinding(B18, {
  field: "b18",
  init: { contextToArgs: () => Tuple.make() }
})
const b19 = RD.makeBinding(B19, {
  field: "b19",
  init: { contextToArgs: () => Tuple.make() }
})
const b20 = RD.makeBinding(B20, {
  field: "b20",
  init: { contextToArgs: () => Tuple.make() }
})
const b21 = RD.makeBinding(B21, {
  field: "b21",
  init: { contextToArgs: () => Tuple.make() }
})
const b22 = RD.makeBinding(B22, {
  field: "b22",
  init: { contextToArgs: () => Tuple.make() }
})
const b23 = RD.makeBinding(B23, {
  field: "b23",
  init: { contextToArgs: () => Tuple.make() }
})
const b24 = RD.makeBinding(B24, {
  field: "b24",
  init: { contextToArgs: () => Tuple.make() }
})
const b25 = RD.makeBinding(B25, {
  field: "b25",
  init: { contextToArgs: () => Tuple.make() }
})
const b26 = RD.makeBinding(B26, {
  field: "b26",
  init: { contextToArgs: () => Tuple.make() }
})
const b27 = RD.makeBinding(B27, {
  field: "b27",
  init: { contextToArgs: () => Tuple.make() }
})
const b28 = RD.makeBinding(B28, {
  field: "b28",
  init: { contextToArgs: () => Tuple.make() }
})
const b29 = RD.makeBinding(B29, {
  field: "b29",
  init: { contextToArgs: () => Tuple.make() }
})
const b30 = RD.makeBinding(B30, {
  field: "b30",
  init: { contextToArgs: () => Tuple.make() }
})
const b31 = RD.makeBinding(B31, {
  field: "b31",
  init: { contextToArgs: () => Tuple.make() }
})
const b32 = RD.makeBinding(B32, {
  field: "b32",
  init: { contextToArgs: () => Tuple.make() }
})
const b33 = RD.makeBinding(B33, {
  field: "b33",
  init: { contextToArgs: () => Tuple.make() }
})
const b34 = RD.makeBinding(B34, {
  field: "b34",
  init: { contextToArgs: () => Tuple.make() }
})
const b35 = RD.makeBinding(B35, {
  field: "b35",
  init: { contextToArgs: () => Tuple.make() }
})
const b36 = RD.makeBinding(B36, {
  field: "b36",
  init: { contextToArgs: () => Tuple.make() }
})
const b37 = RD.makeBinding(B37, {
  field: "b37",
  init: { contextToArgs: () => Tuple.make() }
})
const b38 = RD.makeBinding(B38, {
  field: "b38",
  init: { contextToArgs: () => Tuple.make() }
})
const b39 = RD.makeBinding(B39, {
  field: "b39",
  init: { contextToArgs: () => Tuple.make() }
})
const b40 = RD.makeBinding(B40, {
  field: "b40",
  init: { contextToArgs: () => Tuple.make() }
})
const b41 = RD.makeBinding(B41, {
  field: "b41",
  init: { contextToArgs: () => Tuple.make() }
})
const b42 = RD.makeBinding(B42, {
  field: "b42",
  init: { contextToArgs: () => Tuple.make() }
})
const b43 = RD.makeBinding(B43, {
  field: "b43",
  init: { contextToArgs: () => Tuple.make() }
})
const b44 = RD.makeBinding(B44, {
  field: "b44",
  init: { contextToArgs: () => Tuple.make() }
})
const b45 = RD.makeBinding(B45, {
  field: "b45",
  init: { contextToArgs: () => Tuple.make() }
})
const b46 = RD.makeBinding(B46, {
  field: "b46",
  init: { contextToArgs: () => Tuple.make() }
})
const b47 = RD.makeBinding(B47, {
  field: "b47",
  init: { contextToArgs: () => Tuple.make() }
})
const b48 = RD.makeBinding(B48, {
  field: "b48",
  init: { contextToArgs: () => Tuple.make() }
})
const b49 = RD.makeBinding(B49, {
  field: "b49",
  init: { contextToArgs: () => Tuple.make() }
})
const p0 = b0.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B0, { Reported: () => RD.makeNoopStep() })
})
const p1 = b1.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B1, { Reported: () => RD.makeNoopStep() })
})
const p2 = b2.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B2, { Reported: () => RD.makeNoopStep() })
})
const p3 = b3.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B3, { Reported: () => RD.makeNoopStep() })
})
const p4 = b4.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B4, { Reported: () => RD.makeNoopStep() })
})
const p5 = b5.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B5, { Reported: () => RD.makeNoopStep() })
})
const p6 = b6.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B6, { Reported: () => RD.makeNoopStep() })
})
const p7 = b7.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B7, { Reported: () => RD.makeNoopStep() })
})
const p8 = b8.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B8, { Reported: () => RD.makeNoopStep() })
})
const p9 = b9.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B9, { Reported: () => RD.makeNoopStep() })
})
const p10 = b10.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B10, { Reported: () => RD.makeNoopStep() })
})
const p11 = b11.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B11, { Reported: () => RD.makeNoopStep() })
})
const p12 = b12.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B12, { Reported: () => RD.makeNoopStep() })
})
const p13 = b13.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B13, { Reported: () => RD.makeNoopStep() })
})
const p14 = b14.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B14, { Reported: () => RD.makeNoopStep() })
})
const p15 = b15.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B15, { Reported: () => RD.makeNoopStep() })
})
const p16 = b16.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B16, { Reported: () => RD.makeNoopStep() })
})
const p17 = b17.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B17, { Reported: () => RD.makeNoopStep() })
})
const p18 = b18.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B18, { Reported: () => RD.makeNoopStep() })
})
const p19 = b19.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B19, { Reported: () => RD.makeNoopStep() })
})
const p20 = b20.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B20, { Reported: () => RD.makeNoopStep() })
})
const p21 = b21.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B21, { Reported: () => RD.makeNoopStep() })
})
const p22 = b22.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B22, { Reported: () => RD.makeNoopStep() })
})
const p23 = b23.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B23, { Reported: () => RD.makeNoopStep() })
})
const p24 = b24.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B24, { Reported: () => RD.makeNoopStep() })
})
const p25 = b25.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B25, { Reported: () => RD.makeNoopStep() })
})
const p26 = b26.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B26, { Reported: () => RD.makeNoopStep() })
})
const p27 = b27.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B27, { Reported: () => RD.makeNoopStep() })
})
const p28 = b28.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B28, { Reported: () => RD.makeNoopStep() })
})
const p29 = b29.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B29, { Reported: () => RD.makeNoopStep() })
})
const p30 = b30.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B30, { Reported: () => RD.makeNoopStep() })
})
const p31 = b31.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B31, { Reported: () => RD.makeNoopStep() })
})
const p32 = b32.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B32, { Reported: () => RD.makeNoopStep() })
})
const p33 = b33.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B33, { Reported: () => RD.makeNoopStep() })
})
const p34 = b34.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B34, { Reported: () => RD.makeNoopStep() })
})
const p35 = b35.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B35, { Reported: () => RD.makeNoopStep() })
})
const p36 = b36.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B36, { Reported: () => RD.makeNoopStep() })
})
const p37 = b37.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B37, { Reported: () => RD.makeNoopStep() })
})
const p38 = b38.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B38, { Reported: () => RD.makeNoopStep() })
})
const p39 = b39.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B39, { Reported: () => RD.makeNoopStep() })
})
const p40 = b40.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B40, { Reported: () => RD.makeNoopStep() })
})
const p41 = b41.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B41, { Reported: () => RD.makeNoopStep() })
})
const p42 = b42.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B42, { Reported: () => RD.makeNoopStep() })
})
const p43 = b43.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B43, { Reported: () => RD.makeNoopStep() })
})
const p44 = b44.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B44, { Reported: () => RD.makeNoopStep() })
})
const p45 = b45.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B45, { Reported: () => RD.makeNoopStep() })
})
const p46 = b46.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B46, { Reported: () => RD.makeNoopStep() })
})
const p47 = b47.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B47, { Reported: () => RD.makeNoopStep() })
})
const p48 = b48.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B48, { Reported: () => RD.makeNoopStep() })
})
const p49 = b49.withOutMessagePolicy({
  fold: RD.makeOutMessageFold(B49, { Reported: () => RD.makeNoopStep() })
})
const Root = RD.makeComposition({
  bindings: [
    p0,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22,
    p23,
    p24,
    p25,
    p26,
    p27,
    p28,
    p29,
    p30,
    p31,
    p32,
    p33,
    p34,
    p35,
    p36,
    p37,
    p38,
    p39,
    p40,
    p41,
    p42,
    p43,
    p44,
    p45,
    p46,
    p47,
    p48,
    p49
  ]
})
type Placements = readonly [
  typeof p0,
  typeof p1,
  typeof p2,
  typeof p3,
  typeof p4,
  typeof p5,
  typeof p6,
  typeof p7,
  typeof p8,
  typeof p9,
  typeof p10,
  typeof p11,
  typeof p12,
  typeof p13,
  typeof p14,
  typeof p15,
  typeof p16,
  typeof p17,
  typeof p18,
  typeof p19,
  typeof p20,
  typeof p21,
  typeof p22,
  typeof p23,
  typeof p24,
  typeof p25,
  typeof p26,
  typeof p27,
  typeof p28,
  typeof p29,
  typeof p30,
  typeof p31,
  typeof p32,
  typeof p33,
  typeof p34,
  typeof p35,
  typeof p36,
  typeof p37,
  typeof p38,
  typeof p39,
  typeof p40,
  typeof p41,
  typeof p42,
  typeof p43,
  typeof p44,
  typeof p45,
  typeof p46,
  typeof p47,
  typeof p48,
  typeof p49
]
type Requirements =
  | Block.Qualify<"b0", Update.RequirementsOf<typeof B0.update>>
  | Block.Qualify<"b1", Update.RequirementsOf<typeof B1.update>>
  | Block.Qualify<"b2", Update.RequirementsOf<typeof B2.update>>
  | Block.Qualify<"b3", Update.RequirementsOf<typeof B3.update>>
  | Block.Qualify<"b4", Update.RequirementsOf<typeof B4.update>>
  | Block.Qualify<"b5", Update.RequirementsOf<typeof B5.update>>
  | Block.Qualify<"b6", Update.RequirementsOf<typeof B6.update>>
  | Block.Qualify<"b7", Update.RequirementsOf<typeof B7.update>>
  | Block.Qualify<"b8", Update.RequirementsOf<typeof B8.update>>
  | Block.Qualify<"b9", Update.RequirementsOf<typeof B9.update>>
  | Block.Qualify<"b10", Update.RequirementsOf<typeof B10.update>>
  | Block.Qualify<"b11", Update.RequirementsOf<typeof B11.update>>
  | Block.Qualify<"b12", Update.RequirementsOf<typeof B12.update>>
  | Block.Qualify<"b13", Update.RequirementsOf<typeof B13.update>>
  | Block.Qualify<"b14", Update.RequirementsOf<typeof B14.update>>
  | Block.Qualify<"b15", Update.RequirementsOf<typeof B15.update>>
  | Block.Qualify<"b16", Update.RequirementsOf<typeof B16.update>>
  | Block.Qualify<"b17", Update.RequirementsOf<typeof B17.update>>
  | Block.Qualify<"b18", Update.RequirementsOf<typeof B18.update>>
  | Block.Qualify<"b19", Update.RequirementsOf<typeof B19.update>>
  | Block.Qualify<"b20", Update.RequirementsOf<typeof B20.update>>
  | Block.Qualify<"b21", Update.RequirementsOf<typeof B21.update>>
  | Block.Qualify<"b22", Update.RequirementsOf<typeof B22.update>>
  | Block.Qualify<"b23", Update.RequirementsOf<typeof B23.update>>
  | Block.Qualify<"b24", Update.RequirementsOf<typeof B24.update>>
  | Block.Qualify<"b25", Update.RequirementsOf<typeof B25.update>>
  | Block.Qualify<"b26", Update.RequirementsOf<typeof B26.update>>
  | Block.Qualify<"b27", Update.RequirementsOf<typeof B27.update>>
  | Block.Qualify<"b28", Update.RequirementsOf<typeof B28.update>>
  | Block.Qualify<"b29", Update.RequirementsOf<typeof B29.update>>
  | Block.Qualify<"b30", Update.RequirementsOf<typeof B30.update>>
  | Block.Qualify<"b31", Update.RequirementsOf<typeof B31.update>>
  | Block.Qualify<"b32", Update.RequirementsOf<typeof B32.update>>
  | Block.Qualify<"b33", Update.RequirementsOf<typeof B33.update>>
  | Block.Qualify<"b34", Update.RequirementsOf<typeof B34.update>>
  | Block.Qualify<"b35", Update.RequirementsOf<typeof B35.update>>
  | Block.Qualify<"b36", Update.RequirementsOf<typeof B36.update>>
  | Block.Qualify<"b37", Update.RequirementsOf<typeof B37.update>>
  | Block.Qualify<"b38", Update.RequirementsOf<typeof B38.update>>
  | Block.Qualify<"b39", Update.RequirementsOf<typeof B39.update>>
  | Block.Qualify<"b40", Update.RequirementsOf<typeof B40.update>>
  | Block.Qualify<"b41", Update.RequirementsOf<typeof B41.update>>
  | Block.Qualify<"b42", Update.RequirementsOf<typeof B42.update>>
  | Block.Qualify<"b43", Update.RequirementsOf<typeof B43.update>>
  | Block.Qualify<"b44", Update.RequirementsOf<typeof B44.update>>
  | Block.Qualify<"b45", Update.RequirementsOf<typeof B45.update>>
  | Block.Qualify<"b46", Update.RequirementsOf<typeof B46.update>>
  | Block.Qualify<"b47", Update.RequirementsOf<typeof B47.update>>
  | Block.Qualify<"b48", Update.RequirementsOf<typeof B48.update>>
  | Block.Qualify<"b49", Update.RequirementsOf<typeof B49.update>>
type Result = Update.ReturnWithRegistrationEvidence<
  typeof RM.Type,
  typeof Root.Message.Type,
  never,
  Requirements,
  Block.RequirementsOfBindings<Placements>
>
type Step =
  | ReturnType<typeof b0.start>
  | ReturnType<typeof b1.start>
  | ReturnType<typeof b2.start>
  | ReturnType<typeof b3.start>
  | ReturnType<typeof b4.start>
  | ReturnType<typeof b5.start>
  | ReturnType<typeof b6.start>
  | ReturnType<typeof b7.start>
  | ReturnType<typeof b8.start>
  | ReturnType<typeof b9.start>
  | ReturnType<typeof b10.start>
  | ReturnType<typeof b11.start>
  | ReturnType<typeof b12.start>
  | ReturnType<typeof b13.start>
  | ReturnType<typeof b14.start>
  | ReturnType<typeof b15.start>
  | ReturnType<typeof b16.start>
  | ReturnType<typeof b17.start>
  | ReturnType<typeof b18.start>
  | ReturnType<typeof b19.start>
  | ReturnType<typeof b20.start>
  | ReturnType<typeof b21.start>
  | ReturnType<typeof b22.start>
  | ReturnType<typeof b23.start>
  | ReturnType<typeof b24.start>
  | ReturnType<typeof b25.start>
  | ReturnType<typeof b26.start>
  | ReturnType<typeof b27.start>
  | ReturnType<typeof b28.start>
  | ReturnType<typeof b29.start>
  | ReturnType<typeof b30.start>
  | ReturnType<typeof b31.start>
  | ReturnType<typeof b32.start>
  | ReturnType<typeof b33.start>
  | ReturnType<typeof b34.start>
  | ReturnType<typeof b35.start>
  | ReturnType<typeof b36.start>
  | ReturnType<typeof b37.start>
  | ReturnType<typeof b38.start>
  | ReturnType<typeof b39.start>
  | ReturnType<typeof b40.start>
  | ReturnType<typeof b41.start>
  | ReturnType<typeof b42.start>
  | ReturnType<typeof b43.start>
  | ReturnType<typeof b44.start>
  | ReturnType<typeof b45.start>
  | ReturnType<typeof b46.start>
  | ReturnType<typeof b47.start>
  | ReturnType<typeof b48.start>
  | ReturnType<typeof b49.start>
const init = Root.makeInit(() => ({ model: {} }))
const complete = (model: typeof RM.Type, steps: readonly Step[]): Result => {
  let current = model
  const commands: Update.Commands<
    typeof Root.Message.Type,
    Requirements
  >[number][] = []
  for (const step of steps) {
    const result = interpreter.update(current, RE.Action0(), step)
    current = result.model
    commands.push(...(result.commands ?? []))
  }
  return { model: current, commands }
}
const update = Root.makeUpdate({
  Action0: (model): Result => complete(model, [b0.start()]),
  Action1: (model): Result => complete(model, [b1.start()]),
  Action2: (model): Result => complete(model, [b2.start()]),
  Action3: (model): Result => complete(model, [b3.start()]),
  Action4: (model): Result => complete(model, [b4.start()]),
  Action5: (model): Result => complete(model, [b5.start()]),
  Action6: (model): Result => complete(model, [b6.start()]),
  Action7: (model): Result => complete(model, [b7.start()]),
  Action8: (model): Result => complete(model, [b8.start()]),
  Action9: (model): Result => complete(model, [b9.start()]),
  Action10: (model): Result => complete(model, [b10.start()]),
  Action11: (model): Result => complete(model, [b11.start()]),
  Action12: (model): Result => complete(model, [b12.start()]),
  Action13: (model): Result => complete(model, [b13.start()]),
  Action14: (model): Result => complete(model, [b14.start()]),
  Action15: (model): Result => complete(model, [b15.start()]),
  Action16: (model): Result => complete(model, [b16.start()]),
  Action17: (model): Result => complete(model, [b17.start()]),
  Action18: (model): Result => complete(model, [b18.start()]),
  Action19: (model): Result => complete(model, [b19.start()]),
  Action20: (model): Result => complete(model, [b20.start()]),
  Action21: (model): Result => complete(model, [b21.start()]),
  Action22: (model): Result => complete(model, [b22.start()]),
  Action23: (model): Result => complete(model, [b23.start()]),
  Action24: (model): Result => complete(model, [b24.start()]),
  Action25: (model): Result => complete(model, [b25.start()]),
  Action26: (model): Result => complete(model, [b26.start()]),
  Action27: (model): Result => complete(model, [b27.start()]),
  Action28: (model): Result => complete(model, [b28.start()]),
  Action29: (model): Result => complete(model, [b29.start()]),
  Action30: (model): Result => complete(model, [b30.start()]),
  Action31: (model): Result => complete(model, [b31.start()]),
  Action32: (model): Result => complete(model, [b32.start()]),
  Action33: (model): Result => complete(model, [b33.start()]),
  Action34: (model): Result => complete(model, [b34.start()]),
  Action35: (model): Result => complete(model, [b35.start()]),
  Action36: (model): Result => complete(model, [b36.start()]),
  Action37: (model): Result => complete(model, [b37.start()]),
  Action38: (model): Result => complete(model, [b38.start()]),
  Action39: (model): Result => complete(model, [b39.start()]),
  Action40: (model): Result => complete(model, [b40.start()]),
  Action41: (model): Result => complete(model, [b41.start()]),
  Action42: (model): Result => complete(model, [b42.start()]),
  Action43: (model): Result => complete(model, [b43.start()]),
  Action44: (model): Result => complete(model, [b44.start()]),
  Action45: (model): Result => complete(model, [b45.start()]),
  Action46: (model): Result => complete(model, [b46.start()]),
  Action47: (model): Result => complete(model, [b47.start()]),
  Action48: (model): Result => complete(model, [b48.start()]),
  Action49: (model): Result => complete(model, [b49.start()]),
  Action50: (model): Result => complete(model, [b0.start()]),
  Action51: (model): Result => complete(model, [b1.start()]),
  Action52: (model): Result => complete(model, [b2.start()]),
  Action53: (model): Result => complete(model, [b3.start()]),
  Action54: (model): Result => complete(model, [b4.start()]),
  Action55: (model): Result => complete(model, [b5.start()]),
  Action56: (model): Result => complete(model, [b6.start()]),
  Action57: (model): Result => complete(model, [b7.start()]),
  Action58: (model): Result => complete(model, [b8.start()]),
  Action59: (model): Result => complete(model, [b9.start()]),
  Action60: (model): Result => complete(model, [b10.start()]),
  Action61: (model): Result => complete(model, [b11.start()]),
  Action62: (model): Result => complete(model, [b12.start()]),
  Action63: (model): Result => complete(model, [b13.start()]),
  Action64: (model): Result => complete(model, [b14.start()]),
  Action65: (model): Result => complete(model, [b15.start()]),
  Action66: (model): Result => complete(model, [b16.start()]),
  Action67: (model): Result => complete(model, [b17.start()]),
  Action68: (model): Result => complete(model, [b18.start()]),
  Action69: (model): Result => complete(model, [b19.start()]),
  Action70: (model): Result => complete(model, [b20.start()]),
  Action71: (model): Result => complete(model, [b21.start()]),
  Action72: (model): Result => complete(model, [b22.start()]),
  Action73: (model): Result => complete(model, [b23.start()]),
  Action74: (model): Result => complete(model, [b24.start()]),
  Action75: (model): Result => complete(model, [b25.start()]),
  Action76: (model): Result => complete(model, [b26.start()]),
  Action77: (model): Result => complete(model, [b27.start()]),
  Action78: (model): Result => complete(model, [b28.start()]),
  Action79: (model): Result => complete(model, [b29.start()])
})
const completeStep = Root.makeUpdate.withContext((step: Step) => ({
  Action0: (model) => Update.combineSteps([step])(model),
  Action1: (model) => ({ model }),
  Action2: (model) => ({ model }),
  Action3: (model) => ({ model }),
  Action4: (model) => ({ model }),
  Action5: (model) => ({ model }),
  Action6: (model) => ({ model }),
  Action7: (model) => ({ model }),
  Action8: (model) => ({ model }),
  Action9: (model) => ({ model }),
  Action10: (model) => ({ model }),
  Action11: (model) => ({ model }),
  Action12: (model) => ({ model }),
  Action13: (model) => ({ model }),
  Action14: (model) => ({ model }),
  Action15: (model) => ({ model }),
  Action16: (model) => ({ model }),
  Action17: (model) => ({ model }),
  Action18: (model) => ({ model }),
  Action19: (model) => ({ model }),
  Action20: (model) => ({ model }),
  Action21: (model) => ({ model }),
  Action22: (model) => ({ model }),
  Action23: (model) => ({ model }),
  Action24: (model) => ({ model }),
  Action25: (model) => ({ model }),
  Action26: (model) => ({ model }),
  Action27: (model) => ({ model }),
  Action28: (model) => ({ model }),
  Action29: (model) => ({ model }),
  Action30: (model) => ({ model }),
  Action31: (model) => ({ model }),
  Action32: (model) => ({ model }),
  Action33: (model) => ({ model }),
  Action34: (model) => ({ model }),
  Action35: (model) => ({ model }),
  Action36: (model) => ({ model }),
  Action37: (model) => ({ model }),
  Action38: (model) => ({ model }),
  Action39: (model) => ({ model }),
  Action40: (model) => ({ model }),
  Action41: (model) => ({ model }),
  Action42: (model) => ({ model }),
  Action43: (model) => ({ model }),
  Action44: (model) => ({ model }),
  Action45: (model) => ({ model }),
  Action46: (model) => ({ model }),
  Action47: (model) => ({ model }),
  Action48: (model) => ({ model }),
  Action49: (model) => ({ model }),
  Action50: (model) => ({ model }),
  Action51: (model) => ({ model }),
  Action52: (model) => ({ model }),
  Action53: (model) => ({ model }),
  Action54: (model) => ({ model }),
  Action55: (model) => ({ model }),
  Action56: (model) => ({ model }),
  Action57: (model) => ({ model }),
  Action58: (model) => ({ model }),
  Action59: (model) => ({ model }),
  Action60: (model) => ({ model }),
  Action61: (model) => ({ model }),
  Action62: (model) => ({ model }),
  Action63: (model) => ({ model }),
  Action64: (model) => ({ model }),
  Action65: (model) => ({ model }),
  Action66: (model) => ({ model }),
  Action67: (model) => ({ model }),
  Action68: (model) => ({ model }),
  Action69: (model) => ({ model }),
  Action70: (model) => ({ model }),
  Action71: (model) => ({ model }),
  Action72: (model) => ({ model }),
  Action73: (model) => ({ model }),
  Action74: (model) => ({ model }),
  Action75: (model) => ({ model }),
  Action76: (model) => ({ model }),
  Action77: (model) => ({ model }),
  Action78: (model) => ({ model }),
  Action79: (model) => ({ model })
}))
const prepRoot = () => Root.prepareBlock({ init, update: completeStep })
const interpreter: Block.FromAssemblyWithoutViewOrOutMessage<
  typeof RM,
  typeof prepRoot
> = Block.assemble(prepRoot)
export { init, RE as Message, update }
