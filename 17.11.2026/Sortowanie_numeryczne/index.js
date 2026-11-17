let values = [10,10.5,100,40.5,30,120]

const przycisk1 = document.getElementById("Przycisk1");
const przycisk2 = document.getElementById("Przycisk2");
const wynikP = document.getElementById("wynik");

wynikP.textContent = "Przed sortowaniem: " + values.join(", ");

przycisk1.addEventListener("click", function() {
    values.sort();
    wynikP.textContent = "Po sortowaniu alfabetycznym: " + values.join(", ");
});

przycisk2.addEventListener("click", function() {
    values.sort(function(a, b) {
        return a - b;
    });
    wynikP.textContent = "Po sortowaniu numerycznym: " + values.join(", ");
});