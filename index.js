// Problem 1:
function seerToMon(seer) {
// Negative seer alert
if (seer < 0) {
return "Please input a positive number";
}
// seer to mon conversion
else {
mon = seer / 40;
return mon;
}
}
/* const convertedMon = seerToMon(50000);
console.log(convertedMon); */
// Problem 2:
function totalSales(shirt, pant, shoe) {
// per shirt,pant and shoe price
const perShirt = 100;
const perPant = 200;
const perShoe = 500;
// indivisully shirt pant and shoe price
let shirtTotal = perShirt * shirt;
let pantTotal = perPant * pant;
let shoeTotal = perShoe * shoe;
// total price
let totalPrice = shirtTotal + pantTotal + shoeTotal;
// wrong input alert
if (shirt < 0 || pant < 0 || shoe < 0) {
return "Sorry Sales cannot be negative"
}
else {
return totalPrice;
}
}
/* let mySales = totalSales(2, 2, 10);
console.log(mySales); */
// Problem 3
function deliveryCost(tshirt) {
// per tshirt delivery cost
const costPerHundred = 100;
const costPerToTwoHundred = 80;
const costPerTwoHundredUp = 50;
// alert for negative input
if (tshirt < 0) {
return "Please insert a valid number. Items cannot be negative"
}
// cost condition for upto 100 tshirt
else if (tshirt <= 100) {
let totalCost = tshirt * costPerHundred;
return totalCost;
}
// condition for 101 tshirt to 200
else if (tshirt <= 200) {
const firstHundredCost = 100 * costPerHundred;
let rest = tshirt - 100;
let restCost = rest * costPerToTwoHundred;
let totalCost = restCost + firstHundredCost;
return totalCost;
}
// condition for more than 200 tshirt
else {
const firstHundredCost = 100 * costPerHundred;
const secondHundredCost = 100 * costPerToTwoHundred;
let rest = tshirt - 200;
let restCost = rest * costPerTwoHundredUp;
let totalCost = firstHundredCost + secondHundredCost + restCost;
return totalCost;
}
}
/* let myTshirt = deliveryCost(-1);
console.log(myTshirt); */
// Problem 4
function perfectFriend(friends) {
// alert if there is no array as input
if (typeof friends != "object") {
return "You must insert an array of your friends name"
}
else {
// Loop for checking the names
for (i = 0; i < friends.length; i++) {
let perfect = friends[i];
if (perfect.length == 5) {
return perfect;
}
}
return "I have no perfect friend";
}
}
/* let friendsIn = perfectFriend(["Akil", "Mizu", "Shafiq", "Dhanonjoy", "Rakib"]);
console.log(friendsIn); */
