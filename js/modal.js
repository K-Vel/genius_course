import { disableScroll, enableScroll } from "./utils.js";

const backdrop = document.querySelector(".backdrop");
const modalBtnOpenList = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => {
  backdrop.classList.toggle("hidden");
  if (backdrop.classList.contains("hidden")) {
    enableScroll();
  } else {
    disableScroll();
  }
};

modalBtnOpenList.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});

modalBtnClose.addEventListener("click", toggleModal);
