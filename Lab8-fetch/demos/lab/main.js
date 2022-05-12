window.onload = function(){
    refreshUser();

    document.getElementById("refreshBtn").onclick = refreshUser;
}

function refreshUser(){
    fetchUser('https://randomuser.me/api/');
}


async function fetchUser(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let phone = jsonObj.results[0].phone;
    let email = jsonObj.results[0].email;
    let profileImageURL = jsonObj.results[0].picture.large;

    document.getElementById("name").innerHTML = firstName + " " + lastName;
    document.getElementById("phone").innerHTML = phone;
    document.getElementById("email").innerHTML = email;
    document.getElementById("profileImage").src = profileImageURL;
    
}