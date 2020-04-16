
function initSlider() {
    $(document).ready(function(){
        $('.hero-content-slider').slick({
            arrows: true,
            slidesToShow: 2,
            prevArrow: document.querySelector('.hero-content-slider-buttons-prev'),
            nextArrow: document.querySelector('.hero-content-slider-buttons-next'),
            infinite: false
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
    });
}

initSlider()

