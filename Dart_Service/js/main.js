$(function() {
  		 var close = $('.close-menu');
  		 var link = $('.m-menu-link');
  		 var menu = $('.m-menu');
  		 link.on('click', function(event) {
  		 	event.preventDefault();
  		 	menu.toggleClass('m-menu__active');
  		 });
  		 close.on('click', function(event) {
  		 	event.preventDefault();
  		 	menu.toggleClass('m-menu__active');	
  		 });
  		});
//======================================================================================================
function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'flex') ? 'none' : 'flex';
    }	
//======================================================================================================
