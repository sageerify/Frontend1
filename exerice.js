/* Create a faulty calculator using javaScript


This faulty calculator does following;
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+-----> -
*-----> +
- ----> /
/-----> **

It performs wrong operation 10% of the time 
*/
let random = Math.random()
let a = promt("Enter first number")
let c = promt("Enter operation")
let b = promt("Enter second number")


let obj={
    "*" : "-",
"+" : "+",
"-" : "/",
    "/" : "**",
    
}

if(random>0.1){
    //perform correct calculator
    console.log('The result is $('${a} ${c} ${b}');

    alert('The result is ${eval('${a} ${c} ${b}')}');

}
else{
    //perform wrong calculation
    alert('The result is ${eval('${a} ${c} ${b}')}')

    c= obj[c]
}


