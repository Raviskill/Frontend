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












