//-getters
var input1 = document.getElementById("input1"); 
var input2 = document.getElementById("input2"); 
var result = document.getElementById("result");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");


//-functions 
function add(){
    var num1= parseInt(input1.value);
    var num2= parseInt(input2.value);
    result.innerHTML= num1 + num2
}

function sub(){
    var num3= parseInt(input1.value);
    var num4= parseInt(input2.value);
    result.innerHTML= num3 - num4
}

function multiply(){
    var num5= parseInt(input1.value);
    var num6= parseInt(input2.value);
    result.innerHTML= num5 * num6
}

function divide(){
    var num5= parseInt(input1.value);
    var num6= parseInt(input2.value);
    result.innerHTML= num5 / num6
}

function modulo(){
    var num7= parseInt(input1.value);
    var num8= parseInt(input2.value);
    result.innerHTML= num7 % num8
}
