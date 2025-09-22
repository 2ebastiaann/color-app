const button = document.querySelector(".changeColor")
const colorName = document.querySelector(".colorName")

function randomColor() {
    const R = Math.floor(Math.random()*256)
    const G = Math.floor(Math.random()*255)
    const B = Math.floor(Math.random()*255)
    return `rgb(${R}, ${G}, ${B})`;
};


button.addEventListener("click", () =>{
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    colorName.textContent = `color: ${newColor}`
});