//value input amount,cashout num , cashout pin
function getValueFormInput(id){

    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// get balance 
function getBalance (){

    const currentBalance = document.getElementById("balance");
    const Balance = currentBalance.innerText;
    console.log(Number(Balance));
    return Number(Balance);

}

//set balance 
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;

}

//showonly - which button is selected

function showonly(id)
{
    const addMoney = document.getElementById("addMoney");
    const cashout = document.getElementById("cashout");
    const Transaction = document.getElementById("Transaction");
    console.log(`${addMoney}`)

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    Transaction.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}

function showTransactions(){

    const TransactionElement = document.getElementById("Transaction-history");
    const Transaction = document.createElement('div');

    Transaction.innerHTML = `
    <div id="Transaction-history" class = "border border-gray-400 rounded-full bg-base-200 w-full p-5">
    
           Money added succesfully from ${Bank} at ${new Date()}

    </div>
    `;
    TransactionElement.append(Transaction);


}