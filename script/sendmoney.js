document.getElementById("Transfer-btn").addEventListener("click" ,function(){

    const TransferNum = getValueFormInput ("Transfer-input");
    console.log(TransferNum);
    const TransferAmount = getValueFormInput("Transfer-amount");
    console.log(TransferAmount);

    const currentBalanceInput = getBalance("balance")
    const newBalance = currentBalanceInput - Number(TransferAmount);

    if(newBalance < 0)
    {
        alert("Invalid ammount!");
        return;
    }
    console.log(newBalance);

    const cashoutPin = getValueFormInput("Transfer-pin");
    if( TransferNum =="01890642735" && cashoutPin == "6427")
    {
        alert("Transfer successful !");
        setBalance(newBalance)
        const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `<div id="Transaction-history" class="border border-green-400 rounded-2xl bg-base-200 w-full p-5 shadow-lg flex items-center gap-3">
  <div class="bg-green-100 text-green-600 rounded-full p-2">
    ✅
  </div>
  <div>
    <p class="text-sm text-gray-400 font-mono">Transaction Successful</p>
    <p class="font-semibold text-base-content">Transfer succesfull from <span class="text-green-500">${TransferNum}</span></p>
    <p class="text-xs text-gray-400 mt-1">${new Date().toLocaleString()}</p>
  </div>
</div>`;
    
    TransactionElement.append(Transaction);
    } 
    else{
        alert("Cashout failed!");
         const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `<div id="Tranfer failed!" class="border border-red-400 rounded-2xl bg-base-200 w-full p-5 shadow-lg flex items-center gap-3">
  <div class="bg-green-100 text-red-600 rounded-full p-2">
    ❌
  </div>
  <div>
    <p class="text-sm text-gray-400 font-mono">Transaction Successful</p>
    <p class="font-semibold text-base-content">Transfer is Failed send to<span class="text-red-500">${TransferNum}</span></p>
    <p class="text-xs text-gray-400 mt-1">${new Date().toLocaleString()}</p>
  </div>
</div>`;
    
    TransactionElement.append(Transaction);
    
        return;
    }
    
})
