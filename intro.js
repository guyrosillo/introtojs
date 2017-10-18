// Exercise 1

var op1 = 22 + 2;
var op2 = 30 - 6;
var op3 = 6 * 4;
var op4 = 48/2;

console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4);

for(var i=0; i<10; i++){
    if(i%2 == 0){
    }
}

var ope1 = 6%3;
var ope2= 10%2;
var ope3 = 5%2;

console.log(ope1 !== ope2);
console.log(ope1 == ope2);

// Exercise 3

var line1 = "Test Grades as follows:";
var line2 = "\n \t Student 1:96";
var line3 = "\n \t Comment: \"None\"";
console.log(line1 + line2 + line3);

// Exercise 4

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number[2] + number[4]);

// Exercise 5

var person =
{
    name: "Guillermo",
    dateOB: "11/23/1986",
    birthPlace: "Miami",
    age: 30,
    citizen: true,
    favNos: [3, 5, 7] 
}

console.log(person['name'] + "\n" + person.favNos[0]);

// Exercise 6
var num=0;
while(num<10)
{
    if (num%2 == 0){

        console.log(`The number is currently ${num}.`);
        
    }
    num++;
}

// Exercise 7
for(var x = 1; x < 10; x++){
    if(x%2 !== 0)
    {
        console.log(`The current number is ${x}.`);
    }
}
