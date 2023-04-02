const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");
const Prev = document.getElementById("prev");
const Next = document.getElementById("next");
const imgSlider = document.querySelector(".img-slider");

// slide home heseg
export function slide() {
  let slideNumber = 0;
  let numberOfSlides = slides.length;

  let manualNav = function (manual) {
    slides.forEach((slide1) => {
      slide1.classList.remove("active");

      btns.forEach((btn1) => {
        btn1.classList.remove("active");
      });
    });

    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
  };

  btns.forEach((btn1, i) => {
    btn1.addEventListener("click", () => {
      manualNav(i);
      slideNumber = i;
    });
  });

  Next.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    btns.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideNumber++;

    slideNumber > numberOfSlides - 1 ? (slideNumber = 0) : false;

    slides[slideNumber].classList.add("active");
    btns[slideNumber].classList.add("active");
  });

  Prev.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    btns.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideNumber--;

    slideNumber < 0 ? (slideNumber = numberOfSlides - 1) : false;

    slides[slideNumber].classList.add("active");
    btns[slideNumber].classList.add("active");
  });

  let playSlider;

  function repeat() {
    playSlider = setInterval(function () {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      btns.forEach((slide) => {
        slide.classList.remove("active");
      });

      slideNumber++;

      slideNumber > numberOfSlides - 1 ? (slideNumber = 0) : false;

      slides[slideNumber].classList.add("active");
      btns[slideNumber].classList.add("active");
    }, 10000);
  }
  repeat();

  imgSlider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
  });

  imgSlider.addEventListener("mouseout", () => {
    repeat();
  });
}
