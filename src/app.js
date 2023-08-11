const squares = document.querySelectorAll('.el');
let isFrozen = false;

function animateSquares(rotation) {
  squares.forEach((square, index) => {
    square.style.transform = `rotate(${rotation * (index + 1)}deg)`;
  });
}

let progress = 0;

document.addEventListener('wheel', () => {
  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const middleViewport = viewportHeight / 2;

  let rect = squares[0].getBoundingClientRect();
  const viewportHeight_ = window.innerHeight;
  const centerY = rect.top + rect.height / 2;

  const isCenterY = Math.abs(viewportHeight_ / 2 - centerY) < 10;

  console.log(isCenterY);

  if (isCenterY) {
    isFrozen = true;

    progress = (scrollY - middleViewport) / (viewportHeight / 2);

    progress = Math.min(1, Math.max(0, progress));
  } else {
    isFrozen = false;
    progress = 0;
  }

  if (isFrozen) {
    // document.body.style.overflow = 'hidden';
    console.log('frozent', true);
  } else {
    // document.body.style.overflow = 'auto';
    console.log('frozent', false);
  }

  animateSquares(progress * 360);
});