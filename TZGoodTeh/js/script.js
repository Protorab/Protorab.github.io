var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".reviews-blocks");
  var dots = $(".dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

$(".dot").click(function () {
  $(this).addClass("active")
});

$(".mobile-burger-menu").click(function () {
  $(".bars").toggleClass("change");
  $(".mobile-burger-menu").toggleClass("_fixible");
  $(".m-menu").toggleClass("__show");
})

$(window).resize(function () {
  if ($(window).width() <= 1399) {
    $('.reviews-blocks').addClass('dflex-cl');
  };
  if ($(window).width() >= 1399) {
    $('.reviews-blocks').removeClass('dflex-cl');
  };
})