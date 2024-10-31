
window.onscroll = function() {
    const header = document.getElementById('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('scrolled');
      let line = document.getElementById('line');
      line.style.visibility = "visible";

    } else {
      header.classList.remove('scrolled');
      line.style.visibility = "hidden";
    }
}

// Slick slider init

$(".slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    draggable: true
  });
  