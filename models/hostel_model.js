const mongoose = require('mongoose');

const hostelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a hostel name'],
    },
    location: {
      type: String,
      required: [true, 'Please add a hostel location'],
    },
    num_of_rooms: {
      type: Number,
      rrequired: [true, 'Please add number of rooms'],
    },
    facilities: {
      type: [String],
      required: [true, 'Please add the facilities offered'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Hostel',hostelSchema);