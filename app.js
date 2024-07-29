// ================================================------ CAROUSEL SECTION -------==========================================================

let flag = 0;

function controller(x) {
  flag = flag + 1;

  slideshow(flag);
}
slideshow(flag);

function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  // console.log(slides)

  if (num == slides.length) {
    flag = 0;
    num = 0;
  }

  // if (num > 0) {
  //   flag = slides.length - 1;
  //   num = slides.length - 1;
  // }

  for (let y of slides) {
    y.style.display = "none";
  }

  // slides[num].style.display = "flex";
}

// =========================================================---------  Hamburger  ---------=============================================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  navMenu.classList.toggle("active");
});

// =============================================================-----------  login popup ------------====================================

document.querySelector("#show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".pay-container").classList.remove("active");
});

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });
// footer login
  document.querySelector("#show-logins").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".pay-container").classList.remove("active");
  });
  
  document
    .querySelector(".popup .close-btn")
    .addEventListener("click", function () {
      document.querySelector(".popup").classList.remove("active");
    });

// =============================================================-----------  JoinNow popup ------------====================================

document.querySelector("#join").addEventListener("click", function () {
  document.querySelector(".pay-container").classList.add("active");
  document.querySelector(".popup").classList.remove("active");
});

document
  .querySelector(".pay-container .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".pay-container").classList.remove("active");
  });

// =================================================================== -------------  Buy now -------------=================================

document.querySelector("#buy").addEventListener("click", function () {
  document.querySelector(".pay-container").classList.add("active");
  // document.querySelector(".popup").classList.remove("active");
});
document
  .querySelector(".pay-container .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".pay-container").classList.remove("active");
  });

//
document.querySelector("#buy1").addEventListener("click", function () {
  document.querySelector(".pay-container").classList.add("active");
});
document
  .querySelector(".pay-container .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".pay-container").classList.remove("active");
  });

//
document.querySelector("#buy2").addEventListener("click", function () {
  document.querySelector(".pay-container").classList.add("active");
});
document
  .querySelector(".pay-container .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".pay-container").classList.remove("active");
  });
