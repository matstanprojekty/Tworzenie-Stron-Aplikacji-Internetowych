const lotto = [];
let number = 1; //pomocnicza zmienna
for (let x = 0; x < 7; x++) {
    lotto[x] = [];
    for (let y = 0; y < 7; y++) {
        lotto[x][y] = number++;
    }
}
for (let x = 0; x < 7; x++) {
    document.write(lotto[x].join(" | ") + "<br>");
}

const button1 = document.getElementById("losowanie");
const score = document.getElementById("wynik");
const date = document.getElementById("data");

button1.addEventListener("click", function() {
        const wylosowane = [];

        while(wylosowane.length < 6) {
            let liczba = Math.floor(Math.random() * 49) + 1;
        if (!wylosowane.includes(liczba)) {
            wylosowane.push(liczba);
        }
    }

    wylosowane.sort(function(a , b) {
        return a - b;
    });

    score.textContent = "Wylosowane liczby to: " + wylosowane.join(" , "); 

    const now = new Date();
    const sformatowanaData = now.toLocaleString();
    // Wyświetlamy datę w akapicie "data"
    date.textContent = "Data losowania: " + sformatowanaData;
});


