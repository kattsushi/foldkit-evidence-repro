import { init, Message, update } from "./large-board"

const initial = init()
const result = update(initial.model, Message.Action0())
const formCount = Object.keys(result.model).length
const commandCount = result.commands?.length ?? 0
if (formCount !== 50 || commandCount !== 4) {
  throw new Error(
    `Unexpected result: ${formCount} forms and ${commandCount} commands`
  )
}
console.log(
  `Initialized ${formCount} forms; Action0 returned ${commandCount} Commands.`
)
