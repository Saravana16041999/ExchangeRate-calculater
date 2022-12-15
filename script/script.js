

const CurrenyOne = document.getElementById(`currencyOne`);
const AmountOne = document.getElementById(`firstAmount`);
const CurrenyTwo = document.getElementById(`currencyTwo`);
const AmountTwo = document.getElementById(`SecondAmount`);
const swap = document.getElementById(`Swap`);


let url =  `https://v6.exchangerate-api.com/v6/b552bb56953fe0ec2bc546e1/latest/USD`

function ExchangeRate(){
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=>{
        console.log(data)
    })
}

ExchangeRate()
