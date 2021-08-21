// Opacity scroll effect
$(window).on("scroll", function () {
  if (window.scrollY > 810) {
    $("#navbar").css("opacity", "0.9");
  } else {
    $("#navbar").css("opacity", "1");
  }
});

// Smooth Scrolling

$("#navbar a, .read-more").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top - 58
    }, 800);
  }
});