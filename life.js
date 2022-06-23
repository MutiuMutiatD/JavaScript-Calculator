const num1 = parseFloat(prompt("Please enter the first number"));
const num2 = parseFloat(prompt("Enter the second number"));
const operator = (prompt("Enter prefered operator (+, -, /, *)"));

let result = 0;

if(isNaN(num1) || isNaN(num2)){
    alert("You input a wrong data, please refresh page and input accordingly.")
}else{
    if(operator == '+'){
        result = num1 + num2;
        alert("The sum of the given numbers is: " +result);
    }else if (operator == '-'){
        result = num1 - num2;
        alert("The difference of the given numbers is: " +result);
    }else if (operator == '*'){
        result = num1 * num2;
        alert("The product of the given numbers is: " +result);
    }else if (operator == '/'){
        result = num1 / num2;
        alert("The quotient of the given numbers is: " +result);
    }
}
