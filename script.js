function equalsTo(){
    let firstEqual = document.getElementById("input1").value;
    let secondEqual = document.getElementById("input2").value;
    if(firstEqual==secondEqual){
        document.getElementById("output1").innerHTML = firstEqual+" is equal to "+secondEqual;
    }else{
        document.getElementById("output1").innerHTML = firstEqual+" isn't equal to "+secondEqual;
        }
}

function evenOdd(){
    let inputEvenOdd = document.getElementById("input3").value;
    if(inputEvenOdd%2 == 0){
        document.getElementById("output2").innerHTML = inputEvenOdd+" is even";
    }else{
        document.getElementById("output2").innerHTML = inputEvenOdd+" is odd";
        }
}

function leapYear(){
    let leapYear = document.getElementById("input4").value;
    if(leapYear%4 == 0){
        document.getElementById("output3").innerHTML = leapYear+" is a leap year";
    }else{
        document.getElementById("output3").innerHTML = leapYear+" isn't a leap year";
        }
}

function posNegNum(){
    let posNeg = document.getElementById("input5").value;
    if(posNeg > 0){
        document.getElementById("output4").innerHTML = posNeg+" is a positive number";
    }else if(posNeg == 0){
        document.getElementById("output4").innerHTML = posNeg+" is a neutral number";
    }
    else{
        document.getElementById("output4").innerHTML = posNeg+" is a negative number";
        }
}

function positionRun(){
    let position = document.getElementById("input6").value;
    switch(true){
        case position >= 35:
            document.getElementById("output5").innerHTML = "You are old enough to run for MP, Prime Minister, Senator & President.";
            break;
        case position >= 30:
            document.getElementById("output5").innerHTML = "You are old enough to run for MP, Senator & Prime Minister.";
            break;
        case position >= 21:
            document.getElementById("output5").innerHTML = "You are old enough to run for MP & Prime Minister.";
            break;
        default:
            document.getElementById("output5").innerHTML = "You aren't old enough to run for any position.";
    }
}

function heightCal(){
    let height = document.getElementById("input7").value;
    switch(true){
        case height >= 195:
            document.getElementById("output6").innerHTML = "You are a giant.";
            break;
        case height >= 177:
            document.getElementById("output6").innerHTML = "You are tall.";
            break;
        case height >= 165:
            document.getElementById("output6").innerHTML = "You are medium height.";
            break;
        case height >= 148:
            document.getElementById("output6").innerHTML = "You are short.";
            break;
        default:
            document.getElementById("output6").innerHTML = "You are a dwarf.";
    }
}