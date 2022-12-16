

const CurrenyOne = document.getElementById(`currencyOne`);
const AmountOne = document.getElementById(`firstAmount`);
const CurrenyTwo = document.getElementById(`currencyTwo`);
const AmountTwo = document.getElementById(`SecondAmount`);
const swap = document.getElementById(`Swap`);
const CurrencyValue = document.getElementById(`Allrate`)




function CompleteCalculation(){
    
    let Link = `https://v6.exchangerate-api.com/v6/b552bb56953fe0ec2bc546e1/latest/USD`
    fetch(Link).then((res)=> res.json())
    .then((data)=>{
        rate = data.conversion_rates;
        currency = Object.keys(rate);
        currency.forEach(element => {
            newOption1 = document.createElement('option');
            CurrenyOne.appendChild(newOption1);
            newOption1.innerText = element;
            newOption1.value = element;
            newOption2 = document.createElement('option');
            CurrenyTwo.appendChild(newOption2);
            newOption2.innerText = element;
            newOption2.value = element;
            
        })
        let currencyone = CurrenyOne.value;
        let currencytwo = CurrenyTwo.value;
        fetch(`https://v6.exchangerate-api.com/v6/b552bb56953fe0ec2bc546e1/latest/${currencyone}`)
        .then((responce)=> responce.json()).then((obj)=>{
            let rate2 = obj.conversion_rates[currencytwo];
            CurrencyValue.innerText = `1 ${currencyone} = ${rate2.toFixed(2)}${currencytwo}`
            AmountTwo.value = (Number(AmountOne.value)*rate2).toFixed(2)
        })
    })
}

CompleteCalculation()

CurrenyOne.addEventListener('change',CompleteCalculation)
CurrenyTwo.addEventListener('change',CompleteCalculation)
AmountOne.addEventListener('input',CompleteCalculation)
AmountTwo.addEventListener('input',CompleteCalculation)




swap.addEventListener('click',()=>{
    [CurrenyOne.value,CurrenyTwo.value] = [CurrenyTwo.value,CurrenyOne.value];
    CompleteCalculation()

})
