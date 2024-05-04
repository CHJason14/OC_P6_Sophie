let figureContainer = document.querySelector(".gallery");                 // Selection de la classe gallery //

let elementArray = [];

const affichageProjet = (elementArray) => {
    while (figureContainer.firstChild) {
        figureContainer.removeChild(figureContainer.firstChild);
    }
    
    for (let i = 0; i < elementArray.length; i++) {
        const element = elementArray[i];
        const figureElement = document.createElement("figure");                 // Création d'une balise figure //
        figureContainer.appendChild(figureElement);                         // Enfant de .gallery //
        figureElement.classList.add("figurecard");                          // Ajout class figurecard a chaque figure //
        figureElement.id = element.id;
        var imagejavascript = document.createElement("img");
        imagejavascript.src = element.src;
        imagejavascript.alt = element.title;
        figureElement.appendChild(imagejavascript);
        var titleElement = document.createElement("figcaption");
        titleElement.innerHTML = element.title;
        figureElement.appendChild(titleElement);
        console.log(element)
    }
 };

fetch("http://localhost:5678/api/works", )
    .then((res) => {
        return res.json();
    })
    .then ((works) => {
        for (const work of works) {
            elementArray.push({id: work.id, src: work.imageUrl, title: work.title, categoryid: work.category.id});
        }
        affichageProjet(elementArray);
    })
    .catch((err) => console.log(err));
