$(function(){
    
    
    
    $('nav').hover(function(){
       
       $('#sm').stop().slideDown(400)},function(){
       $('#sm').stop().slideUp(400); 
       });
    $('#sm').hover(function(){

       $('#sm').stop().slideDown(400)},function(){
       $('#sm').stop().slideUp(400); 
       });
    
    

    
    	$(document).ready (function () {
		$('.jq_onoff .jq_hide').css('display', 'none');
		$('.jq_autoonoff .jq_hide').css('display', 'none');

		//탭(ul) onoff
		$('.jq_tabonoff .jq_cont').children().css('display', 'none');
		$('.jq_tabonoff .jq_cont div:first-child').css('display', 'block');
		$('.jq_tabonoff .jq_tab li:first-child').addClass('on');
		$('.jq_tabonoff').delegate('.jq_tab li', 'click', function() {
			var index = $('.jq_tabonoff .jq_tab li').index(this);
			$(this).siblings().removeClass();
			$(this).addClass('on');
			$(this).parent().next('.jq_cont').children().slideUp('fast').eq(index).slideDown('fast');
		});

		
	});
    
    
    
    
    
    
    
    

});

    