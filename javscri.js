$(document).ready(function() {
    $('.icon').click(function() {
      $('.search-box').toggleClass('active')
    })
  })
  
$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }
        });
    });
  });
  $(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme2').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('fadefromdown');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('fadefromdown');
            }
        });
    });
  });

  $(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme3').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('fadefromleft');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('fadefromleft');
            }
        });
    });
  });
  $(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme4').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('fadefromright');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('fadefromright');
            }
        });
    });
  });

  $(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme5').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('scaleimg');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('scaleimg');
            }
        });
    });
  });

  $(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme6').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('frcorner');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('frcorner');
            }
        });
    });
  });

  $(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme7').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('sclup');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('sclup');
            }
        });
    });
  });


  
document.getElementById("button").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
})
 
