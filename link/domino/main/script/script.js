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
    
    $(window).load(function() {
    
    
    $("#flexiselDemo3").flexisel({
            visibleItems: 4,
            itemsToScroll: 1,         
            autoPlay: {
                enable: true,
                interval: 5000,
                pauseOnHover: true
            }        
        });
    
   
    });
    
      
    
    

});

    
  