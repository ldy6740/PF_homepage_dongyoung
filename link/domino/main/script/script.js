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
          minSlides: 1,
          maxSlides: 4,
          moveSlides:1,
          speed: 500,
          controls : false,
          pager:false,
          slideWidth: "380",
          slideMargin:'10',
          touchEnabled: true
      });
    });
    

    
  