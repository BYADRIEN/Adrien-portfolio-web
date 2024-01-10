document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        pagination: false,
        arrowPath: false,
        arrows: false,
        type: 'loop',
        autoplay: true,
        start: true,
        perPage: 5,
        breakpoints: {
            600: {
                perPage: 2,
            },
        }
    });
    splide.mount();
});
