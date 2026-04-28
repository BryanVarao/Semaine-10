const buttons = document.querySelectorAll(".ouvrir");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", openModal);
}

close.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("visible");
}

function closeModal() {
    modal.classList.remove("visible");
}