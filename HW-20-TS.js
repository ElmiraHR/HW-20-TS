// Задание 1: Класс Animal и его наследник Dog
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Определение класса Animal
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species; // Инициализация свойств
    }
    Animal.prototype.sound = function () {
        console.log("The animal makes a sound"); // Метод, выводящий звук животного
    };
    return Animal;
}());
// Определение класса Dog, наследующего от Animal
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, species, breed) {
        var _this = _super.call(this, name, species) || this; // Вызов конструктора родительского класса
        _this.breed = breed; // Инициализация породы
        return _this;
    }
    Dog.prototype.sound = function () {
        console.log("The dog barks"); // Переопределенный метод, выводящий звук собаки
    };
    return Dog;
}(Animal));
// Пример использования классов Animal и Dog
var animal = new Animal("Generic Animal", "Unknown");
animal.sound(); // Ожидаемый вывод: "The animal makes a sound"
var dog = new Dog("Buddy", "Dog", "Golden Retriever");
dog.sound(); // Ожидаемый вывод: "The dog barks"
console.log("\n");
// Задание 2: Статическое свойство для учета всех книг
var Library = /** @class */ (function () {
    function Library() {
        // Конструктор, который ничего не делает
    }
    Library.addBook = function () {
        this.totalBooks++; // Увеличиваем общее количество книг
    };
    Library.totalBooks = 0; // Статическое свойство для общего количества книг
    return Library;
}());
// Пример использования класса Library
Library.addBook(); // Добавляем первую книгу
Library.addBook(); // Добавляем вторую книгу
console.log("Задание 2: Общее количество книг в библиотеке:", Library.totalBooks); // Ожидаемый вывод: 2
console.log("\n");
// Задание 3: Переопределение конструктора в классе Vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make; // Инициализация марки
        this.model = model; // Инициализация модели
    }
    return Vehicle;
}());
// Определение класса Motorcycle, наследующего от Vehicle
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, type) {
        var _this = _super.call(this, make, model) || this; // Вызов конструктора родительского класса
        _this.type = type; // Инициализация типа мотоцикла
        return _this;
    }
    return Motorcycle;
}(Vehicle));
// Пример использования классов Vehicle и Motorcycle
var motorcycle = new Motorcycle("Yamaha", "MT-07", "Sport");
console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0435 3: \u041C\u043E\u0442\u043E\u0446\u0438\u043A\u043B - \u041C\u0430\u0440\u043A\u0430: ".concat(motorcycle.make, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(motorcycle.model, ", \u0422\u0438\u043F: ").concat(motorcycle.type));
// Ожидаемый вывод: Мотоцикл - Марка: Yamaha, Модель: MT-07, Тип: Sport
