let bonus=10;
function add(num1,num2){
    let result=num1+num2+bonus;
    console.log(result);
    if(result>8){
         const mood="Happy";
         console.log(mood);
    }
    return result
    // console.log(mood);  Error Dibe ,,,, Local Scope
}
const output=add(10,30);
//console.log(bonus);   /// Global Scope
//console.log(result); /// Error Dibe ,,,, Local Scope (let & const)
