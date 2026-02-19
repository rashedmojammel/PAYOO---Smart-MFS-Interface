document.getElementById("cashout-btn").addEventListener("click" ,function(){

    const cashoutNum = getValueFormInput ("cashout-input");
    console.log(cashoutNum);
    const cashoutAmount = getValueFormInput("cashout-amount");
    console.log(cashoutAmount);

    const currentBalanceInput = getBalance("balance")
    const newBalance = currentBalanceInput - Number(cashoutAmount);

    if(newBalance < 0)
    {
        alert("Invalid ammount!");
        return;
    }
    console.log(newBalance);

    const cashoutPin = getValueFormInput("cashout-pin");
    if( cashoutNum =="01890642735" && cashoutPin == "6427")
    {
        alert("Cash out successful !");
        setBalance(newBalance)
        const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `<div id="Transaction-history" class="border border-green-400 rounded-2xl bg-base-200 w-full p-5 shadow-lg flex items-center gap-3">
  <div class="bg-green-100 text-red-600 rounded-full p-2">
    ❌
  </div>
  <div>
    <p class="text-sm text-gray-400 font-mono">Transaction Successful</p>
    <p class="font-semibold text-base-content">Cashout succesfull from <span class="text-green-500">${cashoutNum}</span></p>
    <p class="text-xs text-gray-400 mt-1">${new Date().toLocaleString()}</p>
  </div>
</div>`;
    
    TransactionElement.append(Transaction);
    } 
    else{
        alert("Cashout failed!");
        return;
    }
    
})



// document.getElementById("cashout-btn").addEventListener("click",function(){

//     // 1. get the agent number and validate
//     const cashoutNumInput = document.getElementById("cashout-input");
//     const cashoutNum = cashoutNumInput.value ;
//     console.log(cashoutNum);
//     // 2. Get the amount , validate , convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value ;
//     console.log(cashoutAmount);
//     // 3. get the current balance , validate, convert to number
//     const currentBalanceInput = document.getElementById("balance");
//     const currentBalance = currentBalanceInput.innerText;
//     console.log(currentBalance);
//     // 4. calculate new balance 

//     const newBalance = Number(currentBalance) - Number(cashoutAmount);

//     if(newBalance < 0)
//     {
//         alert("Invalid ammount!");
//         return;
//     }
//     console.log(newBalance);
//     // 5. get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin")
//     const cashoutPin = cashoutPinInput.value;
//     console.log(cashoutPin);

    
//     // 6. 5-1 true :: show an alert > set balance
//     if( cashoutNum =="01890642735" && cashoutPin == "6427")
//     {
//         alert("Cash out successful !");
//         currentBalanceInput.innerText = newBalance;
//     } 
//     // 7. 5-2 true :: show an error alert > return
//     else{
//         alert("Cashout failed!");
//         return;
//     }
// })