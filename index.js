// Javascript
function myscroll(about) {
  var offset = jQuery("#" + about).offset();
  window.scrollTo(0, offset.top);
}

function myscroll(skill) {
  var offset = jQuery("#" + skill).offset();
  window.scrollTo(0, offset.top);
}

function myscroll(services) {
  var offset = jQuery("#" + services).offset();
  window.scrollTo(0, offset.top);
}

function myscroll(work) {
  var offset = jQuery("#" + work).offset();
  window.scrollTo(0, offset.top);
}

function myscroll(contact) {
  var offset = jQuery("#" + contact).offset();
  window.scrollTo(0, offset.top);
}

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];

var currentDate = d.getDate() + " " + n + "," + " " + d.getFullYear();
document.getElementById("today").innerHTML = currentDate;

// jQuery
$(document).ready(function () {
  $(function () {
    $("#abt").click(function () {
      $(this).hide();
      return false;
    });
  });

  $(".nextpg").click(function () {
    $(".ip_scd").show();
  });

  $(".return").click(function () {
    $(".ip_scd").hide();
    $(".ip_home").fadeIn();
  });

  $("#s1").click(function () {
    $(".edbg_text").hide();
    $(".exp_text").hide();
    $(".bio_text").show();
    $(".ip_scd #s1").addClass("icon-active");
    $(".ip_scd #s2").removeClass("icon-active");
    $(".ip_scd #s3").removeClass("icon-active");
  });
  $("#s2").click(function () {
    $(".bio_text").hide();
    $(".exp_text").hide();
    $(".edbg_text").show();
    $(".ip_scd #s2").addClass("icon-active");
    $(".ip_scd #s1").removeClass("icon-active");
    $(".ip_scd #s3").removeClass("icon-active");
  });
  $("#s3").click(function () {
    $(".bio_text").hide();
    $(".edbg_text").hide();
    $(".exp_text").show();
    $(".ip_scd #s3").addClass("icon-active");
    $(".ip_scd #s1").removeClass("icon-active");
    $(".ip_scd #s2").removeClass("icon-active");
  });

  $(window).scroll(function () {
    var wh = $(window).height() - 50;
    if ($(window).scrollTop() > $("#HTML").offset().top - wh) {
      $("#HTML .progress-done").addClass("htmlAni");
      $("#CSS .progress-done").addClass("cssAni");
      $("#JavaScript .progress-done").addClass("jsAni");
      $("#BootStrap .progress-done").addClass("btAni");
      $("#jQuery .progress-done").addClass("jqAni");
    }
  });
});

//AOS
AOS.init();

// GSAP
gsap.from(".navbar .navbar-brand", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: -10,
});
gsap.from(".navbar .nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
