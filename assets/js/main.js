jQuery(
  (function ($) {
    "use strict";
    // Preloader
    $(window).ready(function () {
      $(".loader-content").fadeOut(1200);
    });

    // Sticky Nav1
    $(document).on("scroll", function () {
      if ($(document).scrollTop() > 100) {
        $(".navbar-area").addClass("is-sticky");
      } else {
        $(".navbar-area").removeClass("is-sticky");
      }
    });

    // Sticky Nav2
    $(document).on("scroll", function () {
      if ($(document).scrollTop() > 0) {
        $(".mobile-nav").addClass("is-sticky");
      } else {
        $(".mobile-nav").removeClass("is-sticky");
      }
    });

    // Mean Menu
    // Mean Menu
    $(".mean-menu").meanmenu({
      meanScreenWidth: "991",
    });

    // Popup Video
    $(".popup-video").magnificPopup({
      disableOn: 320,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // Gallery
    $(".popup-img").magnificPopup({
      type: "image",
      removalDelay: 300,
      gallery: {
        enabled: true,
      },
    });

    // Owl Carausele

    $(".banner-slider").owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      center: true,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1300: {
          items: 4,
        },
      },
    });

    var swiper = new Swiper(".details-swiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".details-swiper-top", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
      autoplay: {
        delay: 3000,
      },
    });

    $("[data-countdown]").each(function () {
      var $this = $(this),
        finalDate = $(this).data("countdown");
      $this.countdown(finalDate, function (event) {
        $this.html(
          event.strftime(
            '<div class="cdown day"><span class="time-count">%-D</span> <p>Days</p></div> <div class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></div> <div class="cdown minutes"><span class="time-count">%M</span> <p>Minutes</p></div> <div class="cdown second"><span class="time-count">%S</span> <p>Seconds</p></div>'
          )
        );
      });
    });

    $(".custome-select").niceSelect();

    // Others Option For Responsive JS
    $(".others-option-for-responsive .dot-menu").on("click", function () {
      $(".others-option-for-responsive .container .container").toggleClass(
        "active"
      );
    });
  })(jQuery)
);
