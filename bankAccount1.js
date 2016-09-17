var account = {
	balance : 0
}

//deposit
function doDeposit(account, amount)
{
    account.balance = account.balance + amount;
}

//withdraw
function doWithdraw(account, amount)
{
    if(account.balance > amount) {
            account.balance = account.balance - amount;
    } else {
            console.log("Wait for salary buddy.")
    }
}

//get balance
function getBalance(account)
{
    return account.balance;
}


doDeposit(account, 1000);
console.log(account.balance);

doWithdraw(account, 100);
console.log(account.balance);

var currentBalance = getBalance(account);
console.log(currentBalance);