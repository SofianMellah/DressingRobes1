$(document).ready(function() {
    $('.carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev">&#9001;</button>',
      nextArrow: '<button type="button" class="slick-next">&#9002;</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      // Code pour traiter le formulaire de contact
    });
  });
  