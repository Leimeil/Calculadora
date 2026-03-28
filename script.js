
let full0p= '';
let res;

function handleClick(number){
    console.log(number)
    if (full0p.includes("+") && number==="+"){
        console.log(full0p)
        return 
    }
    if (full0p.includes("-") && number==="-" && full0p[0] !== "-"){
        console.log(full0p)
        return 
    }
    if (full0p.includes("x") && number==="x"){
        console.log(full0p)
        return 
    }
    if (full0p.includes("/") && number==="/"){
        console.log(full0p)
        return 
    }
    if (full0p.includes("^") && number==="^"){
        console.log(full0p)
        return 
    }
    full0p= full0p+number;
    showNumber(full0p)
}

function showNumber(num){
    document.getElementById("screen").innerHTML=num
}

function delentry(){
    full0p= full0p.slice(0, -1)
    showNumber(full0p);
}

function addToHistory(texto){
    let historyDiv = document.getElementById("history");

    let item = document.createElement("div");
    item.textContent = texto;

    historyDiv.prepend(item);
}

function calculate(){
    console.log({full0p})
    const match= full0p.match(/^(-?\d+\.?\d*)([\+\-x\/\^])(-?\d+\.?\d*)$/);
    const[,a,op,b]=match;
    console.log({a,op,b})
    switch(op){
        case "+":
            res= Number(a)+Number(b);
            break
        case "-":
            res= Number(a)-Number(b);
            break
        case "x":
            res= Number(a)*Number(b);
            break
        case "/":
            res= Number(a)/Number(b);
            break
        case "^":
            if(Number(b)<0){
                res= "ERROR";
            }else{
                res= Number(a)**Number(b);
            }
            break
        default:
            break
    }
    addToHistory(full0p + " = " + res);
    showNumber(res)
    full0p = "";
}