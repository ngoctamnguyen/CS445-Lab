// Set will filter out duplicates
// Use spread operator to extend Set to an Array
Array.prototype.removeDuplicatesAsync = async function() {
    console.log(await [...new Set(this)]);
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);