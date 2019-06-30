$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      $(".Navbar").css("background", "#343a40");
      $(".Navbar").css("color", "#fff");
    }
    else {
      $(".Navbar").css("background", "none");
      $(".Navbar").css("color", "#fff");
    }
  })
})

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
