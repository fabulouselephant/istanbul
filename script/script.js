$(document).ready(function() {
  $("#owl-demo").owlCarousel({
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      lazyEffect: true,
      autoplay: true
  });
  var owl = $(".owl-carousel").data('owlCarousel');
  owl.play();
});