$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  var typed = new Typed(".typing", {
    strings: ["Self-learner", "Front-end Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Self-learner", "Front-end Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });
});

const handleEmailMe = () => {
  window.open("mailto:phong12b5nd@gmail.com");
};
const handleGitHubMe = () => {
  window.open("http://bitly.ws/wTEA");
};
const handleEnglishMe = () => {
  window.open("http://bitly.ws/vbqP");
};
const handleCertificateMe = () => {
  window.open("http://bitly.ws/vbqL");
};
const handleMp3Me = () => {
  window.open("http://bitly.ws/wQgf");
};
const handleEmployeeMe = () => {
  window.open("http://bitly.ws/wDMF");
};
const handleSportMe = () => {
  window.open("http://bitly.ws/wDMt");
};
const handleAuctionsMe = () => {
  window.open("https://gushop.tk/");
};
const handleCVMe = () => {
  window.open("http://bitly.ws/vbso");
};
