class BankAccount {
    #balance = 0; // private property

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(1000);
account.withdraw(300);
account.withdraw(100)

console.log(account.getBalance());