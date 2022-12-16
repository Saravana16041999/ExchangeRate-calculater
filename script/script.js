

const CurrenyOne = document.getElementById(`currencyOne`);
const AmountOne = document.getElementById(`firstAmount`);
const CurrenyTwo = document.getElementById(`currencyTwo`);
const AmountTwo = document.getElementById(`SecondAmount`);
const swap = document.getElementById(`Swap`);
const CurrencyValue = document.getElementById(`Allrate`)




function Optionsall(){
    fetch(`https://v6.exchangerate-api.com/v6/b552bb56953fe0ec2bc546e1/latest/USD`).then((res)=> res.json())
    .then((data)=>{
        rate = data.conversion_rates
        currency = Object.keys(rate)
        currency.forEach(element => {
            newOption1 = document.createElement('option');
            CurrenyOne.appendChild(newOption1)
            newOption1.innerText = element;
            newOption2 = document.createElement('option');
            CurrenyTwo.appendChild(newOption2)
            newOption2.innerText = element
        });
    })
}

Optionsall()


function ExchangeRate(){
    currencyone = CurrenyOne.value
    fetch(`https://v6.exchangerate-api.com/v6/b552bb56953fe0ec2bc546e1/latest/USD`)
    .then((resp)=> resp.json())
    .then((data)=>{
        console.log(data)
    })
}

ExchangeRate()


swap.addEventListener('click',()=>{
    [CurrenyOne.value,CurrenyTwo.value] = [CurrenyTwo.value,CurrenyOne.value];

})
