import { Schema, Tuple } from "effect"
import { Block } from "foldkit"
import { defineMessageUnion } from "foldkit/message"
import * as Update from "foldkit/update"

// Each counter owns its own state, messages, update, and public operation.
const CounterModel = Schema.Struct({ count: Schema.Number })
const CounterMessage = defineMessageUnion({ Increment: {} })
const CounterDefinition = Block.makeDefinition("Counter", {
  Model: CounterModel,
  Message: CounterMessage
})
const CounterComposition = CounterDefinition.makeComposition()

const prepareCounter = () =>
  CounterComposition.prepareBlock({
    init: CounterComposition.makeInit(() => ({ model: { count: 0 } })),
    update: CounterComposition.makeUpdate({
      Increment: (model) => ({ model: { count: model.count + 1 } })
    }),
    operations: { increment: () => Tuple.make(CounterMessage.Increment()) }
  })

const Counter: Block.FromAssemblyWithoutViewOrOutMessage<
  typeof CounterModel,
  typeof prepareCounter
> = Block.assemble(prepareCounter)

// The board stores two counter instances. Each binding connects one child.
const BoardModel = Schema.Struct({
  today: Counter.Model,
  backlog: Counter.Model
})
const BoardMessage = defineMessageUnion({ Today: {}, Backlog: {}, Both: {} })
const BoardDefinition = Block.makeDefinition("Board", {
  Model: BoardModel,
  Message: BoardMessage
})
const today = BoardDefinition.makeBinding(Counter, {
  field: "today",
  init: { contextToArgs: () => Tuple.make() }
})
const backlog = BoardDefinition.makeBinding(Counter, {
  field: "backlog",
  init: { contextToArgs: () => Tuple.make() }
})
const Board = BoardDefinition.makeComposition({ bindings: [today, backlog] })

export const init = Board.makeInit(() => ({ model: {} }))
export const update = Board.makeUpdate({
  Today: (model) => today.increment()(model),
  Backlog: (model) => backlog.increment()(model),
  Both: (model) =>
    Update.combineSteps([today.increment(), backlog.increment()])(model)
})
export const Message = Board.Message
