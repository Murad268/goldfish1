// $('.header__carusel').slick({
//    dots: false,
//    infinite: true,
//    speed: 300,
//    slidesToShow: 1,
//    centerMode: true,
//    variableWidth: true,
//    arrows: false,
//    responsive: [
//       {
//          breakpoint: 991,
//          settings: {
//             centerMode: false,
//             variableWidth: false,
//           }
//       }
//    ]
//  });

//  $('.try__carusel.try').slick({
//    infinite: true,
//    dots: false,
//    infinite: true,
//    speed: 300,
//    slidesToShow: 4,
//    prevArrow: $('.try__carusel__left'),
//    nextArrow: $('.try__carusel__right'),
//    responsive: [
//       {
//          breakpoint: 1240,
//          settings: {
//             arrows: false
//           }
//       },
//       {
//          breakpoint: 991,
//          settings: {
//             slidesToShow: 3,
//           }
//       },
//       {
//          breakpoint: 768,
//          settings: {
//             slidesToShow: 2,
//           }
//       },
//       {
//          breakpoint: 500,
//          settings: {
//             slidesToShow: 1,
//           }
//       }
//    ]
//  });

//  $('.special__try .try__carusel').slick({
//    infinite: true,
//    dots: false,
//    infinite: true,
//    speed: 300,
//    slidesToShow: 4,
//    prevArrow: $('.special__try__left'),
//    nextArrow: $('.special__try__right'),
//    responsive: [
//       {
//          breakpoint: 1240,
//          settings: {
//             arrows: false
//           }
//       },
//       {
//          breakpoint: 991,
//          settings: {
//             slidesToShow: 3,
//           }
//       },
//       {
//          breakpoint: 768,
//          settings: {
//             slidesToShow: 2,
//           }
//       },
//       {
//          breakpoint: 500,
//          settings: {
//             slidesToShow: 1,
//           }
//       }
//    ]
//  });


//  if(window.innerWidth < 600) {
//    $('.events__wrapper').slick({
//       infinite: true,
//       dots: false,
//       infinite: true,
//       speed: 300,
//       slidesToShow: 1,
//       arrows: false,
//       centerMode: false,
//       variableWidth: true,
//       // responsive: [
//       //    {
//       //       breakpoint: 1240,
//       //       settings: {
//       //          arrows: false
//       //        }
//       //    },
//       //    {
//       //       breakpoint: 991,
//       //       settings: {
//       //          slidesToShow: 3,
//       //        }
//       //    },
//       //    {
//       //       breakpoint: 768,
//       //       settings: {
//       //          slidesToShow: 2,
//       //        }
//       //    },
//       //    {
//       //       breakpoint: 500,
//       //       settings: {
//       //          slidesToShow: 1,
//       //        }
//       //    }
//       // ]
//     });
//  }




//    $('.moreInfo__wrapper').slick({
//       infinite: true,
//       dots: false,
//       infinite: true,
//       speed: 300,
//       slidesToShow: 3,
//       arrows: false,
     
//       responsive: [
//          {
//             breakpoint: 930,
//             settings: {
//                slidesToShow: 2
//              }
//          },
//          {
//             breakpoint: 520,
//             settings: {
//                slidesToShow: 1
//              }
//          }
//       ]
//     });
 

const triggers = document.querySelectorAll('.filter__trigger')
const boxes = document.querySelectorAll('.filter__box')
const arrows = document.querySelectorAll('.filter__box i')
triggers.forEach((trigger, i) => {
   trigger.addEventListener('click', () => {
      boxes[i].classList.toggle('active')
      arrows[i].classList.toggle('active')
   })
})


const catalog__page__filtersBoxes = document.querySelectorAll('.catalog__page__filter a')

catalog__page__filtersBoxes.forEach(box => {
   box.addEventListener('click', () => {
      catalog__page__filtersBoxes.forEach(box => {
         box.classList.remove('active')
      })
      box.classList.add('active')
   })
})




   $(".count__price #myRange").ionRangeSlider({
     
         min: 10,
         max: 100,
         from: 30,
         to: 80,
         type: "double",
         step: 10,
         min_interval: 0,
         max_interval: 0,
         drag_interval: false,
         values: [],
         p_values: [],
         from_fixed: false,
         from_min: null,
         from_max: null,
         from_shadow: false,
         to_fixed: false,
         to_min: null,
         to_max: null,
         to_shadow: false,
         force_edges: false,
         keyboard: false,
         keyboard_step: 5,
         grid: false,
         grid_num: 4,
         grid_snap: false,
         hide_min_max: true, 
         hide_from_to: true,
         decorate_both: true,
         values_separator: " — ",
         disable: false,
         onStart: null,
         onChange: null,
         onFinish: null,
         onUpdate: null
   })
       
   $(".count__aut #myRange").ionRangeSlider({
     
      min: 10,
      max: 100,
      from: 30,
      to: 80,
      type: "double",
      step: 10,
      min_interval: 0,
      max_interval: 0,
      drag_interval: false,
      values: [],
      p_values: [],
      from_fixed: false,
      from_min: null,
      from_max: null,
      from_shadow: false,
      to_fixed: false,
      to_min: null,
      to_max: null,
      to_shadow: false,
      force_edges: false,
      keyboard: false,
      keyboard_step: 5,
      grid: false,
      grid_num: 4,
      grid_snap: false,
      hide_min_max: true, 
      hide_from_to: true,
      decorate_both: true,
      values_separator: " — ",
      disable: false,
      onStart: null,
      onChange: null,
      onFinish: null,
      onUpdate: null
})

 const fileringBtn = document.querySelector(".filering")
 const filterMenu = document.querySelector('.catalog__page__filter')
 fileringBtn.addEventListener('click', () => {
   filterMenu.classList.toggle('active')
 })