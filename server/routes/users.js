const express = require('express');
const User = require('../models/User');
const router = express.Router();
const auth = require('../middleware/auth');

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', auth, async (req, res) => {
  try {
    const {
      name,
      branch,
      email,
      pesuId,
      semester,
      contactNo,
      srn,
      section,
      aadharNo,
      program,
      aadharName
    } = req.body;

    // Build user object
    const userFields = {};
    if (name) userFields.name = name;
    if (branch) userFields.branch = branch;
    if (email) userFields.email = email;
    if (pesuId) userFields.pesuId = pesuId;
    if (semester) userFields.semester = semester;
    if (contactNo) userFields.contactNo = contactNo;
    if (srn) userFields.srn = srn;
    if (section) userFields.section = section;
    if (aadharNo) userFields.aadharNo = aadharNo;
    if (program) userFields.program = program;
    if (aadharName) userFields.aadharName = aadharName;

    let user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user = await User.findByIdAndUpdate(
      req.userId,
      { $set: userFields },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;