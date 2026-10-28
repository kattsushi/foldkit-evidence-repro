import { init, Message, update } from "./board"

let model = init().model
const todayValue = document.querySelector("#today-count")
const backlogValue = document.querySelector("#backlog-count")
const todayButton = document.querySelector("#today-button")
const backlogButton = document.querySelector("#backlog-button")
const bothButton = document.querySelector("#both-button")
if (
  !todayValue ||
  !backlogValue ||
  !todayButton ||
  !backlogButton ||
  !bothButton
) {
  throw new Error("The example page is missing its required controls.")
}
function render() {
  if (todayValue && backlogValue) {
    todayValue.textContent = String(model.today.count)
    backlogValue.textContent = String(model.backlog.count)
  }
}
todayButton.addEventListener("click", () => {
  model = update(model, Message.Today()).model
  render()
})
backlogButton.addEventListener("click", () => {
  model = update(model, Message.Backlog()).model
  render()
})
bothButton.addEventListener("click", () => {
  model = update(model, Message.Both()).model
  render()
})
render()
