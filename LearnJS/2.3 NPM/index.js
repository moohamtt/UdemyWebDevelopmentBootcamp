// let generateName = require("sillyname");

import generateName from "sillyname";
import superheroes from "superheroes";

let name = generateName();
let hero = superheroes.random();

console.log(`My name is ${name}.`);
console.log(`I am ${hero}.`);