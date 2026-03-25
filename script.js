document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

        // ===================== VARIANT 1 =====================
        let numbers = [100, 30190, 11930, 5, 139200];
        let suma = 0;
        for (let i of numbers) {
            suma += i;
        }
        let average = suma / numbers.length;
        let maxNumber = Math.max(...numbers);
        let minNumber = Math.min(...numbers);
        numbers.sort((a, b) => a - b);

        console.log("=== Варіант 1: Обробка масиву чисел ===");
        console.log("Масив:", numbers);
        console.log("Сума:", suma);
        console.log("Середнє арифметичне:", average);
        console.log("Максимальне число:", maxNumber);
        console.log("Мінімальне число:", minNumber);
        console.log("Відсортований масив:", numbers);

        // ===================== VARIANT 2 =====================
        let users = [
            {name: "Катя", age: 17},
            {name: "Іра", age: 16},
            {name: "Діма", age: 17},
            {name: "Влад", age: 17},
            {name: "Олег", age: 20}
        ];

        let adultUsers = [];
        for (let user of users) {
            if (user.age > 18) {
                adultUsers.push(user);
            }
        }

        let names = [];
        for (let user of users) {
            names.push(user.name);
        }

        let totalAge = 0;
        for (let user of users) {
            totalAge += user.age;
        }
        let averageAge = totalAge / users.length;

        console.log("=== Варіант 2: Масив об'єктів ===");
        console.log("Всі користувачі:", users);
        console.log("Користувачі старші 18:", adultUsers);
        console.log("Масив імен:", names);
        console.log("Середній вік:", averageAge);

        // ===================== VARIANT 3 =====================
        let products = [
            {name: "Молоко", category: "Напої"},
            {name: "Хліб", category: "Хлібобулочні"},
            {name: "Сік", category: "Напої"},
            {name: "Булка", category: "Хлібобулочні"},
            {name: "Яблуко", category: "Фрукти"}
        ];

        let grouped = {};
        for (let product of products) {
            if (!grouped[product.category]) {
                grouped[product.category] = [];
            }
            grouped[product.category].push(product.name);
        }

        console.log("=== Варіант 3: Групування об'єктів ===");
        console.log("Груповані товари:", grouped);

        // ===================== VARIANT 4 =====================
        let students = {
            "Катя": {math: 90, english: 80, physics: 85},
            "Іра": {math: 70, english: 75, physics: 80},
            "Діма": {math: 85, english: 90, physics: 95}
        };

        console.log("=== Варіант 4: Обробка вкладених об'єктів ===");
        for (let student in students) {
            let sum = 0;
            let count = 0;
            for (let subject in students[student]) {
                sum += students[student][subject];
                count++;
            }
            let avg = sum / count;
            console.log(student + " — середній бал:", avg);
        }

        // ===================== VARIANT 5 =====================
        let people = ["Катя", "Іра", "Діма", "Влад"];
        let obj = {};
        for (let person of people) {
            obj[person] = person.length;
        }

        console.log("=== Варіант 5: Генерація об'єктів з масиву ===");
        console.log("Об'єкт з довжиною імен:", obj);
    }
});