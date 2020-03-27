$(function(){

    $('.header__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider__arrows slider__arrows--right" src="img/arrows-right.svg" alt="">',
         asNavFor: '.slider__dotshead'
    });

    $('.slider__dotshead').slick({
         slidesToShow: 4,
         slidesToScroll: 4,
         asNavFor: '.header__slider',
         responsive: [
        {
            breakpoint: 961,
                settings: "unslick"
                },
        ]

    });
    $ ('.surf__slider').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        variableWidth: false,
        focusOnSelect: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider__arrows slider__arrows--right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider__map',

        responsive: [
            {
            breakpoint: 1210,
                settings: {
                slidesToShow: 3,
                },
            },
            {
            breakpoint: 901,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                },
            },
            {
            breakpoint: 720,
                settings: {
                slidesToShow: 1,
                centerMode: true
                }
            },
            {
            breakpoint: 426,
                settings: {
                slidesToShow: 1,
                centerMode: false
                }
            }
        ]
    });;

    $ ('.slider__map').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows:false,
        asNavFor: '.surf__slider',
        focusOnSelect: true,
        responsive: [
            {
            breakpoint: 1103,
                settings: {
                slidesToShow: 3,
                }

            }
        ]

    });

    $ ('.holder__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider__arrows slider__arrows--right" src="img/arrows-right.svg" alt="">',
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.quantity-button').on('click', function(){
        let summ= $('.nights' ).val() * $('.summ').data('nights') + ($('.guest').val() - 1) * $('.summ').data('guest');
        $('.summ').html('$' + summ)
    });

    $('.surfboard-box--circle').on('click', function(){
        $(this).toggleClass('active')
    });
    $('.menu__btn').on('click', function(){
        $('.menu').toggleClass('active');
    });

});
