const jsonString = '{"firstname":"John", "lastname": "smith", "grades": [1, 20, 3,4]}';

const data = JSON.parse(jsonString);
console.log(data); 

console.log(data.firstname);
console.log(data.grades.length);
console.log(data.grades[1]);
  