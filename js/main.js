const popupBtns = document.querySelectorAll(".open__popup");
const popupBtn = document.querySelectorAll(".open__popup-2");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
const popups = document.querySelectorAll(".popup");
const popupss = document.querySelectorAll(".popup.form");
const popupBoxes = document.querySelectorAll(".popup__box");
const closeButtons = document.querySelectorAll(".popup__btn, .close__btn");
const closeButton = document.querySelectorAll(".close__btn");
const popupBtnn = document.querySelectorAll(".popup__btn-2");



document.addEventListener("DOMContentLoaded", function() {
  const popupBtn3 = document.querySelectorAll(".open__popup-3");
  const popup3 = document.querySelector(".popup-new");
  const popupBox3 = document.querySelector(".popup__box.new");
  const closeBtn3 = document.querySelector(".close__btn.new");

  popupBtn3.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      popup3.classList.add("active");
      popupBox3.classList.add("active");
      bodyLock();
    });
  });

  closeBtn3.addEventListener("click", function (event) {
    event.preventDefault();
    popup3.classList.remove("active");
    popupBox3.classList.remove("active");
    bodyUnlock();
  });
});


let unlock = true;
const timeout = 300;

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");
  body.style.overflow = "hidden"; // Добавляем стиль overflow: hidden

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "";
      }
    }

    body.style.paddingRight = "";
    body.classList.remove("lock");
    body.style.overflow = ""; // Удаляем стиль overflow: hidden
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

popupBtnn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popups.forEach(function (popup) {
      popup.classList.add("active");
      popup.classList.remove("ass");
    });
    popupBoxes.forEach(function (box) {
      box.classList.add("active");
      box.classList.remove("ass");
    });
    popups.forEach(function (popup) {
      popup.classList.remove("open");
    });
    popupBoxes.forEach(function (box) {
      box.classList.remove("open");
    });
  });
});

popupBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popups.forEach(function (popup) {
      popup.classList.add("active");
    });
    popupBoxes.forEach(function (box) {
      box.classList.add("active");
    });
    bodyLock();
  });
});

popupBtn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popupss.forEach(function (popup) {
      popup.classList.add("open");
    });
    popupBoxes.forEach(function (box) {
      box.classList.add("open");
    });
    bodyLock();
  });
});

closeButton.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popups.forEach(function (popup) {
      popup.classList.remove("open");
    });
    popupBoxes.forEach(function (box) {
      box.classList.remove("open");
    });
    bodyUnlock();
  });
});

closeButtons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popups.forEach(function (popup) {
      popup.classList.remove("active");
      popup.classList.add("ass");
    });
    popupBoxes.forEach(function (box) {
      box.classList.remove("active");
      box.classList.add("ass");
    });
    bodyUnlock();
  });
});




$(document).ready(function () {
  $(".display-hide").addClass("visible");
});



$(".try__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button class="slick-prev arrow-left-s"><img src="/images/slider/arrow-left.svg" alt=""></button>',
  nextArrow: '<button class="slick-prev arrow-right-s"><img src="/images/slider/arrow-right.svg" alt=""></button>',
  autoplay: true,
  fade: true,
  autoplaySpeed: 2000,
  speed: 1000,
  asNavFor: '.try__btn-slider'
});

$(".try__btn-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  fade: true,
  speed: 150,
  asNavFor: '.try__slider'
});







  $(document).ready(function () {
    function selectToggle() {
      $(this).parent().toggleClass("active");
    }

    function selectChoose() {
      const text = $(this).text();
      const select = $(this).closest(".select");
      const curentText = select.find(".select__curent");
      curentText.text(text);
      select.removeClass("active");
    }

    function initSelect() {
      $(".select__header").click(selectToggle);
      $(".select__item").click(selectChoose);
    }


    function toggleAcordeon(index) {
      $(".header__burger-acordeon").eq(index).toggleClass("open");
      $(".header__burger-img-arrow").eq(index).toggleClass("open");
    }


    $(".header__burger-acordeon").click(function () {
      const index = $(".header__burger-acordeon").index(this);
      toggleAcordeon(index);
    });

    initSelect();
  });



$(".qr-code__img-slider").slick({
  arrows: false,
  // infinite: false,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  asNavFor: '.qr-code__btn-slider, .qr-code__sub-title__slider'

})








$(".qr-code__btn-slider").slick({
  arrows: false,
  dots: true,
  // infinite: false,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  asNavFor: '.qr-code__img-slider, .qr-code__sub-title__slider'
})

$(".qr-code__sub-title__slider").slick({
  arrows: false,
  // infinite: false,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  asNavFor: '.qr-code__btn-slider, .qr-code__img-slider'
})



const firstSliderElement = document.getElementById('first-slider');
const secondSliderElement = document.getElementById('second-slider');

if (firstSliderElement) {
  // Инициализируем первый слайдер, так как элемент '#first-slider' найден на странице.
  new Splide(firstSliderElement, {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    autoScroll: {
      speed: 2, // Positive speed for clockwise rotation.
    },
    arrows: false,
    gap: 15,
    pagination: false,
    breakpoints: {
      800: {
        perPage: 3
      },
      600: {
        perPage: 2
      }
    }
  }).mount(window.splide.Extensions);
}

if (secondSliderElement) {
  // Инициализируем второй слайдер, так как элемент '#second-slider' найден на странице.
  new Splide(secondSliderElement, {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    gap: 15,
    autoScroll: {
      speed: -2, // Negative speed for counterclockwise rotation.
    },
    arrows: false,
    pagination: false,
    breakpoints: {
      800: {
        perPage: 3
      },
      600: {
        perPage: 2
      }
    }
  }).mount(window.splide.Extensions);
}







  $(document).ready(function () {
    // Функция для скрытия селект боди
    function hideSelectBody() {
      $('.select-body').removeClass('show');
    }

    // Обработчик клика по селекту
    $('.select').on('click', function () {
      $(this).siblings('.select-body').toggleClass('show');
    });

    // Обработчик клика по элементам селект боди
    $('.select-item').on('click', function () {
      const selectedLang = $(this).data('lang');
      $(this).closest('.select-body').siblings('.select').find('.select-img').attr('src', `/images/lang/${selectedLang}.svg`);
      hideSelectBody();
    });

    // Обработчик клика по другим элементам страницы
    $(document).on('click', function (event) {
      const targetElement = $(event.target);
      if (!targetElement.closest('.select').length) {
        hideSelectBody();
      }
    });
  });



$(".blog__inner").slick({
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 765,
      settings: {
        arrows: false,
        dots: true,
        // fade: true,
        autoplay:true,
        autoplaySpeed:2000,
      }
    },
  ]
})



$(".design-cards__inner").slick({
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 950,
      settings: {
        arrows: false,
        dots: true,
        // fade: true,
        autoplay:true,
        autoplaySpeed:2000,

      }
    },
  ]
})


$(".tarif-mobile__inner").slick({
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        dots: true,
        infinite: false,
        variableWidth: true,
        centerMode: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        dots: true,
        infinite: false,
      }
    },
  ]
})







document.querySelector('.header__burger').addEventListener('click', function() {
  document.querySelector('.header__burger').classList.toggle('disabled');


  if (document.body.classList.contains('menu-open-btn')) {
    document.body.classList.remove('menu-open-btn'); // Удалите класс, чтобы восстановить прокрутку
  } else {
    document.body.classList.add('menu-open-btn'); // Добавьте класс, чтобы ограничить прокрутку
  }

  document.querySelector('.header__burger-body').classList.toggle('menu-open-btn');
});









const header = document.querySelector('.header');
const dropdown = document.querySelector('.header__dropdown');
const menuButton = document.querySelector('.header__burger'); // Замените '.menu-button' на селектор вашей кнопки меню
let prevScrollPos = window.pageYOffset;
const defaultOffset = 200; // Задержка перед скрытием хедера после прокрутки

function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  const isDropdownOpen = header.classList.contains('dropdown-open');
  const isMenuButtonOpen = header.classList.contains('menu-open-btn'); // Проверка наличия класса на хедере

  if (isDropdownOpen || isMenuButtonOpen) {
    return; // Если выпадающее меню открыто или бургер-меню активно, не скрывайте хедер
  }

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('header--hidden');
  } else {
    if (currentScrollPos > defaultOffset) {
      header.classList.add('header--hidden');
    }
  }

  prevScrollPos = currentScrollPos;
}

dropdown.addEventListener('mouseenter', () => {
  header.classList.add('dropdown-open');
});

dropdown.addEventListener('mouseleave', () => {
  header.classList.remove('dropdown-open');
});

menuButton.addEventListener('click', () => {
  header.classList.toggle('menu-open-btn'); // Переключение класса на хедере при клике на кнопку меню
});

window.addEventListener('scroll', handleScroll);






function restrictInputLength(inputElement) {
  inputElement.addEventListener("input", function (event) {

    var inputValue = event.target.value;


    var numericValue = inputValue.replace(/\D/g, "");


    if (numericValue.length > 10) {
      numericValue = numericValue.slice(0, 10);
    }


    event.target.value = numericValue;
  });
}


var inputElements = [
  document.querySelector("#phone"),
  document.querySelector("#phone-2"),
  document.querySelector("#phone-3"),
  document.querySelector("#phone-4"),
];

for (var inputElement of inputElements) {
  if (inputElement) {
    window.intlTelInput(inputElement, {
      initialCountry: "ua",
      dropdownContainer: document.body,
    });

    restrictInputLength(inputElement);
  }
}









// Добавляем обработчики событий
var element = document.querySelector(".iti__selected-flag");

if (element) {
  element.addEventListener("mouseenter", function () {
    event.stopPropagation();
    element.classList.add("hover-effect");
  });

  element.addEventListener("mouseleave", function () {
    element.classList.remove("hover-effect");
  });
} else {
  console.error("Элемент с классом .iti__selected-flag не найден на странице.");
}
const Star = document.querySelector(".popup-input");
const redStar = document.querySelector(".red-star");

if (Star && redStar) {
  Star.addEventListener("input", function () {
    if (Star.value.trim() !== "") {
      redStar.style.display = "none";
    } else {
      redStar.style.display = "block";
    }
  });
}

  // const Stars = document.querySelector(".input-tel");
  // const redStars = document.querySelector(".red-star-2");
  //
  // Stars.addEventListener("input", function () {
  //   if (Stars.value.trim() !== "") {
  //     redStars.style.display = "none";
  //   } else {
  //     redStars.style.display = "block";
  //   }
  // });





  // function onEntry(entry) {
  //   entry.forEach((change) => {
  //     if (change.isIntersecting) {
  //       change.target.classList.add("element-show");
  //     } else {
  //       // change.target.classList.remove("element-show");
  //     }
  //   });
  // }
  //
  // let options = {
  //   threshold: [0.1],
  // };
  // let observer = new IntersectionObserver(onEntry, options);
  // let elements = document.querySelectorAll(".element-animation");
  //
  // for (let elm of elements) {
  //   observer.observe(elm);
  // }



$(document).ready(function () {
  $("a.header__link[href='#contact']").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr("href");
    var top = $(id).offset().top;

    $("body,html").animate({scrollTop: top}, 1000);
  });
});

const contact = document.querySelector(".contact__input-name");
const redStarContact = document.querySelector(".contact__red-star");

if (contact && redStarContact) {
  contact.addEventListener("input", function () {
    if (contact.value.trim() !== "") {
      redStarContact.style.display = "none";
    } else {
      redStarContact.style.display = "block";
    }
  });
} else {
  console.error("Один или оба элемента не были найдены на странице.");
}


  // const contacts = document.querySelector(".contact__input-tel");
  // const redStarContacts = document.querySelector(".contact__red-star-2");
  //
  // contacts.addEventListener("input", function () {
  //   if (contacts.value.trim() !== "") {
  //     redStarContacts.style.display = "none";
  //   } else {
  //     redStarContacts.style.display = "block";
  //   }
  // });

  $(document).ready(function () {
    const $accordeonWrappers = $(".design-acardeon__wrapper");
    const $mainImg = $(".design-acardeon__main-img");

    // Скрываем текст всех аккордеонов, кроме первого
    $accordeonWrappers
        .not(":first")
        .find(".design-acardeon__text-box")
        .slideUp(0);
    $accordeonWrappers.not(":first").removeClass("active");
    $accordeonWrappers
        .not(":first")
        .find(".design-acardeon__arrow")
        .css("transform", "rotate(0deg)");

    // Делегируем событие клика на обертку аккордеона
    $(".design-acardeon").on("click", ".design-acardeon__button", function () {
      const $wrapper = $(this).parent(); // Обертка аккордеона
      const isOpen = $wrapper.hasClass("active");

      // Если обертка была закрыта, открываем её; иначе, закрываем все аккордеоны
      if (!isOpen) {
        $accordeonWrappers.removeClass("active");
        $accordeonWrappers.find(".design-acardeon__text-box").slideUp(300);
        $accordeonWrappers
            .find(".design-acardeon__arrow")
            .css("transform", "rotate(0deg)");

        $wrapper.addClass("active");
        $wrapper.find(".design-acardeon__text-box").slideDown(300);
        $wrapper
            .find(".design-acardeon__arrow")
            .css("transform", "rotate(180deg)");
      } else {
        $wrapper.removeClass("active");
        $wrapper.find(".design-acardeon__text-box").slideUp(300);
        $wrapper.find(".design-acardeon__arrow").css("transform", "rotate(0deg)");
      }
    });


  });








const cardElements = document.querySelectorAll(".cards__card");
let activeCard = null;
let clickCounter = 0;

function toggleCard(clickedCard, event) {
  if (activeCard === clickedCard) {
    clickedCard.classList.toggle("active");
  } else {
    activeCard?.classList.remove("active");
    activeCard = clickedCard;
  }

  if (clickCounter === 2 && event.target.closest('.cards__card-wrapper-hover')) {
    event.preventDefault();
  }
}

function handleClick(event) {
  if (event.defaultPrevented) {
    return; // Прекращаем выполнение, если событие было отменено
  }

  const clickedCard = event.currentTarget;

  console.log("Клик");
  if (event.target.closest('.cards__card-wrapper-hover')) {
    event.preventDefault();
    clickCounter++;

    if (clickCounter === 2) {
      window.location.href = event.target.href;
    }
  }

  toggleCard(clickedCard, event);
}

cardElements.forEach((card) => {
  card.addEventListener("click", handleClick);
});

document.querySelector('a').addEventListener('click', function (event) {
  event.preventDefault();
  if (clickCounter > 1) {
    window.location.href = this.href;
  }
  clickCounter++;
});
















//
//
// window.onload = function () {
//   const icons = document.querySelector('.icons-paralax');
//
//   const forIcons = 15;
//   const speed = 0.05;
//
//   let positionX = 0, positionY = 0;
//   let cordXprocent = 0, cordYprocent = 0; // Corrected the variable name here
//
//   function setMouseParallaxStyle() {
//     const distX = cordXprocent - positionX; // Corrected the variable name here
//     const distY = cordYprocent - positionY; // Corrected the variable name here
//
//     positionX = positionX + (distX * speed);
//     positionY = positionY + (distY * speed);
//
//     icons.style.cssText = `transform: translate(${positionX / forIcons}%, ${positionY / forIcons}%);`;
//   }
//
//   setMouseParallaxStyle();
//
//   document.addEventListener("mousemove", function (e) {
//     const documentWidth = document.body.offsetWidth;
//     const documentHeight = document.body.offsetHeight;
//
//     const cordX = e.pageX - documentWidth;
//     const cordY = e.pageY - documentHeight;
//
//     cordXprocent = cordX / documentWidth * 100;
//     cordYprocent = cordY / documentHeight * 100;
//
//     setMouseParallaxStyle();
//   });
// };
//
//








$(document).ready(function () {
  $(".top__form").submit(function (event) {
    event.preventDefault();
  });
  $(".contact__form").submit(function (event) {
    event.preventDefault();
  });

  $(".top__input").focus(function () {
    $(".top__span").addClass("span-focused");
  });

  $(".top__input").blur(function () {
    $(".top__span").removeClass("span-focused");
  });
})







function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}





// Находим элемент input и его родительский элемент
const inputElemente = document.querySelector(".input-name");
const inputWrapper = inputElement.parentElement;

// Добавляем обработчик события ввода текста
inputElemente.addEventListener("input", () => {
  // Проверяем, есть ли текст в поле ввода
  if (inputElemente.value.trim() === "") {
    // Если текста нет, добавляем звездочку (псевдоэлемент)
    inputWrapper.classList.add("has-star");
  } else {
    // Если есть текст, удаляем звездочку (псевдоэлемент)
    inputWrapper.classList.remove("has-star");
  }
});


const inputName = document.querySelector(".input-name");
const inputWrapName = document.querySelector(".input__wrap-name");

// Добавить обработчик события на изменение содержимого инпута
inputName.addEventListener("input", function() {
  if (inputName.value.trim() === "") {
    inputWrapName.classList.remove("input-has-content");
  } else {
    inputWrapName.classList.add("input-has-content");
  }
});