const express = require('express');
const Comment = require('../models/commentModel');

exports.getAllComments = async (req, res) => {
  // console.log(req.reqestTime);
  try {
    const comments = await Comment.findById();

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: comments.length,
      data: {
        comments,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    // Same as comment.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        comment,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.addComment = async (req, res) => {
  try {
    // const newReel = new Reel({})
    // newReel.save()

    const addComment = await Comment.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        comment: addComment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.editComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      statud: 'success',
      data: {
        // It's just a plcae holder
        comment,
      },
    });
  } catch {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);

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
