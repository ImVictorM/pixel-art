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
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
}

generatePixels();

const blackColor = document.getElementsByClassName('color')[0];
blackColor.classList.add('selected');

function resetSelectedColor() {
  let colors = document.getElementsByClassName('color');
  for (let eachColor of colors) {
    eachColor.classList.remove('selected')
  }
}

for (let eachColor of colors) {
  eachColor.addEventListener('click', function(event) {
    resetSelectedColor();
    event.target.classList.add('selected');
  });
}

function catchColor() {
  const selectedElement = document.getElementsByClassName('selected')[0];
  const cssObj = window.getComputedStyle(selectedElement, null);
  let bgColor = cssObj.getPropertyValue('background-color');
  return bgColor;
}

  


const pixels = document.getElementsByClassName('pixel');
for (let eachPixel of pixels) {
  eachPixel.addEventListener('click', function(event) {
    event.target.style.backgroundColor = catchColor();
  });
}