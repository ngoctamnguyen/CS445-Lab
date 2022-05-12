async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

async function myFunctionThatCatches() {
    try {
        return await thisThrows();
    } catch (e) {
        console.error('error here.......');
    } finally {
        console.log('We do cleanup here');
    }
    return "Nothing found";
}

async function run() {
    const myValue = await myFunctionThatCatches();
    console.log(myValue);
}

run();