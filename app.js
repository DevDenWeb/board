const board = document.querySelector('#board');
const colors = ['#3714B0', '#35C0CD', '#00B25C', '#B2F63D', '#FFDA00', '#F53D68', '#FFB100', '#A101A6'];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);
  square.addEventListener('touchmove', setColor);
  square.addEventListener('touchend', removeColor);

  board.append(square);
}

function setColor(event) {
  if (event.type === 'touchmove') {
    event.preventDefault();
  }
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}