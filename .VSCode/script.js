function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')

// pegar a imagem dentro do div #profile
    const img = document.querySelector("#profile img");

    // alterar imagem e alt conforme o modo
    if(html.classList.contains('light')) {
        img.setAttribute("src", "./assets/Avatar.png");
        img.setAttribute("alt", "Logo raposa azul escuro na estética vaporwave com o nome Priscila Moura Code Studio.");
    } else {
        img.setAttribute("src", "./assets/Avatar.png");
        img.setAttribute("alt", "Logo raposa azul escuro na estética vaporwave com o nome Priscila Moura Code Studio.");
    }
}