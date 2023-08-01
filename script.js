const iconMenu = document.querySelector(".header__toggle");
const menuBody = document.querySelector(".header__navigation");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const menuPoints = document.querySelectorAll(".header__menu--point[data-goto]");

if (menuPoints.length !== 0) {
  menuPoints.forEach((menuPoint) => {
    menuPoint.addEventListener("click", onMenuPointClick);
  });
}

function onMenuPointClick(e) {
  const menuPoint = e.target;
  if (
    menuPoint.dataset.goto &&
    document.querySelector(menuPoint.dataset.goto)
  ) {
    const gotoBlock = document.querySelector(menuPoint.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}

$(document).ready(function () {
  let w = $(window).width();
  if (w <= 768 && w > 375) {
    $(".multiple-items").slick({
      infinite: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 3,
      prevArrow: null,
      nextArrow: null,
    });
  }
  if (w <= 375) {
    $(".multiple-items").slick({
      infinite: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: null,
      nextArrow: null,
    });
  }
  if (w >= 768) {
    $(".multiple-items").slick({
      infinite: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
  }
});
