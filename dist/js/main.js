$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider__arrows slider__arrows--right" src="img/arrows-right.svg" alt="">',
         asNavFor: '.slider__dots'
    });

    $('.slider__dots').slick({
         slidesToShow: 4,
         slidesToScroll: 4,
         asNavFor: '.header__slider'
    });

});
