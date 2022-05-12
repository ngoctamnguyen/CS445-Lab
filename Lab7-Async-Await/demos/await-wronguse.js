// async function foo() {
//     return 'done!';
// }

// function bar() {
//     let result = await foo(); // Syntax error
//     console.log(result);
// }
// bar();

async function baz() {
    return 'baz...';
}

let result = await baz(); //Syntax Error
console.log(result);