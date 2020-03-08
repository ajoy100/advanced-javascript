function stopWatch(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const clock1=stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());    

const clock2=stopWatch();   // Alada Alada Vabe Notun Kore Count Korbe
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock1());