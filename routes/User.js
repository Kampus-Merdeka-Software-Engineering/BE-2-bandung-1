const express = require('express')
const router = express.Router()
const {getDestinations, createDestinations} = require('../controllers/destination')
const {getUser, createUser} = require('../controllers/User')
const {getContactUs, createContactUs} = require('../controllers/ContactUs')

router.get('/', (req, res) => {
    res.send('Home page')
})

router.get("/destination", getDestinations);
router.post("/destination", createDestinations)

router.get("/User", getUser);
router.post("/User", createUser)

router.get("/ContactUs", getContactUs);
router.post("/ContactUs", createContactUs)

module.exports = router