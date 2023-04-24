const billInput = document.querySelector('#bill-val'),
percentageBtns = document.querySelectorAll('.btn'),
custom = document.querySelector('#percent'),
errorTxt = document.querySelector('.error'),
numPeopleInput = document.querySelector('#num-of-people-input'),
amountValTxt = document.getElementById('amount-val'),
totalVal = document.getElementById('total-val'),
resetBtn = document.querySelector('.reset-btn');

let tipPercentage,
amountVal,
errorFlag = false;


percentageBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        tipPercentage = btn.value;
    })
})

numPeopleInput.addEventListener('change', ()=>{
    if(numPeopleInput.value == 0){
        numPeopleInput.style.borderColor = 'red';
        errorTxt.textContent = "can't be zero";
        errorTxt.classList.toggle('none');
        errorFlag = true;
        return false;
    }else if(numPeopleInput.value <= 0){
        numPeopleInput.style.borderColor = 'red';
        errorTxt.textContent = "can't be negative";
        errorTxt.classList.toggle('none');
        errorFlag = true;
        return false;
    }else{
        const bill = billInput.value;
        const customVal = custom.value;
        const numberOfPeople = numPeopleInput.value;
        tipPercentage = customVal? customVal: tipPercentage;

        amountVal = (bill * tipPercentage) / (100 * numberOfPeople);

        amountValTxt.textContent ='$' + amountVal.toFixed(2);
        totalVal.textContent ='$'+  ((bill / numberOfPeople) + amountVal).toFixed(2);
    }
})

resetBtn.addEventListener('click', ()=>{
    billInput.value = '';
    numPeopleInput.value='';
    tipPercentage = undefined;
    amountVal = undefined;
    custom.value = '';
    amountValTxt.textContent = '$0.00';
    totalVal.textContent = '$0.00';
    numPeopleInput.style.borderColor = 'hsl(185, 41%, 84%)';
    
    if(errorFlag){
        errorTxt.classList.toggle('none');
        errorFlag = false;
    }
})


























