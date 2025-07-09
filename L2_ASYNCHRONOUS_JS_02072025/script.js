console.log("Script Start");

//This is a synchronous code example,which is not running in order.
// setTimeout(() => {
//     console.log("I AM GOING TO RESTAURANT");
// }, 4000);

// setTimeout(() => {
//     console.log("I AM CHECKING THE MENU FOR ORDERING");
// }, 3000);

// function walkInRestaurant(cb) {
//     console.log("I AM WALKING IN RESTAURANT");
//     setTimeout(cb, 2000);
// }

// function menuCheck(cb) {
//     console.log("I AM CHECKING THE MENU FOR ORDERING");
//     setTimeout(cb, 4000);
// }

// function orderFood(cb) {
//     console.log("I AM ORDERING FOOD");
//     setTimeout(cb, 6000);
// }

// function havingFood(cb) {
//     console.log("I AM HAVING FOOD");
//     setTimeout(cb, 8000);
// }

// function payBill(cb) {
//     console.log("I AM PAYING THE BILL");
//     setTimeout(cb, 3000);
// }

// function leaveRestaurant() {
//     console.log("I AM LEAVING THE RESTAURANT");
// }

// walkInRestaurant(() => {
//     menuCheck(() => {
//         orderFood(() => {
//             havingFood(() => {
//                 payBill(() => {
//                     leaveRestaurant();
//                 });
//             });
//         });
//     });
// });

//ARRAY OPERATIONS

// let arr = [2,3,4,7,8,9];
//     let arr2 = arr;

// function doubleArrVal(arr){
//     for(let i = 0 ; i < 6 ; i++)arr[i] *= 2;
// }

// doubleArrVal(arr);

// console.log(arr2);

// Array.prototype.doubleVal = function (data){
//     let output = [];

//     for(var i = 0 ; i < this.length ; i++){
//         output.push(this[i] * 2);
//     }

//     return output;
// }

// let arr = [1,2,3,4];