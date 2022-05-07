let bankAccounts: {
    money: number,
    deposit(value: number): void
} = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let mySelf: {
    name: string,
    bankAccount: typeof bankAccounts,
    hobbies: Array<string>
} = {
    name: "John",
    bankAccount: bankAccounts,
    hobbies: ["Violin", "Cooking"]
};

interface BankAccount {
    money: number;
    deposit(value: number): void;
}

interface Person {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[]
}

let myself2: Person = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};