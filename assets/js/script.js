window.onscroll = function () {
  if (pageYOffset >= 300) {
    document.getElementById('backToTop').style.visibility = "visible"
  } else {
    document.getElementById('backToTop').style.visibility = "hidden";
  }
};