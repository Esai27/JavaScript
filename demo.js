var name = prompt("Enter your Name")
var age = prompt("Enter your Age")
AgeInDays = age * 365.25
alert("Hai " + name + " You have lived in the world for " + AgeInDays + " days ")


//Find the given number is odd or even
var num = prompt("Enter any number")
if(num%2==0){
    console.log("Even Number")
}
else{
     console.log("Odd Number")
}

//Find the person is eligible for voting

var name = prompt("Enter your name")
var nationality = prompt("Enter your Nationalaity")
var age = prompt ("Enter your Age")
if(nationality=="Indian" && age > 18)
{
    alert("Hai " + name + " you are eligible to vote in this election")
}
else{
    alert("Hai " + name + " You are not eligible to vote in this election " )
}
