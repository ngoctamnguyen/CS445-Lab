Array.prototype.removeDuplicatesAsync = function() {
    new Promise((resovle, reject) => {
        resovle([... new Set(this)]);
    }).then(console.log);
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);