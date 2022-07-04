function generateRandomColor() {
  return `rgb(${Math.random() * 240}, ${Math.random() * 240}, ${Math.random() * 240})`;
}
// aplica cores aleatorias
const colors = document.getElementsByClassName('color');
for (let index = 1; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = generateRandomColor();
}
// gera a quantidade padrão de pixels
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

function changeSelectedElement(event) {
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', changeSelectedElement);
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
  const aux = event;
  aux.target.style.backgroundColor = catchColor();
}

const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', applyColor);
}
function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
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
  const inputNumber = document.getElementById('board-size');
  if (number < 5) {
    inputNumber.value = 5;
    return 5;
  }
  if (number > 50) {
    inputNumber.value = 50;
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
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', applyColor);
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
