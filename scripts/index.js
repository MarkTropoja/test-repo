//-globals
let input1 = document.getElementById("input1"); 
let input2 = document.getElementById("input2"); 
let result = document.getElementById("result");
let spyArray = [];

//-gets input from index.html input
function getInput(){
    let num1 = parseInt(input1.value);
    spy(num1);
    let num2 = parseInt(input2.value);
    spy(num2); 
    let array = [num1, num2];
    return array;
}

//-operator: string 
//-calculates input, gets correct operator from onclickhtml
function calculate(operator){
    let array = getInput();
    console.log("secretArray ", spyArray);
    switch (operator){
        case "+":
            result.innerHTML = array[0] + array[1] ;
            break;
        case "-":
            result.innerHTML = array[0] - array[1];
            break;
        case "*":
            result.innerHTML = array[0] * array[1];
            break;
        case "/":
            result.innerHTML = array[0] / array[1];
            break;
        case "%":
            result.innerHTML = array[0] % array[1];
            break;
        case "^":
            result.innerHTML = Math.pow(array[0] , array[1]);
            break;
    }
}

//-tracks used numbers
function spy(num){
    spyArray.push(num);
}

