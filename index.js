// Challenge Day 1
const name = "Syifa Fauziyah Arizal";
let age = 20;
let status = "learning JavaScript";
console.log(`Hello!\nMy name is  ${name}.\nI am ${age} years old.\nToday I'm ${status}.`);

const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`Today is ${day}/${month}/${year}, at ${hours}:${minutes < 10 ? "0" + minutes : minutes}`);