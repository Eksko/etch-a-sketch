const container = document.querySelector(".container")

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div")
  div.setAttribute("class", "pixel")
  container.appendChild(div)
}

container.addEventListener("mouseover", e => {
  const pixel = e.target
  pixel.style.backgroundColor = "brown"
})

// -- vim: ts=2 sts=2 sw=2 et
