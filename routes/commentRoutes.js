const express = require('express');

const commentController = require('../controllers/commentController');

const router = express.Router();

router
  .route('/')
  .get(commentController.getAllComments)
  .post(commentController.addComment);

router
  .route('/:id')
  .get(commentController.getComment)
  .patch(commentController.editComment)
  .delete(commentController.deleteComment);

module.exports = router;
