("use strict");

const isMobile = {
  Andoroid: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Andoroid() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
if (isMobile.any()) {
  document.body.classList.add("_touch");
  let menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (event) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

// //  Scroll on click // data-goto=".class_name"
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

// if (menuLinks.length > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//   })

//   function onMenuLinkClick(event) {
//     const menuLink = event.target;
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       document.querySelector('header').offsetHeight
//       const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth"
//       });
//       event.preventDefault();
//     }
//   }

// }
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
;
// let x, i, j, l, ll, selElmnt, a, b, c;
// x = document.getElementsByClassName("custom-select");
// console.log(x);

// l = x.length;
// console.log(l);

// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[i];
//   console.log(selElmnt);

//   ll = selElmnt.length;
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   console.log(a);

//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);

//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {

//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function (e) {
//       a.setAttribute("style", "color:#000;");

//       let y, i, k, s, h, sl, yl;
//       s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//       sl = s.length;
//       h = this.parentNode.previousSibling;
//       for (i = 0; i < sl; i++) {
//         if (s.options[i].innerHTML == this.innerHTML) {
//           s.selectedIndex = i;
//           h.innerHTML = this.innerHTML;
//           y = this.parentNode.getElementsByClassName("same-as-selected");
//           yl = y.length;
//           for (k = 0; k < yl; k++) {
//             y[k].removeAttribute("class");
//           }
//           this.setAttribute("class", "same-as-selected");
//           break;
//         }
//       }
//       h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function (e) {
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }
// function closeAllSelect(elmnt) {
//   let x,
//     y,
//     i,
//     xl,
//     yl,
//     arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i);
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// document.addEventListener("click", closeAllSelect);

// select
for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
  });
}

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).style = "color:#000;"
    }
  });
}

window.addEventListener("click", function (e) {
  for (const select of document.querySelectorAll(".custom-select")) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }
});

function selectOption(index) {
  var optionOnIdx = document.querySelector(
    ".custom-option:nth-child(" + index + ")"
  );
  var optionSelected = document.querySelector(".custom-option.selected");
  if (optionOnIdx !== optionSelected) {
    optionSelected.parentNode
      .querySelector(".custom-option.selected")
      .classList.remove("selected");
    optionOnIdx.classList.add("selected");
    optionOnIdx
      .closest(".custom-select")
      .querySelector(".custom-select__trigger span").textContent =
      optionOnIdx.textContent;
  }
}
;
// When the user clicks anywhere outside of the modal, close it
//product modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.setAttribute(
      "style",
      "visibility:hidden; pointer-events: none; opacity: 0"
    );
  }
};
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.setAttribute(
      "style",
      "visibility:hidden; pointer-events: none; opacity: 0"
    );
  }
});

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
//   //   modal.style.display = "block";
//   //    modal.style.opacity = "1";
//   modal.setAttribute(
//     "style",
//     "visibility:visible; pointer-events: all; opacity: 1"
//   );
// };

function openModal() {
  modal.setAttribute(
    "style",
    "visibility:visible; pointer-events: all; opacity: 1"
  );
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.setAttribute(
//     "style",
//     "visibility:hidden; pointer-events: none; opacity: 0"
//   );
// };

//Slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");

  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active";
}
// End Slide

// chart size modal
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == prdCat) {
    prdCat.setAttribute(
      "style",
      "visibility:hidden; pointer-events: none; opacity: 0"
    );
  }
};
window.addEventListener("click", function (event) {
  if (event.target == prdCat) {
    prdCat.setAttribute(
      "style",
      "visibility:hidden; pointer-events: none; opacity: 0"
    );
  }
});

// Get the modal
let prdCat = document.getElementById("prdCat");

// Get the button that opens the modal
// let btn = document.getElementById("myBtn");

function openCategory() {
  prdCat.setAttribute(
    "style",
    "visibility:visible; pointer-events: all; opacity: 1"
  );
}
;
// ;
// ;
