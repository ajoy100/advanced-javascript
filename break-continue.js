//  Break:
const nums =[1,2,3,4,5,6,7,8];
console.log("Break :");
for(let i=0;i<nums.length;i++){
    // console.log(nums[i]);    Age Dile 4 Porjonto Jabe  
    if(nums[i]>3){
        break;
    }
    console.log(nums[i]);   // Pore Dile 3 Porjonto Jabe 
}


// Continue
console.log("\nContinue :");
const num =[1,2,-3,4,-5,-6,-7,8];
for(let i=0;i<nums.length;i++){
     
    if(num[i]<0){
        continue;   // Negative Value Scip Korbe 
                   // Only Positive Value Show Korbe 
    }
    console.log(num[i]);   
}