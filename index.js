let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function doAdd(){
    output.innerHTML = String(Number(one.value) + Number(two.value));
    if (Number(output.innerHTML) < 0){
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function doSubtract(){
    output.innerHTML = String(Number(one.value) - Number(two.value));
    if (Number(output.innerHTML) < 0){
        console.log("yes");
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function doMultiply(){
    output.innerHTML = String(Number(one.value) * Number(two.value));
    if (Number(output.innerHTML) < 0){
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function doDivide(){
    output.innerHTML = String(Number(one.value) / Number(two.value));
    if (Number(output.innerHTML) < 0){
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

// slide 14 for output color
//power on slide 34
function doPower(){
    let result = 1;
    for(let i = 0; i < two.value; i++){
        result *= one.value;
    }
    output.innerHTML = String(result);
    if (Number(output.innerHTML) < 0){
        output.style.color = "red";
    }else {
        output.style.color = "black";
    }
}

function doClear(){
    output.innerHTML = "Output";
    output.style.color = "black";
    one.value = "";
    two.value = "";
}