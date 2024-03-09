const express = require('express');

const router = express.Router();

const hostelControllers = require('../controllers/hostel_controllers');

const { protect } = require('../middlewares/auth_middleware');

//Routes
router.post('/', protect, hostelControllers.createHostel);

router.get('/', protect, hostelControllers.getHostels);

router.patch('/:id', protect, hostelControllers.updateHostel);

router.delete('/:id', protect, hostelControllers.deleteHostel)


module.exports = router;