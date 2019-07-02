$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position>= 200){
            $('.nav-menu').addClass('custom-navbar');
        } else{
            $('.nav-menu').removeClass('custom-navbar');
        }
    });


    $(".slider-active").owlCarousel({
        loop: true,
        nav: false,
        dots:false,
        autoplay: true,
        autoplayTimeout:3000,
        navText: ['<i class="fas fa-arrow-right"></i>','<i class="fas fa-arrow-left"></i>'], //Font-Awesome icon 
        responsive: {
              0: {
                items: 1
            },
            767: {
                items: 2
            },
            768:{
                items:2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
      
        
    });
    $('.brand-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout:2000,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            992: {
                items: 6
            },
            1200: {
                items: 6
            }
        }
    });
    AOS.init();
});