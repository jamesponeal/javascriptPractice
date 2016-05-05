$(".animsition").animsition({
  inClass: 'zoom-in-lg',
  outClass: 'zoom-out-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$(".header").sticky({
  topSpacing:0,
  getWidthFrom: '.container',
  responsiveWidth: true,
  zIndex: 1000
});

$(".header").on('sticky-start', function(){
  $(".description").html('We build <strong>great</strong> apps');
});

$(".header").on('sticky-end', function(){
  $(".description").html('We build apps');
});

$(".want-us").sticky({
  topSpacing:64,
  getWidthFrom: '.container',
  responsiveWidth: true
});

$(".want-us").on('sticky-start', function(){
  $(".want-us").html('Want us to work on your project? <a href="#">Email Us</a>');
});

$(".want-us").on('sticky-end', function(){
  $(".want-us").html('Want us to work on your project?');
});

$('.slides').slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true
});

$('.team-slides').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
