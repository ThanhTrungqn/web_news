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

var srcImg=["img/logovinass.png","img/otologo.png"];
document.getElementById("fadeImage").src="img/logovinass.png";
var index = 0;

document.getElementById("MyElement").className += " MyClass";

(function animate() {                         // the function responsibe for the animation
  $("#fadeImage").delay(10000).fadeOut(1000, function() {     // first fadeOut #hellos
    index = (index + 1) % srcImg.length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.src = srcImg[index];         // change text accordingly
  }).fadeIn(1000, animate);                   // then fadeIn. When fadeIn finishes, call animate again
})();