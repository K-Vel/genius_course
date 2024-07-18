const backdrop = document.querySelector(".backdrop");

const modalBtnOpenList = document.querySelectorAll(".modal-btn-open");

const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => backdrop.classList.toggle("hidden");

modalBtnOpenList.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});

modalBtnClose.addEventListener("click", toggleModal);
