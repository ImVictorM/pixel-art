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
// pega a cor do elemento selecionado
function catchColor() {
  const selectedElement = document.getElementsByClassName('selected')[0];
  const cssObj = window.getComputedStyle(selectedElement, null);
  let bgColor = cssObj.getPropertyValue('background-color');
  return bgColor;
}
// aplica cor do elemento selecionado no pixel
const pixels = document.getElementsByClassName('pixel');
for (let eachPixel of pixels) {
  eachPixel.addEventListener('click', function(event) {
    event.target.style.backgroundColor = catchColor();
  });
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function() {
  for (let eachPixel of pixels) {
    eachPixel.style.backgroundColor = 'white';
  }
});

function resetPixelBoard() {
  console.log(pixels.length - 1)
  for(let index = pixels.length - 1; index >= 0; index -= 1 ) {
    pixels[index].remove();
  }
}

function resizeTable(number) {
  if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  }
  let newBoardSize = number * number;
  resetPixelBoard();
  const pixelBoard = document.getElementById('pixel-board');
  const eachPixelSize = 42;
  let newWidth = number * eachPixelSize;
  let newHeight = number * eachPixelSize;
  pixelBoard.style.width = newWidth + 'px';
  pixelBoard.style.height = newHeight + 'px';
  for (let numberOfPixels = 1; numberOfPixels <= newBoardSize; numberOfPixels += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
}

const vqvButton = document.getElementById('generate-board');
vqvButton.addEventListener('click', function() {
  const inputValue = document.getElementById('board-size').value;
  if (inputValue === '') {
    window.alert('Board inválido!');
  } else {
    resizeTable(inputValue);
  }
});