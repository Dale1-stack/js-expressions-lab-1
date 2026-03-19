
const temp_in_celsius = [25, 18, 15, 28, 20, 22, 19, 21, 23, 26, 24, 27, 17, 29, 30];
const temp_in_fahrenheit = [32, 70, 80, 72, 75, 68, 82, 65, 77, 73, 78, 79, 71, 74, 76];

const celsius_to_fahrenheit = (temp) => (temp * 9) / 5 + 32;
const fahrenheit_to_celsius = (temp) => ((temp - 32) * 5) / 9;

const tot_temperature_in_fahrenheit = temp_in_celsius.reduce((acc, temp) => acc + celsius_to_fahrenheit(temp), 0);
const tot_temperature_in_celsius = temp_in_fahrenheit.reduce((acc, temp) => acc + fahrenheit_to_celsius(temp), 0);  

const tot_temperature_in_fahrenheit_conv = (tot_temperature_in_celsius * 9 / 5) + (32 * temp_in_celsius.length + 32 * temp_in_fahrenheit.length);
const tot_temperature_in_celsius_conv= ((tot_temperature_in_fahrenheit - (32 * temp_in_celsius.length + 32 * temp_in_fahrenheit.length)) * 5) / 9;

console.log(tot_temperature_in_celsius);
console.log(tot_temperature_in_fahrenheit);

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / temp_in_celsius.length;
const avg_temperature_in_celsius = tot_temperature_in_celsius / temp_in_fahrenheit.length;

console.log(avg_temperature_in_celsius);
console.log(avg_temperature_in_fahrenheit);

console.log(`Total temperature in Fahrenheit: ${tot_temperature_in_fahrenheit}`);
console.log(`Total temperature in Celsius: ${tot_temperature_in_celsius}`);
console.log(`Average temperature in Fahrenheit: ${avg_temperature_in_fahrenheit}`);
console.log(`Average temperature in Celsius: ${avg_temperature_in_celsius}`);

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};