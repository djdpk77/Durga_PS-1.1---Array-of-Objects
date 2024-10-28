const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

const students = [
  { name: 'Alice', age: 19, grade: 'A' },
  { name: 'Bob', age: 17, grade: 'B' },
  { name: 'Charlie', age: 20, grade: 'C' },
  { name: 'David', age: 18, grade: 'B' },
];

const products = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Phone', price: 500, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Books' },
  { name: 'Pen', price: 2, category: 'Stationery' },
];

const employees = [
  { name: 'John', department: 'IT', salary: 60000 },
  { name: 'Jane', department: 'HR', salary: 50000 },
  { name: 'Doe', department: 'Finance', salary: 70000 },
  { name: 'Smith', department: 'HR', salary: 55000 },
];

const books = [
  { title: 'Book One', author: 'Author A', year: 2005 },
  { title: 'Book Two', author: 'Author B', year: 1995 },
  { title: 'Book Three', author: 'Author C', year: 2010 },
  { title: 'Book Four', author: 'Author D', year: 1980 },
];

const cars = [
  { make: 'Toyota', model: 'Corolla', mileage: 50000 },
  { make: 'Honda', model: 'Civic', mileage: 30000 },
  { make: 'Ford', model: 'Mustang', mileage: 40000 },
  { make: 'Tesla', model: 'Model 3', mileage: 10000 },
];

const sales = [
  { item: 'Laptop', quantity: 2, price: 1000 },
  { item: 'Phone', quantity: 5, price: 500 },
  { item: 'Book', quantity: 10, price: 20 },
  { item: 'Pen', quantity: 100, price: 2 },
];

const movies = [
  { title: 'Movie One', director: 'Director A', rating: 8 },
  { title: 'Movie Two', director: 'Director B', rating: 7 },
  { title: 'Movie Three', director: 'Director A', rating: 9 },
  { title: 'Movie Four', director: 'Director C', rating: 6 },
];

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Exercise 1
let studentsOlderThan18Years = students
  .filter((student) => student.age > 18)
  .map((student) => student.name);
console.log(studentsOlderThan18Years);

//Exercise 2
products.sort((a, b) => a.price - b.price);
console.log(products);

//Exercise 3
let employeesNotHR = employees.filter(
  (employee) => employee.department != 'HR'
);
console.log(employeesNotHR);

//Exercise 4
let booksbefore2000 = books.find((book) => book.year < 2000);
console.log('Title:' + booksbefore2000.title);
console.log('Author:' + booksbefore2000.author);
console.log('Year:' + booksbefore2000.year);

//Exercise 5
function updateCarMileage(cars, make, newMileage) {
  for (i = 0; i < cars.length; i++) {
    if (cars[i].make === make) {
      cars[i].mileage = newMileage;
      console.log('The updated mileage for ' + make + ' is ' + newMileage);
    }
  }
}

updateCarMileage(cars, 'Honda', 35000);

//Exercise 6
function calculateTotalRevenue(sales) {
  let totalRevenue = 0;
  for (i = 0; i < sales.length; i++) {
    totalRevenue = totalRevenue + sales[i].quantity * sales[i].price;
  }
  console.log('Total revenue of sales is ' + totalRevenue);
}

calculateTotalRevenue(sales);

//Exercise 7
function findMoviesByDirector(director) {
  for (i = 0; i < movies.length; i++) {
    if (movies[i].director === director) {
      console.log('Title: ' + movies[i].title);
      console.log('Director: ' + movies[i].director);
    }
  }
}

findMoviesByDirector('Director A');

//Exercise 8
const cricketers = [
  {
    name: 'Virat',
    eden_gardens: 72,
    wankhede_stadium: 88,
    feroz_shah_kotla: 45,
    chepauk: 74,
  },
  {
    name: 'Rohit',
    eden_gardens: 64,
    wankhede_stadium: 41,
    feroz_shah_kotla: 68,
    chepauk: 34,
  },
  {
    name: 'Shikhar',
    eden_gardens: 54,
    wankhede_stadium: 38,
    feroz_shah_kotla: 72,
    chepauk: 44,
  },
  {
    name: 'Rishabh',
    eden_gardens: 22,
    wankhede_stadium: 27,
    feroz_shah_kotla: 34,
    chepauk: 51,
  },
];

function printScores(cricketers) {
  for (i = 0; i < cricketers.length; i++) {
    console.log('\nCricketer:' + cricketers[i].name);
    console.log('Eden Gardens:' + cricketers[i].eden_gardens);
    console.log('Wankhede Stadium:' + cricketers[i].wankhede_stadium);
    console.log('Feroz Shah Kotla:' + cricketers[i].feroz_shah_kotla);
    console.log('Chepauk:' + cricketers[i].chepauk);
  }
}

printScores(cricketers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
