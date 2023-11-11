"use strict";

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */

const pageNavLinks = document.querySelectorAll('.scrollto');

pageNavLinks.forEach((pageNavLink) => {
	
	pageNavLink.addEventListener('click', (e) => {
		
		e.preventDefault();
		
		var target = pageNavLink.getAttribute("href").replace('#', '');
		
		//console.log(target);
		
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });

		
    });
	
});
function mymoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function mymoreFunction1() {
  var dots1 = document.getElementById("dots1");
  var more1Text = document.getElementById("more1");
  var btn1Text = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btn1Text.innerHTML = "Read more";
    more1Text.style.display = "none";
  } else {
    dots1.style.display = "none";
    btn1Text.innerHTML = "Read less";
    more1Text.style.display = "inline";
  }
}
function mymoreFunction3() {
  var dots3 = document.getElementById("dots3");
  var more3Text = document.getElementById("more3");
  var btn3Text = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btn3Text.innerHTML = "Read more";
    more3Text.style.display = "none";
  } else {
    dots3.style.display = "none";
    btn3Text.innerHTML = "Read less";
    more3Text.style.display = "inline";
  }
}
function mymoreFunction2() {
  var dots2 = document.getElementById("dots2");
  var more2Text = document.getElementById("more2");
  var btn2Text = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btn2Text.innerHTML = "Read more";
    more2Text.style.display = "none";
  } else {
    dots2.style.display = "none";
    btn2Text.innerHTML = "Read less";
    more2Text.style.display = "inline";
  }
}
function mymoreFunction4() {
  var dots4 = document.getElementById("dots4");
  var more4Text = document.getElementById("more4");
  var btn4Text = document.getElementById("myBtn4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btn4Text.innerHTML = "Read more";
    more4Text.style.display = "none";
  } else {
    dots4.style.display = "none";
    btn4Text.innerHTML = "Read less";
    more4Text.style.display = "inline";
  }
}
function mymoreFunction5() {
  var dots5 = document.getElementById("dots5");
  var more5Text = document.getElementById("more5");
  var btn5Text = document.getElementById("myBtn5");

  if (dots5.style.display === "none") {
    dots5.style.display = "inline";
    btn5Text.innerHTML = "Read more";
    more5Text.style.display = "none";
  } else {
    dots5.style.display = "none";
    btn5Text.innerHTML = "Read less";
    more5Text.style.display = "inline";
  }
}
 
