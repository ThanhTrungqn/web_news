jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });

  };
  
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});
//Animation for image slide
var srcImg=["img/slide-hoangphuc-1.png","img/slide-hoangphuc-2.png","img/slide-hoangphuc-3.png","img/slide-hoangphuc-4.png"];
var index = 0;
(function animate() {                         // the function responsibe for the animation
  $("#fadeImage").delay(1000).fadeOut(1000, function() {     // first fadeOut #hellos
    index = (index + 1) % srcImg.length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.src = srcImg[index];         // change text accordingly
  }).fadeIn(1000, animate);                   // then fadeIn. When fadeIn finishes, call animate again
})();


$(document).ready(function(){
  $('#button_scrollable').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

  var c, currentScrollTop = 0,
  navbar = $('nav');
  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();
    currentScrollTop = a;  
    if (c < currentScrollTop && a > b + b) {
      navbar.removeClass("is-visible").addClass("is-hidden");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("is-hidden").addClass("is-visible");
    }
    c = currentScrollTop;
  });
});