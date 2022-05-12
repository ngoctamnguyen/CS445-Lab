window.onload = function() {
    fetchUsers();

    document.getElementById('user-form').onsubmit = async function(event) {
        event.preventDefault();
        let mode = this.dataset.mode;


        const id = document.getElementById('id').value;
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const age = document.getElementById('age').value;

        if (mode === 'add') {
            let response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify({
                    id,
                    firstname,
                    lastname,
                    age
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            let user = await response.json();

            document.getElementById('table-body').innerHTML += `
            <tr id="tr${user.id}">
                <th scope="row">${user.id}</th>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.age}</td>
            </tr>
        `;

        } else {
            //submit edit one
            let response = await fetch('http://localhost:3000/users/' + id, {
                method: 'PUT',
                body: JSON.stringify({
                    id,
                    firstname,
                    lastname,
                    age
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            let user = await response.json();

            let tdlist = document.querySelectorAll(`#tr${id}  td`);
            tdlist[0].innerHTML = user.firstname;
            tdlist[1].innerHTML = user.lastname;
            tdlist[2].innerHTML = user.age;
            this.dataset.mode = 'add';

        }
        this.reset();
    }
}

function fetchUsers() {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            let html = `
                <table class="table" id="user-table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Age</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody id="table-body">
      
            `;

            users.forEach(user => {
                html += `
                    <tr id="tr${user.id}">
                        <th scope="row">${user.id}</th>
                        <td>${user.firstname}</td>
                        <td>${user.lastname}</td>
                        <td>${user.age}</td>
                        <td><button onclick='editUserById(${user.id})'>EDIT</button><button onclick="deleteById(${user.id});">DELETE</button></td>
                    </tr>               
               `;
            });

            html += `
                </tbody>
            </table>
            `;
            document.getElementById('users').innerHTML = html;
        });
}

function deleteById(id) {
    console.log(id);
    fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById(id).remove();
        });
}

async function editUserById(id) {

    let response = await fetch('http://localhost:3000/users/' + id);
    let user = await response.json();

    document.getElementById('id').value = user.id;
    document.getElementById('firstname').value = user.firstname;
    document.getElementById('lastname').value = user.lastname;
    document.getElementById('age').value = user.age;
    document.getElementById('submit-btn').dataset.mode = 'edit';


}