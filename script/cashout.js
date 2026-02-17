document.getElementById("cashout-btn").addEventListener("click",function(){

    // 1. get the agent number and validate
    const cashoutNumInput = document.getElementById("cashout-input");
    const cashoutNum = cashoutNumInput.value ;
    console.log(cashoutNum);
    // 2. Get the amount , validate , convert to number
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value ;
    console.log(cashoutAmount);
    // 3. get the current balance , validate, convert to number
    const currentBalanceInput = document.getElementById("balance");
    const currentBalance = currentBalanceInput.innerText;
    console.log(currentBalance);
    // 4. calculate new balance 

    const newBalance = Number(currentBalance) - Number(cashoutAmount);

    if(newBalance < 0)
    {
        alert("Invalid ammount!");
        return;
    }
    console.log(newBalance);
    // 5. get the pin and verify
    const cashoutPinInput = document.getElementById("cashout-pin")
    const cashoutPin = cashoutPinInput.value;
    console.log(cashoutPin);

    
    // 6. 5-1 true :: show an alert > set balance
    if( cashoutNum =="01890642735" && cashoutPin == "6427")
    {
        alert("Cash out successful !");
        currentBalanceInput.innerText = newBalance;
    } 
    // 7. 5-2 true :: show an error alert > return
    else{
        alert("Cashout failed!");
        return;
    }
})