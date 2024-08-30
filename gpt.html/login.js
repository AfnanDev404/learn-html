document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        scrollDown();
    } else {
        scrollUp();
    }
});

function scrollDown() {
    const container = document.querySelector('.video-gallery');
    container.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

function scrollUp() {
    const container = document.querySelector('.video-gallery');
    container.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
    });
}
