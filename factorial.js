// num = prompt("Enter a positive integer")
// if(num<0){
//     console.log("Error! Factorial for negative number does not exist")
// }
// else if(num==0){
//     console.log("Factorial of " + num + " is 1" )
// }
// else{
// fact=1
// for(i=1;i<=num;i++){
//     fact*=i
// }
// console.log("Factorial of " + num + " is " + fact)
// }



//Recursive Function for Factorial

// n=prompt("Enter any positive integer")
// function Factorial(n){
//     if(n<0){
//         return "Number has to be Positive"
//     }
//    if(n==0 || n==1){
//         return 1
//     }
//     else{
//         return n * Factorial(n-1)
//     }
// }
// Fact = Factorial(n)
// console.log('Factorial of' +n +  'is' + Fact)

//Recursive Function for Factorial
function factorial(n){
    if(n < 0){
        return "number has to be positive."
    }
    
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
n=prompt("Enter any positive integer")

answer = factorial(n)
console.log("Factorial of " + n + " : " + answer);