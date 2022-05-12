window.onload = function(){
    document.getElementById("getPostBtn").onclick = function(){
        fetchPostById(document.getElementById("userId2").value);
    }
}

async function fetchPostById(postid) {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + postid);
    console.log(response);
    if (response.ok) {
        let json = await response.json();
        console.log(json);
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}



// Remember to use try/catch in case of network problems