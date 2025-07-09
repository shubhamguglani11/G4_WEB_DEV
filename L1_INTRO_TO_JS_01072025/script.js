// console.log("HELLO WORLD");

// var a = 123;
// console.log(a);

// function abc(){
//     console.log("This is function abc");
// }
// function hgf(){
//         console.log("This is function hgf");
// }
// hgf();

// abc();

// //console.log(d); this will give ReferenceError: b is not defined , instead of printing undefined
// let d = 300;
// console.log(d);

// {
//     var a = 100;
//     var b = 200;
//     var c = 300;
//     // console.log(a); // 100
//     // console.log(b); // 200
//     // console.log(c); // 300

//     {
//         // console.log(a); // 100
//         // console.log(b); // 200  
//         // console.log(c); // 300

//         {
//             let d = 2000;

//             console.log(a); // 100
//             console.log(b); // 200
//             console.log(c); // 300
//         }
//     }
// }

// function abc(){
//     let a = 100;
//     let b = 200;
//     let c = 300;
//     function def(){
//         let d = 500;
//         function ghi(){
//             console.log(a); // 100
//             console.log(b); // 200
//             console.log(c); // 300
//             console.log(d); // 500
//         }
//         ghi();
//     }
//     def();
// }
// abc();
// //ghi(); // This will give ReferenceError: ghi is not defined, as ghi is not in the global scope

// for(let i = 0; i <= 5; i++){//if we use var instead of let, it will print 6 six times due to closure
//     //console.log(i); // This will print 0 to 5
//     setTimeout(() => {
//         console.log(i); // This will print 0 to 5 after 2 seconds
//     } , 2000)
// }

// //same code but using var that prints 0 to 5
// for(var i = 0; i <= 5; i++){
//     function closure(i){
//         setTimeout(() => {
//         console.log(i); // This will print 0 to 5 after 2 seconds
//         } , 2000)
//     }
//     closure(i);
// }

function xyz(cb){
    console.log("This is function xyz");
    cb(); // calling the callback function
    console.log("Callback function executed");
    //return hgf(); // calling the callback function
}
function cb(){
    console.log("This is callback function cb");
}

function hgf(){
    console.log("This is function hgf");
}
xyz(cb); // This will call the function xyz and then the callback function cb
xyz(hgf); // This will call the function xyz and then the function hgf