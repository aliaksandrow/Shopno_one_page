/* sticky */
   $(window).on('scroll', function() {
		var y = $(window).scrollTop(),
		    topBar = $('header');    
	   if (y > 1) {
	      topBar.addClass('sticky');
	   }
      else {
         topBar.removeClass('sticky');
      } 
	});	
      /* section-servises hover */  
$(document).ready(function(){
    $('.design div').hover(function(){
$('.hover',this).show();
},
function(){
$('.hover',this).hide();
});
})
      /* section-team hover */
$(document).ready(function(){
    $('.photo-wall div').hover(function(){
$('.hover',this).show();
},
function(){
$('.hover',this).hide();
});
}) 
$(document).ready(function(){
 
    $(".active .close").click(function(){
        $(this).parents(".active").hide(this);
    });
 
});
