const express = require('express')
const router = express.Router()

//routes match and move from top to bottom
//static routes should always be above the dynamic routes


//gethers list of users
router.get("/", (req, res) => {
    //how to capture the query parameters of a url . (http://localhost:3000/users?name=Ethan) will show Ethan
    console.log(req.query.name)

    res.send("Users List")
})

//new user form
router.get("/new", logger, (req, res) => {
    res.render("users/new")
})

//creates a new user form
router.post('/', (req, res) => {
    res.send("Create user")
})

// .route is for different actions built into the same url (geet,put,delete)
router
    .route("/:uid", logger)
    .get((req, res) => {
        req.params.uid
        res.send(`getting user with unique ID ${req.params.uid}`)
    })
    .put((req, res) => {
        req.params.uid
        res.send(`getting user with unique ID ${req.params.uid}`)
    })
    .delete((req, res) => {
        req.params.uid
        res.send(`getting user with unique ID ${req.params.uid}`)
    })


router.param("uid", (req, res, next, uid) => {
    next()
})

//creating middleware functions
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


module.exports = router