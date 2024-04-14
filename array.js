//Write a function that takes an array of numbers as input and returns the sum of all the number
//for loop
const p=[45,12,32,54,73]
let sum=0
for (let i=0;i<p.length;i++){
    sum +=p[i]
}
console.log(sum)

//reduce
const arr=[45,12,32,54,73]
const sum1=arr.reduce((accumulator,currentValue ) => accumulator+currentValue)
console.log(sum1)



//Write a function that takes two numbers as input and returns true if their sum is greater than 100,
//And false otherwise
function test(x,y){
    return((x+y>=100));
}
console.log(test(70,50))

//Write a function that takes a string as input and returns the number of vowels in the string
function getVowels(string) {
    let Vowels = "aAeEiIoOuU";
    let vowelsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(getVowels("hello world"))

