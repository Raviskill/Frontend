// 1) JavaScript Program To Print Hello World
{
    let a ="Heelo wolde"
    console.log(a);
    
}
// 2) JavaScript Program to Add Two Numbers


{
    let a = 10;
    let b = 30;
    let c = a+b;

    console.log(c);
    
    
}
// 3) JavaScript Program to Find the Square Root
{
    let a = Math.sqrt(50)
    console.log(a);
    
}

// 4) JavaScript Program to Calculate the Area of a Triangle
{
    let h = 20;
    let b = 10;
    let c = h*b/2;

    console.log(c);
    
}
// 5) JavaScript Program to Swap Two Variables
{
    let x =10 ;
    let y = 20;
    let z = 30;

    x=y;
    y=z;
    z=x;

    console.log(x);
    
}
// 6) JavaScript Program to Solve Quadratic Equation
{
    
}
// 7) JavaScript Program to Convert Kilometres to Miles
{
    let Kilometres = 5
    let Miles = Kilometres*0.62

    console.log(Miles);
}

// 8) Javascript Program to Convert Celsius to Fahrenheit

{
    let Celsius = 5
    let Fahrenheit = Celsius*1.8+32

    console.log(Fahrenheit);
    
}
// 9) Javascript Program to Generate a Random Number

{

    let Randome = Math.random()*1000

    console.log(Randome);
    
    
}

// 10)Javascript Program to Check if a number is Positive, Negative, or Zero

let number = -10

if(number<0)
{
    console.log("Negative");
    
}
else if(number>0)
{
    console.log("Positive");
    
}
else
{
    console.log("Zero");
    
}

// 11) Javascript Program to Check if a Number is Odd or Even


{
    let num = 11;

    if(num%2==0)
    {
        console.log("odd");
        
    }
    else
    {
        console.log("Even");
        
    }
}


// 12)JavaScript Program to Find the Largest Among Three Numbers

a = 1000
b = 5000
c = 3000
{
    if(a>b && a>c)
    {
        console.log("a is the largest number");
        
    }
   else if(b>a && b>c)
        {
            console.log("b is the largest number");
            
        }
        else
        {
            console.log("c is the largest number");
            
        }
}

// 13)JavaScript Program to Check Prime Number


{
    let A = 97  

    if(A%2==0 || A%3==0 || A%4==0 || A%5==0 || A%6==0 || A%7==0 || A%8==0 || A%9==0 || A%10==0)
    {
        console.log("not");
        
    }
    else
    {
        console.log("Prime Number");
        
    }
}

// 14)JavaScript Program to Print All Prime Numbers in an Interval
{
  
    let A ; 
    
    for(let A=1;A<=100;A++)
    {
        if(A%2==0 || A%3==0 || A%4==0 || A%5==0 || A%6==0 || A%7==0 || A%8==0 || A%9==0 || A%10==0)
            {
                console.log();      
            }
            else
            {
                console.log(A);
                
            }


    }



}


// 15)JavaScript Program to Find the Factorial of a Number

{

    let num = 5;
    let fact=1;

    for( let i=1;i<=num;i++)
    {
         fact *=i
    }
    
    console.log(fact);
}


// 16)JavaScript Program to Display the Multiplication Table
{

let num = 5
let Table
{
    for(let i=1;i<=10;i++)
    {
        Table=i*num
        console.log(Table);
        
    }
}

}

// 17)JavaScript Program to Print the Fibonacci Sequence


    {
        let  number =10;
        let n1 = 0;
        let n2 = 1;
        let next;
        
        for( let i=0;i<=number;i++)
        {
            console.log(n1);
            next = n1 + n2;
            n1 = n2;
            n2 = next;   
        }
}


// 20)JavaScript Program to Make a Simple Calculator

{

    let opt = `-`;
    let num1 = 10;
    let num2 = 20;

    let regulte;

    if(opt==`+`)
    {
        regulte =num1+num2 
    }
   else if(opt==`-`)
        {
            regulte =num1-num2 
        }
       else if(opt==`*`)
            {
                regulte =num1*num2 
            }
            else{
                regulte = num1/num2
            }
console.log(regulte);

}


// 21)JavaScript Program to Find the Sum of Natural Numbers

{
    let num = 10

    let sum = 0;

    for(let i=1;i<=num;i++)
    {
        sum+=i;
    }
    console.log(sum);
    
}
// 22)JavaScript Program to Check if the Numbers Have Same Last Digit
{


const a = 30
const b = 20
const c = 30

const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

if(result1 == result2 && result1 == result3) {
    console.log(` have the same last digit.`);
}
else {
    console.log(` have different last digit.`);
}
}


// 26)JavaScript Program to Find Sum of Natural Numbers Using Recursion



{

function Sum(n) { 
	if (n !== 0) 
		return n +Sum(n - 1); 
	else
		return n; 
} 


const n = 5; 
console.log(Sum(n));

}


// 27)JavaScript Program to Guess a Random Number
{
    let random = Math.random()*50
    console.log(random);
    
}

// 28)JavaScript Program to Shuffle Deck of Cards



// 29)JavaScript Program to Display Fibonacci Sequence Using Recursion
{

let num;
    function fibonacci(num) {
        if(num < 2) {
            return num;
        }
        else {
            return fibonacci(num-1) + fibonacci(num - 2);
        }
    }
    
    const nTerms = 10 ;
    
         for(let i = 0; i < nTerms; i++) {
            console.log(fibonacci(i));
         }

}


// 30)JavaScript Program to Find Factorial of Number Using Recursion


{
    function factorial(x) {

        if (x == 0) {
            return 1;
        }
    
        else {
            return x * factorial(x - 1);
        }
    }
    
    const num = 5 ;
    
    
        const result = factorial(num);
        console.log(result)
    
}


// 31)JavaScript Program to Convert Decimal to Binary



{
    const number = 100
    const regulte = number.toString(2);

    console.log(regulte);
    
}


// 32)JavaScript Program to Find ASCII Value of Character
{
    const String = 'k';
    const regulte = String.charCodeAt(0);

    console.log(regulte);
    
}

// 33)JavaScript Program to Check Whether a String is Palindrome or Not



{
    const String ='ravi chavda';

    const words = String.split(" ");

    words.sort();

    for(const element of words)
    {
        console.log(element);
        
    }

}

// 34)JavaScript Program to Sort Words in Alphabetical Order



// 35)JavaScript Program to Replace Characters of a String
{
    let String ='mr red is red house  and red car';

    let text =String.replace('red','green');

    console.log(text);
    
}


// 36)JavaScript Program to Reverse a String
{

    let string ='ravi'
    let string1=string.split("")
    let String2=string1.reverse()
    let String3=String2.join(" ")
  
    console.log(String3);
}


// 37)JavaScript Program to Create Objects in Different Ways
{
    const person ={
        name:"meet",
        age:19
  
      }
      console.log(typeof person);
  
      const person1 = new Object({
        name:"meet",
        age:19
  
      })
      console.log(typeof person1);
}

// 38)JavaScript Program to Check the Number of Occurrences of a Character in
// the String

{
    
}
















