const listButton = document.querySelectorAll("ul > li");
const loginButton = listButton.item(2);                          // Selection du bouton login //
loginButton.addEventListener('click', (e) => { 
    document.location.href=".//login.html"; 
    sessionStorage.clear();
});

const projectButton = listButton.item(0);                          // Selection du bouton Projet //
projectButton.addEventListener('click', (e) => { 
    document.location.href=".//index.html"; 
});