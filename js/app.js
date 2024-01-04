gsap.registerPlugin(ScrollTrigger);

// detect mobile
window.matchMedia("(max-width: 1024px)").matches? $("body").addClass("mobile") : $("body").addClass("pc");

const heroTitle = new SplitType("#hero__title"),
      heroTitleChars = heroTitle.chars,

      heroSubTitle = new SplitType("#hero__sab_title"),
      heroSubTitleChars = heroSubTitle.chars,

      lessonsTitle = new SplitType("#lessons__title"),
      lessonsTitleChars = lessonsTitle.chars,

      titleLatest = new SplitType("#latest__title"),
      titleLatestChars = titleLatest.chars,

      titleFooter = new SplitType("#footer__title"),
      titleFooterChars = titleFooter.chars;

$(document).ready(function() {

  let count = 0;
  let counter = setInterval(function() {

    if(count < 101) {
      $("body").addClass("hidden");
      $('.preloader__counter').text(count + '%');
      $('.preloader__bar').css('width', count + '%');
      count++;
    } else {
      $("body").removeClass("hidden");
      $("body").addClass("done");
    }

  }, 40);
});

// button scroll to top
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".scroll-to-top").fadeIn();
  } else {
    $(".scroll-to-top").fadeOut();
  }
  $(".scroll-to-top").click(function () {
    $("html, body").stop().animate({scrollTop:0}, 200, "swing");
  });
});
//tabs
(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.future__tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);

// slider swiper lessons section
const swiperLessons = new Swiper(".lessons__wrap_blocks", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".button-next-lessons",
    prevEl: ".button-prev-lessons",
  },
});
// slider swiper latest section
const sliderSectionWork = new Swiper(".latest__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

function animateHeader() {
  const headerNavbar = gsap.to(".navbar-brand, .nav-item, .navbar-toggler",{
    duration: 2,
    y: 0,
    opacity: 1,
    stagger: .3,
    delay: 6.5,
  });
}

function animateSectionHero() {
  gsap.from(heroTitleChars,{
    delay: 4.5,
    opacity: 0,
    stagger: .1,
  });

  gsap.from(".content_hero__back",{
    delay: 4.5,
    opacity: 0,
    duration: 3,
    onComplete: () => {
      gsap.to(".content_hero__next_section",{
        opacity: 1,
      });
    }
  });

  gsap.from(heroSubTitleChars,{
    delay: 4.5,
    opacity: 0,
    stagger: .1,
  });

  gsap.to(".info_hero__img",{
    scrollTrigger: {
      trigger: ".main__hero",
      start: "top top",
      end: "bottom center",
      scrub: 1,
    },
    duration: 1,
    rotation: 360 * 3,
  });

  // gsap.to(".content_hero__sab, .content_hero__text",{
  //   duration: 2,
  //   delay: 6.5,
  //   x: 0,
  //   opacity: 1,
  // });
}

function animateSectionLessons() {

  gsap.from(lessonsTitleChars, {
    opacity: 0,
    stagger: .1,
  
    scrollTrigger: {
      trigger: ".main__lessons",
      start: "-=100 +=200",
      end: "bottom top",
    },
  });

  const animateBlocksLessons = gsap.from(".block_lessons__img", {

    scrollTrigger: {
      trigger: ".main__lessons",
      start: "-=100 +=200",
    },
    onComplete: () => {

      gsap.to(".block_lessons__title, .block_lessons__text, .block_lessons__img", {
        duration: 3,
        opacity: 1,
        delay: .7,
        stagger: .5,
      });

      gsap.to(".main__lessons .lessons__btn_view, .wrap_buttons_slider.navigation", {
        opacity: 1,
        x: 0,
        duration: 2,
      });
      

      gsap.to(".main__lessons .swiper-pagination", {
        opacity: 1,
        y: 0,
        duration: 2,
      });
    }
  });

  gsap.to(".title_lessons__star_x svg, .title_lessons__star_y svg, .wrap_interactive__star", {
    rotation: 360 * 3,

    scrollTrigger: {
      trigger: ".main__lessons",
      start: "top center",
      end: "bottom center",
      scrub: 2,
    },
  });
  gsap.to(".title_lessons__star_x", {
    x: 150,

    scrollTrigger: {
      trigger: ".main__lessons",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
  });

  gsap.to(".title_lessons__star_y", {
    y: 200,

    scrollTrigger: {
      trigger: ".main__lessons",
      start: "top center",
      end: "bottom center",
      scrub: 3,
    },
  });
}

function animateSectionLatest() {
  const animateTitle = gsap.from(titleLatestChars, {
    scrollTrigger: {
      trigger: ".main__latest",
      start: "-=50 +=200",
    },
    opacity: 0,
    stagger: .1,
  });

  const animateBackground = gsap.to(".latest__back", {
    scrollTrigger: {
      trigger: ".main__latest",
      start: "top center",
      end: "bottom center",
      scrub: 2
    },
    y: -200,
    rotation: 90,
  });

  const titleBlocks = gsap.to(".block_latest__title",{
    scrollTrigger: {
      trigger: ".main__latest",
      start: "top center",
      end: "bottom center",
    },
    opacity: 1,
    stagger: .5,
  });
  const textBlocks = gsap.to(".block_latest__text",{
    scrollTrigger: {
      trigger: ".main__latest",
      start: "top center",
      end: "bottom center",
    },
    opacity: 1,
    stagger: .7,
  });
  const controlsBlocks = gsap.to(".controls_latest__view, .controls_latest__alert",{
    scrollTrigger: {
      trigger: ".main__latest",
      start: "top center",
      end: "bottom center",
    },
    y: 0,
    opacity: 1,
    stagger: .8,
  });
}

function animateSectionFuture() {
  const animateBackFuture = gsap.to(".switch_background", {
    scrollTrigger: {
      trigger: ".future__tabs",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    backgroundColor: "black",
  });
}

function animateFooter() {
  const backgroundFooter = gsap.to(".footer__back_video_footer",{
    scrollTrigger: {
      trigger: ".footer__wrap",
      start: "top center",
      end: "top +=100",
      scrub: 1,
    },
    opacity: .4,
  })


  const Anim = gsap.from(titleFooterChars,{
    scrollTrigger: {
      trigger: "footer",
      start: "top center",
    },
    opacity: 0,
    stagger: .1,
    onComplete: () => {
  
      gsap.to(".footer__text, .social__link",{
        opacity: 1,
        stagger: .3
      });
  
      gsap.to(".footer__form input",{
        duration: 2,
        opacity: 1,
        width: "100%",
        stagger: .5,
        onComplete: () => {
          gsap.to(".footer__form textarea",{
            duration: 2,
            opacity: 1,
            height: "100%",
          });
          gsap.to(".footer__form button",{
            duration: 2,
            opacity: 1,
            y: 0
          });
        },
      });
    }
  });

} 



animateHeader();
animateSectionHero();
animateSectionLessons();
animateSectionLatest();
animateSectionFuture();
animateFooter();