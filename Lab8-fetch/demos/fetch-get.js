let postPromise = fetch('https://randomuser.me/api/');
// postPromise.then(response => console.log(response));
postPromise.then(response => response.json())
    .then(result => console.log(result.length)); //result is js object