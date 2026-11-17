const cars = ["BMW", "Audi", "Toyota"];

for (let car of cars) {
    document.write(car + "<br>"); // Zmienna 'car' od razu przechowuje wartość elementu (np. "BMW")
}

const numbers = [];
// 1. Tworzenie macierzy 10x10 ze współrzędnymi
for (let x = 0; x < 10; x++) {
    numbers[x] = [];
    for (let y = 0; y < 10; y++) {
        numbers[x][y] = x + "," + y;
    }
}

// 2. Wyświetlanie w przeglądarce z separatorem i nową linią
for (let x = 0; x < 10; x++) {
    document.write(numbers[x].join(" || ") + "<br>");
}