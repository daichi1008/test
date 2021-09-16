const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
    let { name, surname } = req.query;
    let f = s => s[0].toUpperCase() + s.slice(1);
    res.send([name, surname].map(f).join(' '));


});

app.get('/save', (req, res) => {
    let { body } = req.query;
    fs.writeFileSync('./db.txt', body, 'utf-8');
    res.send(`保存しました。<blockquote>${body}</blockquote>`)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})