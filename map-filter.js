const numbers=[3,4,5,6,7,8];
// const output=[];
// for (let i=0;i<numbers.length;i++){
//     const element =numbers[i];      // Each Element Dhorar Jonno 
//     const result=element*element;   // Square Korar Jonno
//     output.push(result);           // Result Rakhar Jonno
// }

//Or 
// function square(element){
//     return element*element;
// }
// const func=numbers.map(square);
// console.log(func);

//Or 
// const result=numbers.map(function(element){     // (element,index,array){
//     //console.log(element,index,array)
//     return element*element;
// })
// console.log(result);

//Or
// const square = element => element*element;
// console.log(square);

//Most Easiest Way :
const result=numbers.map(x=>x*x);
console.log(result);

//console.log(output);

// Filter :
const bigger=numbers.filter(x=> x>5);
console.log(bigger);

// Find ( Filter er version ):     akta value dibe 
const big=numbers.find(x=> x>5);
console.log(big);

const small=numbers.find(x=> x<5);
console.log(small);