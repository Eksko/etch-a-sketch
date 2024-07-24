const container = document.querySelector(".container")
const button = document.querySelector(".button")

generateGrid()

container.addEventListener("mouseover", e => {
  const pixel = e.target
  pixel.style.backgroundColor = "brown"
})

button.addEventListener("click", () => {
  const input = prompt("1-100")
  container.innerHTML = ""
  generateGrid(input)
})

function generateGrid(n = 16) {
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div")
    div.setAttribute("class", "pixel")
    div.style.width = `calc(100% / ${n})`
    div.style.height = `calc(100% / ${n})`
    container.appendChild(div)
  }
}

// -- vim: ts=2 sts=2 sw=2 et
