const express = require('express');
const app = express()

//shows static pages from the cluent folder
app.use(express.static("./client"))
//able to decode infor that is being parsed from forms
app.use(express.urlencoded({ encoded: true }))
//parses through json objects
app.use(express.json())

app.set('view engine', 'ejs')

const userRouter = require("./server/Routes/users")

app.use('/users', userRouter)

app.listen(3000)