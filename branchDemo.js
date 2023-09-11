/**
 * FileName: branchDemo.js
 * Author: Vishrut Thoutam
 * Objective: demonstrate how to use github branches
 */

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const d = new Date()
const day = d.getDay()
const year = d.getFullYear()

let month = months[d.getMonth()]

console.log("The month is: ", month)
console.log("The day is: ", day)
console.log("The year is: ", year)