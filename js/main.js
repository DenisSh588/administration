$(function( ){
$('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true,
});
$('.additional__information__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true,
});
$('.urban__parameters__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true,
    autoplay: true,
});
});
// Initialize and add the map
/*function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }*/