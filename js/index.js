const elButton = document.querySelector(".header__btn");
const nav = document.querySelector(".header__nav");

elButton.addEventListener("click", function () {
  nav.classList.toggle("open");
});

const box1 = document.querySelector(".item__box-one");
const box2 = document.querySelector(".item__box-two");

const text1 = document.querySelector(".item__text-one");
const text2 = document.querySelector(".item__text-two");

box1.addEventListener("click", function () {
  text1.classList.toggle("open__text");
});
box2.addEventListener("click", function () {
  text2.classList.toggle("open__text");
});
