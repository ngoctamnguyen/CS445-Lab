/*Re-write the following code using TypeScript. Try to be as explicit as possible and add
 Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
*/
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
