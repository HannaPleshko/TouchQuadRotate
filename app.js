const squares = document.querySelectorAll('.el');
let isAnimating = false;
let isInCenter = false;

// Функция для анимации вращения квадратов
function animateSquares(rotation) {
    squares.forEach((square, index) => {

        square.style.transform = `
        rotate(${rotation * (index + 1)}deg)
        `;

    });

}



let progress = 0;

document.addEventListener('scroll', () => {
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const middleViewport = viewportHeight / 2;

    if (scrollY >= middleViewport && scrollY < viewportHeight) {
        // squares.style = 'position: fixed'
        progress = (scrollY - middleViewport) / (viewportHeight / 2);

        progress = Math.min(1, Math.max(0, progress));

    } else {

        progress = 0;

    }

    animateSquares(progress * 360);

});
