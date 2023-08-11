const squares = document.querySelectorAll('.el');
let isFrozen = false;
let progress = 0;

function animateSquares(rotation) {
  squares.forEach((square, index) => {
    square.style.transform = `rotate(${rotation * (index + 1)}deg)`;
  });
}

function mainAction() {
  const viewportHeight = window.innerHeight;
  const middleViewport = viewportHeight / 2;

  let rect = squares[0].getBoundingClientRect();
  const viewportHeight_ = window.innerHeight;
  const centerY = rect.top + rect.height / 2;

  const isCenterY = Math.abs(viewportHeight_ / 2 - centerY) < 10;

  console.log(isCenterY);

  if (isCenterY) {
    isFrozen = true;

    progress = (centerY - middleViewport) / (viewportHeight / 2);

    progress = Math.min(1, Math.max(0, progress));
  } else {
    isFrozen = false;
    progress = 0;
  }

  // if (isFrozen) {
  //   console.log('frozent', true);
  // } else {
  //   console.log('frozent', false);
  // }

  animateSquares(progress * 360);
}

let startY;
let startScrollTop;

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);
document.addEventListener('wheel', handleWheel);

const body = document.querySelector('.els');

function handleTouchStart(e) {
  startY = e.touches[0].pageY;
  startScrollTop = body.scrollTop;
}

function handleTouchMove(e) {
  const deltaY = e.touches[0].pageY - startY;
  body.style.top = `${Number.parseInt(body.style.top || '0') + deltaY}px`;
  startY = e.touches[0].pageY;

  mainAction();
}

function handleWheel(e) {
  body.style.top = `${Number.parseInt(body.style.top || '0') - e.deltaY}px`;
  startY = e.deltaY;

  mainAction();
}

document.addEventListener('touchstart', event => {
  console.log('Вы приложили палец к элементу');
});

document.addEventListener('touchmove', event => {
  console.log('По мне ведут пальцем');
});

document.addEventListener('touchend', event => {
  console.log('Прикосновение закончено');
});
