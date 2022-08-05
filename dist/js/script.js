$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../images/icon/s1.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../images/icon/s2.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
