setTimeout(() => console.log('setTimeout results'), 0);
const promise = new Promise((resolve) => resolve(`Promise results`));
console.log('Code starts');
promise.then(console.log);
console.log('I love JS');