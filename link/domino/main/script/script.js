$(function(){
    
    
    
    $('nav').hover(function(){
       
       $('#sm').stop().slideDown(400)},function(){
       $('#sm').stop().slideUp(400); 
       });
    $('#sm').hover(function(){

       $('#sm').stop().slideDown(400)},function(){
       $('#sm').stop().slideUp(400); 
       });
    
    

    
    
     $('#testDiv').viSimpleSlider({
            ease : 'easeOutQuart',
            autoPlay : true,
            autoTime : 6000,
            speed : 400,
		mobileSwipe : true,
            desktopSwipe : true
        });


});

  $(document).ready(function(){
      $('.slider').bxSlider({
          auto: true,
          maxSlides: 4,
          mvoeSlides:1,
          speed: 500,
          controls : false,
          pager:false,
          slideWidth: "320"
      });
    });
    

    
  