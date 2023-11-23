window.onscroll = function () {
  if (pageYOffset >= 300) {
    document.getElementById('backToTop').style.visibility = "visible"
  } else {
    document.getElementById('backToTop').style.visibility = "hidden";
  }
};

$('.page-scroll').on('click', function (e) {
  const tujuan = $(this).attr('href');
  const elemenTujuan = $(tujuan);

  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 55
  }, 1250);


  e.preventDefault();
})


function myDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}