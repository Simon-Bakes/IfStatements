function equalsTo(){
    let firstEqual = document.getElementById("input1").value;
    let secondEqual = document.getElementById("input1.1").value;
    if(firstEqual==secondEqual){
        document.getElementById("output1").innerHTML = firstEqual+" is equal to "+secondEqual;
    }else{
        document.getElementById("output1").innerHTML = firstEqual+" isn't equal to "+secondEqual;
        }
}

function evenOdd(){
    let inputEvenOdd = document.getElementById("input2").value;
    if(inputEvenOdd % 2 == 0){
        document.getElementById("output2").innerHTML = inputEvenOdd + " is even";
    }else{
        document.getElementById("output2").innerHTML = inputEvenOdd + " is odd";
        }
}

function leapYear(){
    let leapYear = document.getElementById("input3").value;
    if(leapYear % 4 == 0){
        document.getElementById("output3").innerHTML = leapYear+" is a leap year";
    }else{
        document.getElementById("output3").innerHTML = leapYear+" isn't a leap year";
        }
}

function posNegNum(){
    let posNeg = document.getElementById("input4").value;
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
    let position = document.getElementById("input5").value;
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
    let height = document.getElementById("input6").value;
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

function bigNum(){
    let num1 = document.getElementById("input7").value;
    let num2 = document.getElementById("input7.1").value;
    let num3 = document.getElementById("input7.2").value;
    switch(true){
        case num1 > num2:
            if(num1>num3){
                document.getElementById("output7").innerHTML = "The biggest number is: "+num1;
            }else{
                document.getElementById("output7").innerHTML = "The biggest number is: "+num3;
            }
            break;
        case num1 > num3:
            if(num2>num3){
                document.getElementById("output7").innerHTML = "The biggest number is: "+num2;
            }else{
                document.getElementById("output7").innerHTML = "The biggest number is: "+num3;
            }
            break;
        case num2 > num1:
            if(num2>num3){
                document.getElementById("output7").innerHTML = "The biggest number is: "+num2;
            }else{
                document.getElementById("output7").innerHTML = "The biggest number is: "+num3;
            }
            break;
        default:
            document.getElementById("output7").innerHTML = "The biggest number is: "+num3;
    }
}

function uniCal(){
    let mathGrades = document.getElementById("input8").value;
    let phyGrades = document.getElementById("input8.1").value;
    let chemGrades = document.getElementById("input8.2").value;
    let finalGrade = +mathGrades+ +phyGrades+ +chemGrades;
    let cheekyPass1 = +mathGrades+ +phyGrades;
    let cheekyPass2 = +mathGrades+ +chemGrades;
    if(mathGrades>69 && phyGrades>54 && chemGrades>44){
        switch(true){
            case finalGrade>179:
    document.getElementById("output8").innerHTML = "Off to college you go.";
    break;
    default:
        document.getElementById("output8").innerHTML = "Lmao failed.";
        }
    }else if(cheekyPass1>149){
        document.getElementById("output8").innerHTML = "Off to college, you go.";
    }else if(cheekyPass2>149){
        document.getElementById("output8").innerHTML = "Off to college you go.";
    }else{
        document.getElementById("output8").innerHTML = "Lmao failed.";
    }
}

function tempCal(){
    let temp = document.getElementById("input9").value;
    switch(true){
        case temp<0:
            document.getElementById("output9").innerHTML = "Cold as hell.";
            break;
        case temp<=10:
            document.getElementById("output9").innerHTML = "Cold.";
            break;
        case temp<=20:
            document.getElementById("output9").innerHTML = "Warm.";
            break;  
        case temp<=30:
            document.getElementById("output9").innerHTML = "Hot.";
            break;  
        case temp<=40:
            document.getElementById("output9").innerHTML = "Really Hot.";
            break;
        case temp>=40:
            document.getElementById("output9").innerHTML = "Hell on earth.";
            break;    
    }
}

function triCal(){
    let sideA = document.getElementById("input_sideA").value;
    let sideB = document.getElementById("input10.1").value;
    let sideC = document.getElementById("input10.2").value;
    if(sideA + sideB > sideA && sideA + sideC > sideB &&  sideB + sideC > sideA){
        document.getElementById("output10").innerHTML = "It is a triangle.";
    }else{
        document.getElementById("output10").innerHTML = "It isn't a triangle.";
    }
}

function gradeCal(){
    let grade = document.getElementById("input11").value;
    switch(grade/1){
        case 6:
            document.getElementById("output11").innerHTML = "Grade S.";
            break;
        case 5:
            document.getElementById("output11").innerHTML = "Grade A.";
            break;
        case 4:
            document.getElementById("output11").innerHTML = "Grade B.";
            break;
        case 3:
            document.getElementById("output11").innerHTML = "Grade C.";
            break;
        case 2:
            document.getElementById("output11").innerHTML = "Grade D.";
            break;
        case 1:
            document.getElementById("output11").innerHTML = "Grade F.";
            break;
        default:
            document.getElementById("output11").innerHTML = "Not a grade.";
    }
}

function dayCal(){
    let day = document.getElementById("input12").value;
    switch(day/1){
        case 7:
            document.getElementById("output12").innerHTML = "Sunday.";
            break;
        case 6:
            document.getElementById("output12").innerHTML = "Saturday.";
            break;
        case 5:
            document.getElementById("output12").innerHTML = "Friday.";
            break;
        case 4:
            document.getElementById("output12").innerHTML = "Thursday.";
            break;
        case 3:
            document.getElementById("output12").innerHTML = "Wednesday.";
            break;
        case 2:
            document.getElementById("output12").innerHTML = "Tuesday.";
            break;
        case 1:
            document.getElementById("output12").innerHTML = "Monday.";
            break;
        default:
            document.getElementById("output12").innerHTML = "Not a day.";
    }
}

function calculatorCode(){
    let x = document.getElementById("input13").value;
    let y = document.getElementById("input13.1").value;
    let op = document.getElementById("input13.2").value;
    let sum;
    if (op==='+') {
        sum = +x+ +y;
        document.getElementById("output13").innerHTML = "Answer is: "+sum;
    }else if(op==='-'){
        sum = x-y;
        document.getElementById("output13").innerHTML = "Answer is: "+sum;
    }else if(op==='*'){
        sum = x*y;
        document.getElementById("output13").innerHTML = "Answer is: "+sum;
    }else{
        sum = x/y;
        document.getElementById("output13").innerHTML = "Answer is: "+sum;
    }
}
