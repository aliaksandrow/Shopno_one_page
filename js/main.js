/*main-nav*/
$(document).ready(function(){
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a")	
	sections.waypoint( {
       handler: function(direction) {
		   var active_section;
			active_section = $('section#' + this.element.id);
			if (direction === "up") active_section = active_section.prev();
     var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			
 navigation_links.parent().removeClass("current");
	active_link.parent().addClass("current");
		}, 
		offset: '20%'
	});
    /*mobile*/
     var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');
   toggleButton.on('click', function(event){
		event.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});
  	if (toggleButton.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function() {
   	if (toggleButton.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});
  	$('#main-nav-wrap li a').on("click", function() {   
   	if (nav.hasClass('mobile')) {   		
   		toggleButton.toggleClass('is-clicked'); 
   		nav.fadeOut();   		
   	}     
  	});
    });
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
$('.hover',this).hide();
},
function(){
$('.hover',this).show();
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
