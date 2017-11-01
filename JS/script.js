/* NAVBAR TOGGLE BUTTON  */

$('.nav-button').click(function() {
  $(this).toggleClass('expanded').siblings('li').slideToggle();
});



// SLICK CAROUSEL INDEX PAGE
$('.slider').slick({
 	dots: true
});



// SLICK CAROUSEL PLAN PAGE
$('.food-slides').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});



/************************************
GOOGLE MAP
*****************************************/


      function initMap() {
        var uluru = {lat: 51.507698, lng: -0.124884};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    





















