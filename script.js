function generateRandomColor() {
  return `rgb(${Math.random() * 240}, ${Math.random() * 240}, ${Math.random() * 240})`;
}

const colors = document.getElementsByClassName('color');
for (let index = 1; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = generateRandomColor();
}

window.onload = function() {

}