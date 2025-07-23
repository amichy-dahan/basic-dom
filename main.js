addEventListener("DOMContentLoaded" ,() =>{

console.log(document)
document.getElementById("playing-field").style.backgroundColor = "blue"
document.getElementById("ball").style.background = "yellow"

const ball = document.getElementById("ball")

document.getElementById("right").addEventListener("click", () => {
  let left = parseInt(ball.style.left) || 0
  left += 15
  ball.style.left = left + "px"
})
document.getElementById("left").addEventListener("click", () => {
  let left = parseInt(ball.style.left) || 0
  left -= 15
  ball.style.left = left + "px"
})

document.getElementById("up").addEventListener("click", () => {
  let left = parseInt(ball.style.top) || 0
  left -= 15
  ball.style.top = left + "px"
})

document.getElementById("down").addEventListener("click", () => {
  let left = parseInt(ball.style.top) || 0
  left += 15
  ball.style.top = left + "px"
})





const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by the creator!!"
subHeader.style.color = "#00ff6aff"
subHeader.classList.add("sub")
subHeader.style.fontFamily = "Helvetica"
document.body.appendChild(subHeader)





})


