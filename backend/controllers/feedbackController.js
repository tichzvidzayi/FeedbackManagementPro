const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json({ success: true, data: feedback });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json({ success: true, data: feedback });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
