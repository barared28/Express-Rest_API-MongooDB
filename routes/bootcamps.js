const express = require('express');
const router = express.Router();

// load controllers
const { getBootcamps, getBootcamp, createBootcamp, deleteBootcamp, updateBootcamp } = require('../controllers/bootcamps')

// route
router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);


module.exports = router;