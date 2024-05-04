var storageToken = sessionStorage.getItem("tokens");
const titlePortfolio = document.querySelector("#portfolio > h2");                     // Séléction du h2 dans la section portfolio //
const mainContainer = document.querySelector("main");                    // Séléction du main //
const bodyContainer = document.querySelector("body");                    // Séléction du body //
const modifyHeader = document.querySelector(".modifyHeader");
const mainHeader = document.querySelector(".mainHeader");
const filterContainer = document.querySelector(".filters");

if (storageToken) {                              // Modification de la page si l'utilisateur est connecté //  
    loginButton.textContent = "logout";                     // Changement contenu du login en logout si token true //
    const modifyElement = document.createElement("span");                              // Création d'un span // 
    titlePortfolio.appendChild(modifyElement);                              // Dans le h2 //
    modifyElement.textContent = "Modifier";                              // Ajout d'un texte //
    mainHeader.style.marginTop = "97px";
    modifyHeader.classList.remove("displayNone");
    const editionElement = document.createElement("span");
    modifyHeader.appendChild(editionElement);
    editionElement.textContent = "Mode édition";
    filterContainer.classList.add("hidden");
    }


// Ajout class hidden a la section flitres //