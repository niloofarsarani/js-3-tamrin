const leftNumber = +prompt ("left number?");
const operator= prompt ("operator?");
const rightNumber = +prompt ("right number?");

if (isNaN(leftNumber)){
    consol.log("EER!")
}

if (isNaN( rightNumber)){
    consol.log("EER!")
}


if(operator=== "+"){
    consol.log("leftNumber + rightNumber")
}


if(operator=== "-"){
    consol.log("leftNumber - rightNumber")
}



if(operator=== "*"){
    consol.log("leftNumber * rightNumber")
}
