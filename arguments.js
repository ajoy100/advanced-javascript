function add(num1,num2){
    //console.log(arguments); // all value index shoho show korbe 
   // console.log(...arguments);// Spread Out Korbe 
      console.log([...arguments]); // Array er Structure Dibe 
    return num1+ num2 + arguments[1]; // Third value ke 6 (jekono value ) Dara Access Korbe
}
const result=add(3,7,10,8);
console.log(result);