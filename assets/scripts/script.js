document.addEventListener('DOMContentLoaded', () => {
	startCarusel(
		'.header__carusel',
		{
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			variableWidth: true,
			arrows: false,
		},
		[
			{
				breakpoint: 991,
				settings: {
					centerMode: false,
					variableWidth: false,
				},
			},
		]
	)

	startCarusel(
		'.try__carusel.try',
		{
			infinite: true,
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			prevArrow: $('.try__carusel__left'),
			nextArrow: $('.try__carusel__right'),
		},
		[
			{
				breakpoint: 1240,
				settings: {
					arrows: false,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	)

	startCarusel(
		'.special__try .try__carusel',
		{
			infinite: true,
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			prevArrow: $('.special__try__left'),
			nextArrow: $('.special__try__right'),
		},
		[
			{
				breakpoint: 1240,
				settings: {
					arrows: false,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	)

  if (window.innerWidth < 600) {
    startCarusel(
      '.events__wrapper',
      {
        infinite: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        centerMode: false,
        variableWidth: true,
      },
      [
        {
          breakpoint: 1240,
          settings: {
            arrows: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ]
    )
  }


	startCarusel(
		'.moreInfo__wrapper',
		{
			infinite: true,
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			arrows: false,
		},
		[
			{
				breakpoint: 930,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	)

  openHide(".filter__trigger", '.filter__box', '.filter__box i')

  activateFilterBoxes(".catalog__page__filter a");
  addFilterToggleEvent(".filering", '.catalog__page__filter');
  addFilterToggleEvent(".blogs__page .section__title i", '.blogs__item__filter');
  addFilterToggleEvent(".page__events .section__title i", '.events__filter');
})

function startCarusel(mainClass, options, responsiveOptions) {
	$(mainClass).slick({
		...options,
		responsive: responsiveOptions,
	})
}

function openHide(triggersSelector, boxesSelector, arrowsSelector) {
  const triggers = document.querySelectorAll(triggersSelector),
        boxes = document.querySelectorAll(boxesSelector),
        arrows = document.querySelectorAll(arrowsSelector)
		if(triggers.length && boxes.length && arrows.length) {
			triggers.forEach((trigger, i) => {
   
				trigger.addEventListener('click', () => {
	 
				  boxes[i].classList.toggle('active')
				  arrows[i].classList.toggle('active')
				})
			 })
		}

}
function initializeSlider(selector) {
  $(selector).ionRangeSlider({
     min: 10,
     max: 100,
     from: 30,
     to: 80,
     type: "double",
     step: 10,
     min_interval: 0,
     max_interval: 0,
     drag_interval: false,
     hide_min_max: true,
     hide_from_to: true,
     decorate_both: true,
  });
}
function activateFilterBoxes(selector) {
  const catalog__page__filtersBoxes = document.querySelectorAll(selector);
	if(catalog__page__filtersBoxes.length) {
		catalog__page__filtersBoxes.forEach(box => {
			box.addEventListener('click', () => {
			  catalog__page__filtersBoxes.forEach(box => {
				 box.classList.remove('active');
			  });
			  box.classList.add('active');
			});
		 });
	}

}










function addFilterToggleEvent(buttonSelector, menuSelector) {
  const filterButton = document.querySelector(buttonSelector);
  const filterMenu = document.querySelector(menuSelector);
	if(filterMenu && filterButton)  {
		filterButton.addEventListener('click', () => {
			filterMenu.classList.toggle('active');
		 });
	}

}




  $(".acordeon").on("click", ".acordeon-cabecera", function() {
    $(this).toggleClass("active").next().slideToggle();
    $(".acordeon-cabecera i").toggleClass("active__arr");
    $(this).toggleClass("acc__title__active")
  });



  



//   var field = document.getElementById('events__filter__calendar');
//   var picker = new Pikaday({
// 		onSelect: function(date) {
// 			 field.value = picker.toString();
// 		}
//   });
//   field.parentNode.insertBefore(picker.el, field.nextSibling);



const navbar__links__hamburger = document.querySelector(".navbar__links__hamburger"),
catalog__menu = document.querySelector(".catalog__menu"),
catalog__menu__list__li = document.querySelectorAll('.catalog__menu__list>ul>li:not(.main__category__list)'),
category__sub__menus__li = document.querySelectorAll('.category__sub__menu li');


category__sub__menus = document.querySelectorAll('.category__sub')
main__category__list = document.querySelector(".main__category__list")

		navbar__links__hamburger.addEventListener("click", () => {
			catalog__menu.classList.add('active');
		})

		main__category__list.addEventListener("click", () => {
			catalog__menu.classList.remove('active');
			category__sub__menus.forEach(item => {
				item.classList.remove('active')
			})
		})




catalog__menu__list__li.forEach((category, i) => {
	category.addEventListener('mouseover', () => {
		category__sub__menus.forEach(item => {
			item.classList.remove('active')
		})
		category__sub__menus[i].classList.add('active')
	})
})




if(window.innerWidth>991) {
	category__sub__menus.forEach(menu => {
		const category__sub__menus__li = menu.querySelectorAll('li');
		
		category__sub__menus__li.forEach((item, index) => {
		  if ((index + 1) % 3 === 0) {
			 item.style.marginLeft = '-70px';
			 // İstediğiniz stil veya işlemi buraya ekleyebilirsiniz
		  }
		});
	 });
	 
}


