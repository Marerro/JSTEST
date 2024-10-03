// const testArrays = (...args)=>{
    
//     return args;
// };
// console.log(testArrays(3, 8, -14));

// // const testArrays = (a, b, c)=>{
// //     return a + b + c;
// // };


// // console.log(testArrays(3, 8, -14));

const nums = [4, -5, 3];

const calcSquare = (num, index) => {
    return { id: index, number: num };
}
const sqrNums = nums.map(calcSquare);

console.log(sqrNums);