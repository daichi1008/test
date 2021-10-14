const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/show', (req, res) => {
    let date = fs.readFileSync(`./db.txt`);
    res.send(`${date}`)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})