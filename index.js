console.log("Test" );

/*$(document).ready(function() {
    $('.nav-item.dropdown').hover(
      function() {
        $(this).find('.dropdown-menu').stop(true, true).slideDown(300);
      }, 
      function() {
        $(this).find('.dropdown-menu').stop(true, true).slideUp(300);
      }
    );
  });*/
  $(document).ready(function () {
    $(".dropdown").hover(
  function () {
     $('ul.dropdown-menu').slideDown('medium');
  }, 
  function () {
     $('ul.dropdown-menu').slideUp('medium');
  }
);
  });

  const carousel = new bootstrap.Carousel('#myCarousel')
  const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})