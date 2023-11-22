const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
// URL/endpoint utama method GET

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('main page')
})

app.get('/home', (req, res) => {
    console.log({params: req.query})
  res.send('jateng')
})

app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
    res.send('login success')
})

app.put('/username', (req, res) => {
    console.log({ updateData: req.body })
    const username =req.body.username
    if (username === usernameFromDbExist){
        res.status(400).send("username telah digunakan")
    }
    res.send('Update success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})