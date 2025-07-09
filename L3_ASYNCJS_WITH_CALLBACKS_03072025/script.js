// ///Prototype Array Filter Method
// Array.prototype.filterReplica = function(conditon){
//     let res = [];

//     for(let i = 0 ; i < this.length ; i++){
//         if(conditon(this[i])){
//             res.push(this[i]);
//         }
//     }

//     return res;
// }

// let arr = ["Sneha" , "Shivu" , "Shivansh" , "Shubham" , "Sujal"];
// let output = arr.filterReplica((word) => word.length < 6);

// console.log(output);


let arr2 = [2,4,6,8];
// let sum = arr2.reduce(function(acc , curr){
//     acc += curr
//     return acc
// } , 0);

// console.log(sum)

// ///Prototype Array Reduce Method

Array.prototype.reducerr = function (logic, initialVal) {
  let result = initialVal;
  for (let i = 0; i < this.length; i++) {
    result = logic(result, this[i]);
  }
  return result;
};

const res = arr2.reducerr((acc, curr) => acc + curr, 0);

console.log(res); 