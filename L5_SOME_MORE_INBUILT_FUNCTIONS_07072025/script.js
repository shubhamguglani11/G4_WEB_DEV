console.log("Script is running");
// let student1 = {
//     name : "Shivansh",
//     class : "G4"
// }

// function wlecomeStudent(welcomeMessage , goodByeMessage){
//     console.log(welcomeMessage + " " + this.name + " " + "is a studnet of class " + this.class + " " + goodByeMessage);
// }

// let call = wlecomeStudent.bind(student1 , "Good Morning" , "Byee");
// call();

//CURRYING FUNCTION

// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// };

// let result = add(5)(10)(15);
// console.log(result);

//SUBWAY ORDER

//1. CHOOSE BREAD
//2. CHOOSE FILLING
//3. CHOOSE SAUCE
// function chooseBread(bread) {
//     return function(filling) {
//         return function(sauce) {
//             return `You have ordered a sandwich with ${bread} bread, ${filling} filling, and ${sauce} sauce.`;
//         }
//     }
// }

// let order = chooseBread("Whole Wheat")("Grilled Chicken")("Chipotle Mayo");
// console.log(order);

//EVENT CAPTURE AND BUBBLING

const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", ()=> {
    console.log("Grandparent clicked");
}, true);

parent.addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

child.addEventListener("click", () => {
    console.log("Child clicked");
}, true);