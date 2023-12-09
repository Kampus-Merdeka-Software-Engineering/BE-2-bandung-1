const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000
const userRouter = require('./routes/User')

app.use(cors());
app.use(express.json());
app.use(userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})