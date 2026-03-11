const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData(){
let user = PARAMS.get("user");
    document.getElementById("greetings").innerText = `Hello, ${user}!`;

let bread = Number(PARAMS.get("bread"));
    document.getElementById("bread").innerText = `The amount of bread: ${bread}`;

let milk = Number(PARAMS.get("milk"));
    document.getElementById("milk").innerText = `The amount of milk: ${milk}`;

let totalCost = ((milk*250)+(bread*300));
    document.getElementById("totalCost").innerText = `Your total cost is ${totalCost}`;
    
let payment = Number(PARAMS.get("payment"));
    document.getElementById("payment").innerText = `Your payment is ${payment}`;
    

    if (payment >= totalCost){
    let change = (payment - totalCost);
    document.getElementById("change").innerText = `Your change is ${change}`;
    }

    else {
    document.getElementById("change").innerText = `Please enter a valid payment`;
    }

}