function generateRandomColor() {
  return `rgb(${Math.random() * 240}, ${Math.random() * 240}, ${Math.random() * 240})`;
}

const colors = document.getElementsByClassName('color');
for (let index = 1; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = generateRandomColor();
}
function generatePixels() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let numberOfPixels = 1; numberOfPixels <= 25; numberOfPixels += 1) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
}

generatePixels();
window.onload = function() {

}