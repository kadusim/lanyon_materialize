$(function(){
  $('.button-collapse').sideNav({
    menuWidth: 300, // dafault
    draggable: true,
    onOpen: function(el) { openNavBar() },
    onClose: function(el) { closeNavBar() }
  }); // end of document ready
});

function openNavBar() {
  $("main").animate({ "padding-left": "+=300px" }, 200 );
}

function closeNavBar() {
  $("main").animate({ "padding-left": "-=300px" }, 200 );
}
