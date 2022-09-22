const { query } = require('express');
const Reel = require('./../models/reelModel');

// Start Check Middlewares

/*
exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > reels.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'failed',
      message: 'Missing name or price',
    });
  }
  next();
  // next middleware will be createReel
};
*/

// End Check Middlewares

exports.getAllReels = async (req, res) => {
  // console.log(req.reqestTime);
  try {
    // Destructuring
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // Advanced Filtering 
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match=>`$${match}`);

    // console.log(JSON.parse(queryStr));

    // console.log(req.query, queryObj);
    const query = Reel.find(JSON.parse(queryStr));

    const reels = await query;

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: reels.length,
      data: {
        reels,
        // same as
        // reels: reels
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getReel = async (req, res) => {
  try {
    const reel = await Reel.findById(req.params.id);
    // Same as Reel.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        reel,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createReel = async (req, res) => {
  try {
    // const newReel = new Reel({})
    // newReel.save()

    const newReel = await Reel.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        reel: newReel,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateReel = async (req, res) => {
  try {
    const reel = await Reel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      statud: 'success',
      data: {
        // It's just a plcae holder
        reel,
      },
    });
  } catch {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteReel = async (req, res) => {
  try {
    await Reel.findByIdAndDelete(req.params.id);

    res.status(204).json({
      statud: 'success',
      data: null,
    });
  } catch {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
