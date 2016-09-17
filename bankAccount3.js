var accounts = [];

//accountObject will have below property
//name, balance

//createaccount(accountObject)
//push onto accounts array
//return account object (on which we added)
function createAccount(account){
    accounts.push(account);
    return account;
}

//getAccount(name)
//find matching account using foreach
function getAccount(name){
    var matchedAccount;
    accounts.forEach(function(obj){
        if(obj.name === name){
            matchedAccount = obj;
        }
    });;
    return matchedAccount;
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