window.onload = function(){
    document.getElementById("submitBtn").onclick = function(evt){
        evt.preventDefault();
        const title = document.getElementById("title").value;
        const body = document.getElementById("body").value;
        const userId = document.getElementById("userId").value;
        
        let postObject = {
            title: title,
            body: body,
            userId: userId,
        };
        let jsonString = JSON.stringify(postObject);
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: jsonString,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(json => console.log(json));


    };
}



