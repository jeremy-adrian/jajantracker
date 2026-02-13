const carousels = [
    {id: 'carousel-one', className: 'carousel-one'},
    {id: 'carousel-two', className: 'carousel-two'},
    // {id: 'carousel-three', className: 'carousel-three'}
];

function setupCarousel({id, className}) {
    const carousel = document.getElementById(id);

    const items = document.querySelectorAll(`.${className}`);
    let index = 0;

    function nextSlide() {
        index++;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${index * 100}%)`;

        if (index === items.length - 1) {
            setTimeout(() => {
                index = 0;
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(-${index * 100}%)`;
            }, 500);
        }
    }

    setInterval(nextSlide, (Math.floor(Math.random() * 3) + 5) * 1000);
}

carousels.forEach(setupCarousel);