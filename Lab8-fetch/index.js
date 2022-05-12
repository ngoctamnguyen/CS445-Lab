window.onload = function(){
    fetchEmployee();
    document.getElementById("refreshBtn").onclick = fetchEmployee;
}

function refreshUser(){
    fetchUser('https://randomuser.me/api/');
}

async function fetchEmployee(URL) {
    let response = await fetch('https://randomuser.me/api/?results=5');
    let emps = await response.json();
    renderEmployees(emps.results);
}

function renderEmployees(emps) {
    for ( let i = 0; i < emps.length; i++ ) {
        let emp = emps[i];
        document.getElementById('img' + i).src = emp.picture.large;
        document.getElementById('name' + i).innerHTML = emp.name.first + " " + emp.name.last;
        document.getElementById('phone' + i).innerHTML = 'Phone: ' + emp.phone;
        document.getElementById('email' + i).innerHTML = emp.email;
    }
}
