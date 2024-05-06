const buttonAll = document.getElementById("all");
const buttonObjects = document.getElementById("objects");
const buttonApparts = document.getElementById("apparts");
const buttonHotels = document.getElementById("hotels");
const figureElements = figureContainer.getElementsByClassName("figurecard");
const buttonContainer = document.querySelectorAll(".filters > div");

let elementArrayCopy = [];

    const filterAction = (selectedButtonIndex, categoryId) => {
            for (let i = 0; i < buttonContainer.length; i++) {
                buttonContainer.item(i).classList.toggle("selected", i === selectedButtonIndex);
            }

            elementArrayCopy = elementArray.filter((element) => element.categoryid === categoryId || categoryId === null);
            affichageProjet(elementArrayCopy);
        }

        buttonAll.addEventListener('click', () => filterAction(0, null));
        buttonObjects.addEventListener('click', () => filterAction(1, 1));
        buttonApparts.addEventListener('click', () => filterAction(2, 2));
        buttonHotels.addEventListener('click', () => filterAction(3, 3));

