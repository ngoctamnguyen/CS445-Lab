async function baz() {
    return 'baz...';
    }

async function foo() {
    let result = await baz(); //Syntax Error
    console.log(result); 
}

foo();