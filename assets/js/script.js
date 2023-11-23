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