// Append header and footer to applicable pages (excludes home page)
$(document).ready(function(){
  if($.mobile.activePage == null || !$.mobile.activePage.attr("id") == "home") {
    $("[id='header'], [id='footer']").toolbar();
  }
});

// Redirect to home page 
function gotoHome() {
 $.mobile.changePage("#home");
}
