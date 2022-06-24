alert("This is a calculator for you. This calculator can only perform operations between 2 numbers please.");

const num1 = parseFloat(prompt('Enter number:'));
const num2 = parseFloat(prompt('Enter another number:'));

let operation = prompt("Please enter the operation you would like to perform: add +, subtract -, divide /, multiply * ");
let result = 0
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong Input!')
}else{
    if(operator== '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }
    alert(num1+operator+num2+'=' + result);
}
