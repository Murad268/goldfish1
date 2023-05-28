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

 $('.try__carusel.try').slick({
   infinite: true,
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   prevArrow: $('.try__carusel__left'),
   nextArrow: $('.try__carusel__right'),
   responsive: [
      {
         breakpoint: 1240,
         settings: {
            arrows: false
          }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 3,
          }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 2,
          }
      },
      {
         breakpoint: 500,
         settings: {
            slidesToShow: 1,
          }
      }
   ]
 });

 $('.special__try .try__carusel').slick({
   infinite: true,
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   prevArrow: $('.special__try__left'),
   nextArrow: $('.special__try__right'),
   responsive: [
      {
         breakpoint: 1240,
         settings: {
            arrows: false
          }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 3,
          }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 2,
          }
      },
      {
         breakpoint: 500,
         settings: {
            slidesToShow: 1,
          }
      }
   ]
 });