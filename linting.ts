const greet = (firstName: string) => {
    return `Hello ${  firstName}`;
}; 
greet('Student'); 

const double = (n: number) => {
    return n * 2;}; 
    console.log(double(5)); 

const isEven = (num: number) => {
    return num % 2 === 0;};
    console.log(isEven(4));

const square = (x: number) => {return x * x;}; 

const getAge = (year: number) => {
    const age = 2026 - year;
    console.log(`Calculated age for the birth year ${year} is : ${age}`);
    return age;
};

const prices = [10, 20, 30]; 
let total = 0; 
prices.map(p => {return total += p;}); 

const user = { name:'John' }; 
const sayHi = () => {return console.log(`Hi ${  user.name}`);}; 

const colors = ['red', 'blue']; 
colors.forEach(c => {return console.log(`Color: ${  c}`);}); 

const items = [1, 2, 3]; 
const doubled = items.map(i => {return i * 2;}); 

type checkAuth = {
     isAdmin: boolean 
};

const checkAuth = (user: checkAuth) => {return user.isAdmin;};
console.log(checkAuth({ isAdmin:false }));
