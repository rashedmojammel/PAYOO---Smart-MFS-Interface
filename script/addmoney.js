document.getElementById("addMoney-btn").addEventListener("click",function(){

    console.log("added");

    //select bank

    const Bank = getValueFormInput("addmoney-bank");
    if( Bank == "Select Bank")
    {
        alert("Please Select a Bank");
        return;
    }

    //add money

    const addMoney = getValueFormInput("addMoney-input");
    if(addMoney.length !== 11){
        alert("Please enter a valid account number");
        return;
    }

    //add ammount
    const amount = getValueFormInput("addMoney-amount");

    //add new balance

    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);

    //get pin
    const pin = getValueFormInput("addMoney-pin");
    if(pin == "6427"){
    setBalance(newBalance);
    const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `<div id="Transaction-history" class="border border-green-400 rounded-2xl bg-base-200 w-full p-5 shadow-lg flex items-center gap-3">
  <div class="bg-green-100 text-green-600 rounded-full p-2">
    ✅
  </div>
  <div>
    <p class="text-sm text-gray-400 font-mono">Transaction Successful</p>
    <p class="font-semibold text-base-content">Money added from <span class="text-green-500">${Bank}</span></p>
    <p class="font-semibold text-base-content">Amount <span class="text-green-500">${amount}</span></p>
    <p class="text-xs text-gray-400 mt-1">${new Date().toLocaleString()}</p>
  </div>
</div>
    `;
    
    TransactionElement.append(Transaction);
    // showTransactions();

    }
    else{
        alert("Invalid pin");
        return;
    }
})