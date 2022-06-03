const contactcontroller = require('../controller/contact.controller')

const router = require("express").Router();

const Contact = require('../models/contactModel')

router.get('/',contactcontroller.getallcontact)
router.get('/:id',contactcontroller.getSingleContact)
router.put('/:id',contactcontroller.updatecontact)

router.post("/", contactcontroller.postcontact);

module.exports = router;
