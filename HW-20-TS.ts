// Задание 1: Класс Animal и его наследник Dog

// Определение класса Animal
class Animal {
    name: string; // Имя животного
    species: string; // Вид животного

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species; // Инициализация свойств
    }

    sound() {
        console.log("The animal makes a sound"); // Метод, выводящий звук животного
    }
}

// Определение класса Dog, наследующего от Animal
class Dog extends Animal {
    breed: string; // Порода собаки

    constructor(name: string, species: string, breed: string) {
        super(name, species); // Вызов конструктора родительского класса
        this.breed = breed; // Инициализация породы
    }

    sound() {
        console.log("The dog barks"); // Переопределенный метод, выводящий звук собаки
    }
}

// Пример использования классов Animal и Dog
const animal = new Animal("Generic Animal", "Unknown");
animal.sound(); // Ожидаемый вывод: "The animal makes a sound"

const dog = new Dog("Buddy", "Dog", "Golden Retriever");
dog.sound(); // Ожидаемый вывод: "The dog barks"
console.log("\n");

// Задание 2: Статическое свойство для учета всех книг

class Library {
    static totalBooks: number = 0; // Статическое свойство для общего количества книг

    constructor() {
        // Конструктор, который ничего не делает
    }

    static addBook() {
        this.totalBooks++; // Увеличиваем общее количество книг
    }
}

// Пример использования класса Library
Library.addBook(); // Добавляем первую книгу
Library.addBook(); // Добавляем вторую книгу

console.log("Задание 2: Общее количество книг в библиотеке:", Library.totalBooks); // Ожидаемый вывод: 2
console.log("\n");

// Задание 3: Переопределение конструктора в классе Vehicle

class Vehicle {
    make: string; // Марка
    model: string; // Модель

    constructor(make: string, model: string) {
        this.make = make; // Инициализация марки
        this.model = model; // Инициализация модели
    }
}

// Определение класса Motorcycle, наследующего от Vehicle
class Motorcycle extends Vehicle {
    type: string; // Тип мотоцикла

    constructor(make: string, model: string, type: string) {
        super(make, model); // Вызов конструктора родительского класса
        this.type = type; // Инициализация типа мотоцикла
    }
}

// Пример использования классов Vehicle и Motorcycle
const motorcycle = new Motorcycle("Yamaha", "MT-07", "Sport");
console.log(`Задание 3: Мотоцикл - Марка: ${motorcycle.make}, Модель: ${motorcycle.model}, Тип: ${motorcycle.type}`); 
// Ожидаемый вывод: Мотоцикл - Марка: Yamaha, Модель: MT-07, Тип: Sport
