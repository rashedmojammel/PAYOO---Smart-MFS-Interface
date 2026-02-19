document.getElementById("paybill-btn").addEventListener("click",function(){

    console.log("added");

    //select bank

    const Bank = getValueFormInput("paybill-bank");
    if( Bank == "Select Bank")
    {
        alert("Please Select a Bank");
        return;
    }

    //add money

    const addMoney = getValueFormInput("paybill-input");
    if(addMoney.length !== 11){
        alert("Please enter a valid account number");
        return;
    }

    //add ammount
    const amount = getValueFormInput("paybill-amount");

    //add new balance

    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);
    console.log(newBalance);

    //get pin
    const pin = getValueFormInput("paybill-pin");
    if(pin == "6427"){
    setBalance(newBalance);
    alert("payed succesfully");
    const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `<div id="Transaction-history" class="border border-green-400 rounded-2xl bg-base-200 w-full p-5 shadow-lg flex items-center gap-3">
  <div class="bg-green-100 text-green-600 rounded-full p-2">
    ✅
  </div>
  <div>
    <p class="text-sm text-gray-400 font-mono">Pay Successful</p>
    <p class="font-semibold text-base-content">Payed bill from <span class="text-green-500">${Bank}</span></p>
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
         const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `<div id="Pay failed!" class="border border-red-400 rounded-2xl bg-base-200 w-full p-5 shadow-lg flex items-center gap-3">
  <div class="bg-green-100 text-red-600 rounded-full p-2">
    ❌
  </div>
  <div>
    <p class="text-sm text-gray-400 font-mono">AddMoney failed</p>
    <p class="font-semibold text-base-content">Pay Money Failed From <span class="text-red-500">${Bank}</span></p>
    <p class="text-xs text-gray-400 mt-1">${new Date().toLocaleString()}</p>
  </div>
</div>`;
    
    TransactionElement.append(Transaction);
    
        return;
        return;
    }
})