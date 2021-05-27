let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {

        duration: 4000,

        easing: "swing",

        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {

  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});
let navbar = $(".navbar");

$(window).scroll(function () {
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);