/* Задание №1. Последнее значение цикла
Какое последнее значение выведет этот код? Почему? */

// let i = 3;
// while (i) {
//   alert(i--);
// }

// Выведет 1, потому что когда i = 0, условие будет false и цикл прекратит свою работу.

/* Задание №2.
Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
возрастанию, то удвоить их; в противном случае заменить значение каждой
переменной на противоположное. Вывести новые значения переменных A, B, C. */

// let a = +prompt("Введите Число A");
// let b = +prompt("Введите Число B");
// let c = +prompt("Введите Число C");

// if (a < b && b < c) {
//   a *= 2;
//   b *= 2;
//   c *= 2;
// } else {
//   a *= -1;
//   b *= -1;
//   c *= -1;
// }

/* Задание №3.
Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
возрастанию или убыванию, то удвоить их; в противном случае заменить значение
каждой переменной на противоположное. Вывести новые значения переменных A, B, C. */

// let a = +prompt("Введите Число A");
// let b = +prompt("Введите Число B");
// let c = +prompt("Введите Число C");

// if ((a < b && b < c) || (a > b && b > c)) {
//   a *= 2;
//   b *= 2;
//   c *= 2;
// } else {
//   a *= -1;
//   b *= -1;
//   c *= -1;
// }

/* Задание №4.
На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних
точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A */

// let a = +prompt("Введите Точку A");
// let b = +prompt("Введите Точку B");
// let c = +prompt("Введите Точку C");

// if (Math.abs(a - b) < Math.abs(a - c)) {
//   alert(b);
//   alert(
//     `точка B расположена ближе к точке А, Расстояние от А до В ${Math.abs(
//       a - b
//     )}`
//   );
// } else if (a - b > Math.abs(a - c)) {
//   alert(c);
//   alert(
//     `точка C расположена ближе к точке А, Расстояние от А до C ${Math.abs(
//       a - c
//     )}`
//   );
// } else {
//   alert(b, c);
//   alert(
//     `Точки B и С находятся на одинаковом расстоянии от точки А ${Math.abs(
//       a - c
//     )}`
//   );
// }

/* Задание №5.
Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом
координат, то вывести 0. Если точка не совпадает с начало координат, но лежит на оси
OX или OY, то вывести соответственно 1 или 2. Если точка не лежит на координатных
осях, то вывести 3. */

// let x = +prompt("Введите координаты точки X");
// let y = +prompt("Введите Координаты точки Y");

// if (x === 0 && y === 0) {
//   alert(0);
// } else if (x === 0) {
//   alert(1);
// } else if (y === 0) {
//   alert(2);
// } else {
//   alert(3);
// }

/* Задание №6.
Даны координаты точки, не лежащей на координатных осях OX и OY. Определить
номер координатной четверти, в которой находится данная точка. */

// let x = +prompt("Введите координаты точки X");
// let y = +prompt("Введите Координаты точки Y");

// if (x > 0 && y > 0) alert("Точка находится в I четверти");
// if (x < 0 && y > 0) alert("Точка находится в II четверти");
// if (x < 0 && y < 0) alert("Точка находится в III четверти");
// if (x > 0 && y < 0) alert("Точка находится в IV четверти");

/* Задание №7.
Даны целочисленные координаты трех вершин прямоугольника, стороны которого
параллельны координатным осям. Найти координаты его четвертой вершины. */

// let x1 = +prompt("Введите координаты точки x1");
// let y1 = +prompt("Введите координаты точки y1");

// let x2 = +prompt("Введите координаты точки x2");
// let y2 = +prompt("Введите координаты точки y2");

// let x3 = +prompt("Введите координаты точки x3");
// let y3 = +prompt("Введите координаты точки y3");

// if (x2 === x3) {
//   alert(`Координаты 4-ой вершины x: ${x1}`);
// } else if (x3 === x1) {
//   alert(`Координаты 4-ой вершины x: ${x2}`);
// } else {
//   alert(`Координаты 4-ой вершины x: ${x3}`);
// }

// if (y2 === y3) {
//   alert(`Координаты 4-ой вершины y: ${y1}`);
// } else if (y3 === y1) {
//   alert(`Координаты 4-ой вершины y: ${y2}`);
// } else {
//   alert(`Координаты 4-ой вершины y: ${y3}`);
// }

/* Задание №8.
Дан номер года (положительное целое число). Определить количество дней в этом
году, учитывая, что обычный год насчитывает 365 дней, а високосный — 366 дней.
Високосным считается год, делящийся на 4, за исключением тех годов, которые
делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются
високосными, а 1200 и 2000 — являются). */

// let year = +prompt("Введите номер года");

// if (year % 4 != 0 || year % 400 != 0) {
//   alert(365);
// } else if (year % 100 != 0) {
//   alert(366);
// } else {
//   alert(366);
// }

/* Задание №9.
Дано целое число. Вывести его строку-описание вида «отрицательное четное число»,
«нулевое число», «положительное нечетное число» и т. д. */

// let num = +prompt("Введите Номер");

// if (num === 0) {
//   alert("Нулевое");
// } else {
//   if (num > 0) {
//     alert("Положительное");
//   } else {
//     alert("Отрицательное");
//   }
//   if (num % 2 === 0) {
//     alert("Чётное");
//   } else {
//     alert("Нечётное");
//   }
// }

/*  Задание №10.
Дано целое число, лежащее в диапазоне 1–999. Вывести его строку- описание вида
«четное двузначное число», «нечетное трехзначное число» и т. д. 
*/

// let num = Math.floor(Math.random() * 999 + 1);
// console.log(num);
// let value;

// if (num % 2 === 0) {
//   value = "чётное";
// } else {
//   value = "нечётное";
// }

// if (num < 10) {
//   value += " однозначное число";
// } else if (num > 9 && num < 100) {
//   value += " двузначное число";
// } else {
//   value += " трёхзначное число";
// }
// console.log(value);

/* Задание №11. Какие значения выведет цикл while?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет? */

// Префиксный вариант ++i:

// let i = 0;
// while (++i < 5) alert(i);

// alert => 1,2,3,4

// Постфиксный вариант i++

// let i = 0;
// while (i++ < 5) alert(i);

// alert => 1,2,3,4,5

// Ответ: Оба цикла выводят разные значение, из-за их варианта объявления.Оператор ++i сначала увеличит i, а потом уже произойдёт сравнение. Оператор i++ увеличивает i, возвращая старое значение.

/* Задание №12. Какие значения выведет цикл for? */

// Постфиксная форма:

// for (let i = 0; i < 5; i++) alert(i);

// alert => 0,1,2,3,4

//Префиксная форма:

// for (let i = 0; i < 5; ++i) alert(i);

// alert => 0,1,2,3,4

// Ответ: Значения двух циклов будет одинаковым из-за алгоритма работы for. Увеличение i++ выполняется отдельно от проверки условия.

/* Задание №13. Выведите чётные числа */

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/* Задание №14. Замените for на while */

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;

// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

//Задание №15. Повторять цикл, пока ввод неверен

// for (;;) {
//   let number = prompt("Enter number > 100", "");
//   if (number > 100 || number == null) {
//     break;
//   } else {
//     alert("Введите число еще раз");
//   }
// }

/* Задание №16. Вывести простые числа */

// let n = 10;

// next: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue next;
//   }
//   alert(i);
// }

/* Задание №17 */

// let num1 = +prompt("Введите Число 1");
// let num2 = +prompt("Введите Число 2");
// alert(`среднее арифметическое 2-ух чисел: ${(num1 + num2) / 2}`);

/* Задание №18. */

// let num1 = +prompt("Введите Число 1");
// let sqrt = num1 ** 2;
// alert(`Квадрат числа: ${sqrt}`);

/* Задание №19. */

// let num1 = +prompt("Введите Число 1");
// let num2 = +prompt("Введите Число 2");
// let num3 = +prompt("Введите Число 3");
// let min = Math.min(num1, num2, num3);
// let max = Math.max(num1, num2, num3);
// let result = max - min;
// alert(result);

/* Задание №20 */

// for (;;) {
//   let num1 = +prompt("Введите Четное Число");
//   if (num1 % 2 === 0 || num1 === null) {
//     break;
//   } else {
//     alert("Попробуйте еще раз");
//   }
// }

/* Задание №21. */

// for (;;) {
//   let a = +prompt("Введите Число < 100");
//   if (a > 100 || a < 0) {
//     alert("Введите Число < 100");
//   }
//   let amount = a < 10 ? alert(`Кол-во цифр: 1`) : alert(`Кол-во цифр: 2`);
//   let sum =
//     a < 10
//       ? alert(`Cумма: ${a % 10}`)
//       : alert(`Сумма: ${parseInt((a % 10) + a / 10)}`);
//   break;
// }

/* Задание №22. */

// let number = +prompt("Введите Число Которое хотите перевести");
// let key = +prompt(
//   "Введите 1 если хотите перевести дюймы в сантиметры \n Введите 2 если хотите перевести сантиметры в дюймы"
// );
// let result;
// switch (key) {
//   case 1:
//     result = number * 2.54;
//     break;
//   case 2:
//     result = number * 0.3937;
//     break;
//   default:
//     result = 0;
// }
// alert(result);

/* Задание №23. Найти сумму или произведение цифр трехзначного числа */

// let number = +prompt("Введите Номер");
// let sum;
// let multiply;

// if (number % 2 === 0) {
//   alert("Число Четное");
//   sum =
//     number < 10
//       ? alert(`Cумма: ${number % 10}`)
//       : alert(`Сумма: ${parseInt((number % 10) + number / 10)}`);
// } else if (number % 2 === 1) {
//   alert("Число Нечетное");
//   sum =
//     number < 10
//       ? alert(`Произведение: ${number % 10}`)
//       : alert(`Произведение: ${parseInt(((number % 10) * number) / 10)}`);
// }

/* Задание №24. Определить существование треугольника по трем сторонам */

// let a = +prompt("Введите Сторону А");
// let b = +prompt("Введите Сторону B");
// let c = +prompt("Введите Сторону C");

// if (a + b > c && a + c > b && b + c > a) {
//   alert("Треугольник Существует");
// } else {
//   alert("Треугольник Не Существует");
// }

/* Задание №25. Принадлежность точки окружности */

// let x = +prompt("Введите х");
// let y = +prompt("Введите у");
// let r = +prompt("Введите радиус");

// let h = Math.sqrt(x ** 2 + y ** 2);

// if (h > r) {
//   alert("Точка не лежит внутри окружности");
// } else {
//   alert("Точка лежит внутри окружности");
// }

/* Задание №26. Объекты */

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.table(user);

/* Задание №27. Объекты-константы */

// const user = {
//   name: "John",
// };
// user.name = "Pete";

//Ответ: будет работать, содержимое обьекта можно менять. Нельзя изменить саму переменную.

/* Задание №28. Сумма свойств объекта */

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum;
// let value = Object.values(salaries);

// if (!salaries.hasOwnProperty()) {
//   sum = 0;
// }
// for (const el of value) {
//   sum += el;
// }
// alert(sum);

/* Задание №29. Бесконечный цикл по ошибке */

// Ответ: Этот цикл – бесконечный. Он никогда не завершится, почему?

// let i = 0;
// while (i != 10) {
//  i += 0.2;
// }

// Ответ: цикл бесконечный потому что i никогда не будет равно 10. При добавлении дробей происходит потеря точности.
