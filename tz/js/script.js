 $(document).ready(function () {
   $('#m-bar').click(function () {
     $('#m-bar div').toggleClass('change');
     $('.menu-panel').toggleClass('menu-panel__show');
   })
 });

 $(document).ready(function () {
   $('.search').click(function () {
     $('.menu-bar div').toggleClass('change');
     $('#m-bar').hide();
     $('.search-location').addClass('search-location__show');
     $('.menu-bar').addClass('search-close');
     $('.search-close').click(function () {
       $('.menu-bar div').removeClass('change');
       $('.search-location').removeClass('search-location__show');
       $('.menu-bar').removeClass('search-close');
       $('#m-bar').show()
     })
   })
 })