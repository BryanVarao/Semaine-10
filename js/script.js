const boutons = document.querySelectorAll(".bouton");
const modal = document.querySelector(".modal");

for (let i = 0; i < boutons.length; i++) {
    const bouton = boutons[i];
    
    bouton.addEventListener("click", openModal);
}

function openModal(){
    const texte = document.createElement("div");
    texte.textContent = "fin";
    texte.classList.add("zoom");

    modal.appendChild(texte);
    modal.classList.add("visible");

    //Fermeture de la modale

    texte.addEventListener("click", closeModal);
}

function closeModal(e){
    modal.classList.remove("visible");
    modal.removeChild(e.currentTarget);
}