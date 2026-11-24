function formatuj(kolor) {
    const paragraf = document.getElementById("tekst-przykladowy");
    const rozmiar = document.getElementById("rozmiar").value;
    const styl = document.getElementById("styl-czcionki").value;

    paragraf.style.color = kolor;

    if (rozmiar !== "") {
        paragraf.style.fontSize = rozmiar + "%";
    }
    paragraf.style.fontStyle = styl;
}

function zastosujStyl() {
    const paragraf = document.getElementById("tekst-przykladowy");
    const styl = document.getElementById("styl-czcionki").value;

    paragraf.style.fontStyle = styl;
}