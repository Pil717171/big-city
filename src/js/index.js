
function initMainSlider() {
    $(document).ready(function(){
        //hero block slider
        $('.hero-content-slider').slick({
            arrows: true,
            slidesToShow: 2,
            prevArrow: document.querySelector('.hero-content-slider-buttons-prev'),
            nextArrow: document.querySelector('.hero-content-slider-buttons-next'),
            infinite: false,
            }
        );
        $('.hero-content-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
            console.log(currentSlide);
            console.log(slick.slideCount)
            if(currentSlide !== 0) {
                document.querySelector('.hero-content-slider-buttons-prev').classList.add('active')
            } else {
                document.querySelector('.hero-content-slider-buttons-prev').classList.remove('active')
            }
            if(currentSlide === slick.slideCount - 2) {
                document.querySelector('.hero-content-slider-buttons-next').classList.remove('active')
            } else {
                document.querySelector('.hero-content-slider-buttons-next').classList.add('active')
            }
        });
        //offer block slider
        $('.offer-slider').slick({
            arrows: false,
            slidesToShow: 1,
            speed: 5000,
            autoplay: true,
            fade: true,
            }
        );
    });
}

function initExampleSlider () {
    $('.example-slider').slick({
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        centerMode: true,
        prevArrow: document.querySelector('.example-slider-buttons-prev'),
        nextArrow: document.querySelector('.example-slider-buttons-next'),
        }
    );
    $('.example-slider').slick('slickGoTo', 2,  true);

}



initExampleSlider()
initMainSlider()

