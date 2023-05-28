$('.header__carusel').slick({
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   centerMode: true,
   variableWidth: true,
   arrows: false,
   responsive: [
      {
         breakpoint: 991,
         settings: {
            centerMode: false,
            variableWidth: false,
          }
      }
   ]
 });