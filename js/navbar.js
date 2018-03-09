(function($){
  $(function(){
    $('.button-collapse').sideNav({
      menuWidth: 300, // dafault
      draggable: true,
      onOpen: function(el) { openNavBar() },
      onClose: function(el) { closeNavBar() }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

// $('.button-collapse').sideNav();

function openNavBar() {
  $("main").css({
    "padding-left":"300px"
  });
}

function closeNavBar() {
  $("main").css({
    "padding-left":"0px"
  });
}
