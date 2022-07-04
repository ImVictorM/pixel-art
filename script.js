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

function teste(event) {
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  event.target.classList.add('selected');
}

for (const eachColor of colors) {
  eachColor.addEventListener('click', teste);
}

// pega a cor do elemento selecionado
function catchColor() {
  const selectedElement = document.getElementsByClassName('selected')[0];
  const cssObj = window.getComputedStyle(selectedElement, null);
  const bgColor = cssObj.getPropertyValue('background-color');
  return bgColor;
}
// aplica cor do elemento selecionado no pixel

function applyColor(event) {
  event.target.style.backgroundColor = catchColor();
}
const pixels = document.getElementsByClassName('pixel');
for (const eachPixel of pixels) {
  eachPixel.addEventListener('click', applyColor);
}
function clearBoard() {
  for (const eachPixel of pixels) {
    eachPixel.style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

function resetPixelBoard() {
  for (let index = pixels.length - 1; index >= 0; index -= 1) {
    pixels[index].remove();
  }
}
function numberValidation(number) {
  if (number < 5) {
    return 5;
  }
  if (number > 50) {
    return 50;
  }
  return number;
}

function resizeTable(number) {
  const value = numberValidation(number);
  const newBoardSize = value * value;
  resetPixelBoard();
  const pixelBoard = document.getElementById('pixel-board');
  const eachPixelSize = 42;
  const newSize = value * eachPixelSize;
  pixelBoard.style.width = `${newSize}px`;
  pixelBoard.style.height = `${newSize}px`;
  for (let numberOfPixels = 1; numberOfPixels <= newBoardSize; numberOfPixels += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
}
function resizeHandler() {
  const inputValue = document.getElementById('board-size').value;
  if (inputValue === '') {
    window.alert('Board inválido!');
  } else {
    resizeTable(inputValue);
  }
}
const vqvButton = document.getElementById('generate-board');
vqvButton.addEventListener('click', resizeHandler);
