const Hostel = require('../models/hostel_model');

//Task creation
exports.createHostel = async (req, res) => {
  try {
    const { name, location, num_of_rooms, facilities } = req.body;
    const {id} = req.user
    //Check for required fields
    if (!name || !location || !num_of_rooms || !facilities) {
      res.status(400);
      throw new Error('Please fill required fields');
    }

    //Check for existance of hostel.
    if(await Hostel.findOne({name})){
      res.status(400);
      throw new Error('Hostel already exists')
    }

    //Create hostel.
    const newHostel = await Hostel.create({
      name,
      location,
      num_of_rooms,
      facilities,
      user: id
    });

    if (!newHostel) {
      res.status(400);
      throw new Error('New hostel creation failed');
    }
    return res.status(201).json({message: 'New hostel created'})

  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

//Get all tasks
exports.getHostels = async (req, res) => {
  try {
    //Get all hostelss
    const hostels = await Hostel.find().select('-user');

    if (hostels.length == 0) {
      res.status(404);
      throw new Error('No hostels available');
    }
    return res.status(200).json(hostels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update hostel
exports.updateHostel = async (req, res) => {
  try {
    const { id } = req.user;
    const {name} = req.body;
    // Check for hostel
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) {
      res.status(404);
      throw new Error('Hostel not found');
    }
    if (hostel.user != id) {
      res.status(403);
      throw new Error('User not authorized to update hostel');
    }

    //Check for existance of hostel with same name.
    if (await Hostel.findOne({ name })) {
      res.status(400);
      throw new Error('Hostel already exists, choose another name');
    }

    //Update hostel
    const updateHostel = await Hostel.findByIdAndUpdate(req.params.id, req.body);

    if (!updateHostel) {
      res.status(400);
      throw new Error('Hostel update failed');
    }

    return res.status(200).json({ message: 'Hostel updated' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//Delete a hostel.
exports.deleteHostel = async(req,res) => {
try {
  const { id } = req.user;

  // Check for hostel
  const hostel = await Hostel.findById(req.params.id);
  if (!hostel) {
    res.status(404);
    throw new Error('Hostel not found');
  }
  if (hostel.user != id) {
    res.status(403);
    throw new Error('User not authorized to delete hostel');
  }
  //Delete task
  const deleteHostel = await Hostel.findByIdAndDelete(req.params.id);

  if (!deleteHostel) {
    res.status(400);
    throw new Error('Hostel deletion failed');
  }

  return res.status(200).json({ message: 'Hostel deletion successful' });
} catch (error) {
  res.status(400).json({error: error.message})
}
}