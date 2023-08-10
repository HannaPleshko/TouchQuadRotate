const squares = document.querySelectorAll('.el');
let isAnimating = false;
let isInCenter = false;

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

    // squares[0].clientHeight // высота квадрата

    if (scrollY >= middleViewport + squares[0].clientHeight && scrollY < viewportHeight) {
        progress = (scrollY - middleViewport) / (viewportHeight / 2);

        progress = Math.min(1, Math.max(0, progress));
    } else progress = 0;
    
    animateSquares(progress * 360);
});
