function createBankAccount() {
    let balance= 0;
    function deposit(amount) {
        balance= balance+ amount;
        console.log("Deposited:", amount)
        
    }
    function withdraw(amount){
        if(amount>balance){
            console.log("Insufficient balance")

        }
        else{
            balance = balance-amount;
            console.log("Withdrawn:",amount)
        }
    }
    function checkBalance() {
        console.log("Current Balance:", balance);
        
    }
    return{
        deposit: deposit,
        withdraw: withdraw,
        checkBalance:checkBalance
    };
}