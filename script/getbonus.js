document.getElementById("Bonus-btn").addEventListener("click",function(){

    // const CuponInput = document.getElementById("Bonus-input");
    // const cupon = CuponInput.Value;
    // console.log(cupon);
    const CuponInput = getValueFormInput("Bonus-input");
    console.log(CuponInput);
    const currentBalance = getBalance();

    if(CuponInput =="rashed")
    {
         alert("cupon added!");
        const newBalance = currentBalance + 5000;
        setBalance(newBalance);
         const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `<div id="Transaction-history" class="border border-green-400 rounded-2xl bg-base-200 w-full p-5 shadow-lg flex items-center gap-3">
  <div class="bg-green-100 text-green-600 rounded-full p-2">
    ✅
  </div>
  <div>
    <p class="text-sm text-gray-400 font-mono">Transaction Successful</p>
    <p class="font-semibold text-base-content">Money added from <span class="text-green-500">${CuponInput}</span></p>
    <p class="font-semibold text-base-content">Amount <span class="text-green-500">5000 BDT</span></p>
    <p class="text-xs text-gray-400 mt-1">${new Date().toLocaleString()}</p>
  </div>
</div>
    `;
    
    TransactionElement.append(Transaction);
    }
    else if (CuponInput =="Fatema")
    {
         alert("cupon added!");
        const newBalance = currentBalance + 200;
        setBalance(newBalance);
         const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `<div id="Transaction-history" class="border border-green-400 rounded-2xl bg-base-200 w-full p-5 shadow-lg flex items-center gap-3">
  <div class="bg-green-100 text-green-600 rounded-full p-2">
    ✅
  </div>
  <div>
    <p class="text-sm text-gray-400 font-mono">Transaction Successful</p>
    <p class="font-semibold text-base-content">Money added from <span class="text-green-500">${CuponInput}</span></p>
    <p class="font-semibold text-base-content">Amount <span class="text-green-500">200 BDT</span></p>
    <p class="text-xs text-gray-400 mt-1">${new Date().toLocaleString()}</p>
  </div>
</div>
    `;
    
    TransactionElement.append(Transaction);

    }
    else if (CuponInput =="Mercy")
    {
        alert("cupon added!");
        const newBalance = currentBalance + 2000;
        setBalance(newBalance);
         const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `<div id="Transaction-history" class="border border-green-400 rounded-2xl bg-base-200 w-full p-5 shadow-lg flex items-center gap-3">
  <div class="bg-green-100 text-green-600 rounded-full p-2">
    ✅
  </div>
  <div>
    <p class="text-sm text-gray-400 font-mono">Transaction Successful</p>
    <p class="font-semibold text-base-content">Money added from <span class="text-green-500">${CuponInput}</span></p>
    <p class="font-semibold text-base-content">Amount <span class="text-green-500">2000 BDT</span></p>
    <p class="text-xs text-gray-400 mt-1">${new Date().toLocaleString()}</p>
  </div>
</div>
    `;
    
    TransactionElement.append(Transaction);

    }
    else
    {
        alert("Invalid cupon!");
        return;
    }

})