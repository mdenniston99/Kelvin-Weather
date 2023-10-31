// The forcaste for the day is 293 kelvin
const kelvin = 0;
// I converted kelvin into celsius
const celsius = kelvin - 273;
//converted celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

//so i dont get a decimal number using .floor it rounds down to the nearest number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
