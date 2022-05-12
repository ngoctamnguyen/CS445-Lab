const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [
    { id: 1, firstname: 'John', lastname: 'Smith', age: 20 },
    { id: 2, firstname: 'Edward', lastname: 'Swift', age: 22 },
    { id: 3, firstname: 'Tina', lastname: 'Xing', age: 18 },
    { id: 4, firstname: 'Irene', lastname: 'Xing', age: 1 }
];

app.get('/users', (req, res, next) => {
    res.json(users);
});

app.get('/users/:id', (req, res, next) => {
    let user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        throw new Error(`NO USER FOUND with ID: ${req.params.id}`);
    }
});

app.post('/users', (req, res, next) => {
    users.push(req.body);
    res.json(req.body);
});

app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id);
    let deletedUser = users[index];
    users.splice(index, 1);
    res.json(deletedUser);

})

app.put('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id);
    users[index] = req.body;
    res.json(req.body);
})

app.use((req, res, next) => {
    res.status(404).json({ error: 'API NOT SUPPORTED' });
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ error: 'Error Happened!!' });
})

app.listen(3000, () => console.log('listening to 3000'));