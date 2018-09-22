$('#recipeCarousel').carousel({
  interval: 4000
});

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<4;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 6000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});

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
//Animation for texte cover
var srcTxt1=["Trang tin tức du lịch số 1 miền trung",
"Cung cấp thông tin khuyến mãi du lịch"];
var srcTxt2=["Chúng tôi tự mang lại cho bạn những thông tin bổ ích và những kiến thức cần trang bị để có một kỳ nghỉ thú vị",
"Với 7 năm kinh nghiệm trong nghề du lịch và cho thuê xe, chúng tôi mang đến cho bạn những chuyến đi giá rẻ và chất lượng nhất"];
var index_1 = 0;
var index_2 = 0;

(function animate_txt1() {                         // the function responsibe for the animation
  $("#texte_1").delay(5000).fadeOut(1000, function() {     // first fadeOut #hellos
    index_1 = (index_1 + 1) % srcTxt1.length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.innerHTML = srcTxt1[index_1];         // change text accordingly
  }).fadeIn(1000, animate_txt1);                   // then fadeIn. When fadeIn finishes, call animate again
})();

(function animate_txt2() {                         // the function responsibe for the animation
  $("#texte_2").delay(5000).fadeOut(1000, function() {     // first fadeOut #hellos
    index_2 = (index_2 + 1) % srcTxt2.length;      // when fadeOut complete, increment the index (check if go beyond the length of the array)
    this.innerHTML = srcTxt2[index_2];         // change text accordingly
  }).fadeIn(1000, animate_txt2);                   // then fadeIn. When fadeIn finishes, call animate again
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