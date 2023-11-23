
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        pagination: false,
        arrowPath: false,
        type: 'loop',
        autoplay: true,
        start: true,
        perPage: 3,
        width: '100%'
    } );
    splide.mount();
} );