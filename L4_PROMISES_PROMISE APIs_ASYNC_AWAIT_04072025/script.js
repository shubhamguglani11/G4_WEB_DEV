// let userData = [
//     {
//         name : "Shivansh",
//         age : "21"
//     },
//     {
//         name : "Sneha",
//         age : "22"
//     },
//     {
//         name : "Shubham",
//         age : "25"
//     },
//     {
//         name : "Sujal",
//         age : "24"
//     },
//     {
//         name : "Shivu",
//         age : "21"
//     }
// ]

// let output = userData.filter((user) => {
//     user.map((user) => {
//         if(user.age > 21) {
//             return user.name;
//         }
//     });
// });

// console.log(output)

// const promise = new Promise((resolve , reject) => {
//     resolve("I Got Placed!!!!!");
// })

// console.log(promise);

// const promise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("I Got Placed")
//     }, 5000);
// })
// promise.then((res) => {
//     console.log(res);
// }).then(() => {
//     console.log(
//         "Party Time"
//     )
// }).then(() => {
//     console.log(
//         "Working Working Working"
//     )
// }).then(() => {
//     console.log(
//         "LayOff"
//     )
// })

// const promise2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         reject("I Did Not Got Placed")
//     }, 5000);
// })
// promise2.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log("Error Found : " ,err);
// })

///////OUTPUT -----> (4) ['Promise 1 Resolved', 'Promise 2 Resolved', 'Promise 3 Resolved', 'Promise 4 Resolved']
                    // 0: "Promise 1 Resolved"
                    // 1: "Promise 2 Resolved"
                    // 2: "Promise 3 Resolved"
                    // 3: "Promise 4 Resolved"
                    // length: 4
                    // [[Prototype]]: Array(0)

// let p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 1 Resolved"); 
//     }, 4000);
// });

// let p2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 2 Resolved"); 
//     }, 3000);
// });

// let p3 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 3 Resolved"); 
//     }, 5000);
// });

// let p4 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 4 Resolved"); 
//     }, 2000);
// });

// Promise.all([p1 , p2 , p3 , p4]).then((res) => console.log(res)).catch((err) => console.log("Error : " , err));


///////OUTPUT -----> (4) [{…}, {…}, {…}, {…}]
// 0 :  {status: 'fulfilled', value: 'Promise 1 Resolved'}
// 1: {status: 'rejected', reason: 'Promise 2 Rejected'}
// 2: {status: 'fulfilled', value: 'Promise 3 Resolved'}
// 3: {status: 'fulfilled', value: 'Promise 4 Resolved'}
// length: 4
// [[Prototype]]: Array(0)
// let p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 1 Resolved"); 
//     }, 4000);
// });

// let p2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        reject("Promise 2 Rejected"); 
//     }, 3000);
// });

// let p3 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 3 Resolved"); 
//     }, 5000);
// });

// let p4 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 4 Resolved"); 
//     }, 2000);
// });

// Promise.allSettled([p1 , p2 , p3 , p4]).then((res) => console.log(res)).catch((err) => console.log("Error : " , err));


///////OUTPUT -----> The fastest one
// let p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 1 Resolved"); 
//     }, 1000);
// });

// let p2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 2 Resolved"); 
//     }, 3000);
// });

// let p3 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 3 Resolved"); 
//     }, 4000);
// });

// let p4 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        resolve("Promise 4 Resolved"); 
//     }, 2000);
// });

// Promise.race([p1 , p2 , p3 , p4]).then((res) => console.log(res)).catch((err) => console.log("Error : " , err));

async function fetchProducts() {
    const products = await fetch("https://dummyjson.com/products");
    const data = await products.json()
    //console.log(data);

    const list = document.getElementById("list");
    
    data.products.forEach(p => {
        const li = document.createElement("li");
        li.innerText = `Title : ${p.title} \n Description :${p.description} \n Price: $${p.price}`;
        list.appendChild(li);
    });
    //HW -> create new array of objects which consists of [title , desc , price]
}

fetchProducts();

let p1 = new Promise((resolve , reject) => {
    setTimeout(() => {
       resolve("Promise 1 Resolved"); 
    }, 4000);
});

// p1.then((res) => console.log(res))
// .then(() => setTimeout(() => {
//     console.log("P2")
// }, 2000))
// .then(() => setTimeout(() => {
//     console.log("P3")
// }, 5000))
// .then(() => setTimeout(() => {
//     console.log("P4")
// }, 1000))
// .catch((err) => console.log(err));

//output
// Promise 1 Resolved
// P4
// P2
// P3

//but i want the result in series

// function something(msg , delay){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("Promise Resolved : " , msg)
//             resolve(msg); 
//         }, delay);
//     });
// }

// p1.then((res) => {
//     console.log(res)
// })
// .then(() => {
//     return something("P2" , 2000);
// })
// .then(() => {
//     return something("P3" , 5000);
// })
// .then(() => {
//     return something("P4" , 1000);
// })

p1
.then((res) => console.log(res))
.then(() => setTimeout(() => {
    console.log("P2")
}, 2000))
.then(() => setTimeout(() => {
    console.log("P3")
}, 5000))
.then(() => setTimeout(() => {
    console.log("P4")
}, 1000))
.catch((err) => console.log(err));