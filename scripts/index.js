//-globals
let input1 = document.getElementById("input1"); 
let input2 = document.getElementById("input2"); 
let result = document.getElementById("result");
let spyArray = [];
let caseImage = document.getElementById("case-img");
const NUMS_OF_ITEMS = 6;
let streak = document.getElementById("streak");
let caseTracker = 0;
let casesBox = document.getElementById("cases-box");
let casesText = document.getElementById("cases-text-big");
let casesTextSmall = document.getElementById("cases-text-small");
let dropSound = new Audio("./assets/audio/drop.mp3");
let eliteSound = new Audio("./assets/audio/elite.mp3");
let enlistedSound = new Audio("./assets/audio/enlisted.mp3");



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


//-cases
function streakClick(){
    streak.innerHTML = "AW pack streak: " + caseTracker;
}

function caseOpening(){
    dropSound.play();
   
    let randomNumber = Math.random();
    let imageNumber = Math.ceil(NUMS_OF_ITEMS * Math.random());
    
    console.log(randomNumber); 

    casesBox.className = "fadeout";
    setTimeout(()=> {
        casesBox.className = "";
        //-enlisted
        if (randomNumber > 0.15){
            enlistedSound.play();
            caseImage.src = "./assets/images/enlisted/" + imageNumber + ".jpg";

            if (caseTracker > 0){
                caseTracker = 0; 
            }
            
            else {caseTracker--};
        }
    
        //-elite
        else {
            eliteSound.play();
            caseImage.src = "./assets/images/elite/" + imageNumber + ".jpg";
    
            if (caseTracker < 0){
                caseTracker = 0;
                caseTracker++; 
            }
    
            else {caseTracker++};
        }
    
        setTimeout(()=> {
            caseImage.src = "./assets/images/aw-symbol.png";
            casesText.style.opacity = "1";
            casesTextSmall.style.opacity = "1";
        }, 5000);

        casesText.style.opacity = "0";
        casesTextSmall.style.opacity = "0";
    
        streakClick();
    }, 3000)

}

