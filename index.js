const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.json([
    {
        name: '남동길',
        email: 'ndgndg01@gmail.com'
    },
    {
        name: '김철수',
        email: 'kcs@gmail.com'
    },
    {
        name: '김영희',
        email: 'kyh@gmail.com'
    }
]));

app.listen(port, () => console.log(`User Service Api App listening on port ${port}`));