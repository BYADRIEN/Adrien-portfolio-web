document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        pagination: false,
        arrowPath: false,
        arrows: false,
        type: 'loop',
        autoplay: true,
        start: true,
        perPage: 5,
        width: '100%',
        breakpoints: {
            500: {
                perPage: 2,
            },
            400: {
                perPage: 1,
            },
        }
    });
    splide.mount();
});
