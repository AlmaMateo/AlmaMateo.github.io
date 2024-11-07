
//Navbar toggle icon
function navbar_toggler() {
    $('.navbar-toggler[data-toggle=collapse]').click(function () {
        if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
        } else {
            $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
        }
    });
  }
  navbar_toggler();
  
// Navbar clone in mobile device
function navClone() {
    $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
    });

    $('.d2c_mobile_view .nav-link').click(function () {
        $(".nav-link").removeClass("active");
        $('.d2c_mobile_view').removeClass('show');
        $(this).toggleClass('active');
    });
    }
    navClone();

// Counter JS
$(function () {
    let visibilityIds = ['#counters_1'];
    let counterClass = '.count';
    let defaultSpeed = 3000;
  
    $(window).on('scroll', function () {
        getVisibilityStatus();
    });
    getVisibilityStatus();

    function getVisibilityStatus() {
        elValFromTop = [];
        var windowHeight = $(window).height(),
            windowScrollValFromTop = $(this).scrollTop();
  
        visibilityIds.forEach(function (item, index) {
            try {
                elValFromTop[index] = Math.ceil($(item).offset().top);
            } catch (err) {
                return;
            }
            if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
                counter_init(item);
            }
        });
    }

    function counter_init(groupId) {
        let num, speed, direction, index = 0;
        $(counterClass).each(function () {
            num = $(this).attr('data-TargetNum');
            speed = $(this).attr('data-Speed');
            direction = $(this).attr('data-Direction');
            easing = $(this).attr('data-Easing');
            if (speed == undefined) speed = defaultSpeed;
            $(this).addClass('c_' + index);
            doCount(num, index, speed, groupId, direction, easing);
            index++;
        });
    }

    function doCount(num, index, speed, groupClass, direction, easing) {
        let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
        if(easing == undefined) easing = "swing";
        $(className).animate({
            num
        }, {
            duration: +speed,
            easing: easing,
            step: function (now) {
                if (direction == 'reverse') {
                    $(this).text(num - Math.floor(now));
                } else {
                    $(this).text(Math.floor(now));
                }
            },
            complete: doCount
        });
    }
  });

// Testimonial Slider
$('.d2c_testimonial_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="d2c_carousel_left_btn" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="d2c_carousel_right_btn" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
        }
        }
    ]
});

// Form Validation JS
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

// WOW JS
    new WOW().init();

// Preloader JS
window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});

// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}




// Template Name: {{ NextGenAppsPro - Free Bootstrap 5 Portfolio Website Template }}
// Template URL: {{ https://www.designtocodes.com/product/nextgenappspro-free-portfolio-website-template }}
// Description: {{NextGenAppsPro - Portfolio Website Template is fully responsive and customizable, you can create portfolio websites in minutes.}}
// Author: DesignToCodes
// Author URL: https://www.designtocodes.com
// Text Domain: {{ NextGenApps Pro }}