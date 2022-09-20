const express = require('express');

app = express();

const port = 2517;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello from the other side',
        app: 'Natours'
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})