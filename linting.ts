import { readFile } from "fs/promises";


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


const read = async (path: string): Promise<void> => {
  try {
    const data = await readFile(path, "utf-8");
    console.log(`File content:\n${data}`);
  } catch (error) {
    console.error(`Failed to read file at ${path}:`, error);
  }
};

export default read;

const getData = async (url: string): Promise<unknown> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${url}: ${error}`);
  }
};

const process = (data: number[]): number[] => {
    return data.
    filter((x: number): boolean => {
      return x > 10;
    })
    .map((x: number): number => {
      return x * 2;
    });
};

const logErr = (message: string):void => {
    console.error(`Error: ${message}`);
}; 
