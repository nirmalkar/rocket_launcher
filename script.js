const body = document.querySelector("body")
const img = document.querySelector("img")
const rocket = document.querySelector(".rocket")

const launchButton = document.querySelector(".launch-btn")
launchButton.addEventListener("click", () => {
  rocket.style.transition = "2s ease-in"
  rocket.style.top = "-20%"
})