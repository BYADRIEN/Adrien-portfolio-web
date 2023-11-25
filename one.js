
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        pagination: false,
        arrowPath: false,
        arrows: false,
        type: 'loop',
        autoplay: true,
        start: true,
        perPage: 5,
        width: '100%',
    } );
    splide.mount();
} );

