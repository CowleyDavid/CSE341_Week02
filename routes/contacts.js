const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

//this is /contacts actually
router.get('/',contactsController.getAll);

//so this is /contacts/:id
router.get('/:id', contactsController.getSingle);

module.exports = router;
