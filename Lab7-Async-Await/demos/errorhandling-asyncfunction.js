//asynchronous function

async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

try {
    thisThrows();
} catch (e) {
    console.error(e);
} finally {
    console.log('We do cleanup here');
}