const greet = firstName => {return `Hello ${  firstName}`;}; 
greet('Student'); 

const double = n => {return n * 2;}; 
console.log(double(5)); 

const isEven = num => {return num % 2 === 0;};
//console.log(isEven(4));  Do I add this line manually?

const square = x => {return x * x;}; 

const getAge = year => {return 2026 - year;}; 
//console.log(`Calculated age: ${getAge(1990)}`);

const prices = [10, 20, 30]; 
let total = 0; 
prices.map(p => {return total += p;}); 

const user = { name:'John' }; 
const sayHi = () => {return console.log(`Hi ${  user.name}`);}; 

const colors = ['red', 'blue']; 
colors.forEach(c => {return console.log(`Color: ${  c}`);}); 

const items = [1, 2, 3]; 
const doubled = items.map(i => {return i * 2;}); 

const checkAuth = user => {return !!user.isAdmin;}; 
