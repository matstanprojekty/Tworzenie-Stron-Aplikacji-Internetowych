let names = ["ola", "ala", "janek", "adam"];

const przycisk = document.getElementById("Przycisk");
const wynikP = document.getElementById("wynik");

wynikP.textContent = "Przed sortowaniem: " + names.join(", ");

przycisk.addEventListener("click", function() {
    names.sort();
    wynikP.textContent = "Po sortowaniu: " + names.join(", ");
});