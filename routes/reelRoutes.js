const express = require('express');

const reelController = require('../controllers/reelController');

const router = express.Router();

// router.param('id', (req, res, next, val) => {
//     console.log(`Reel id is: ${val}`);
//     next();
// })

// router.param('id', reelController.checkID);

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back 400 (body request)
// Add it to the post handler stack

router
  .route('/')
  .get(reelController.getAllReels)
  .post(reelController.createReel);

router
  .route('/:id')
  .get(reelController.getReel)
  .patch(reelController.updateReel)
  .delete(reelController.deleteReel);

module.exports = router;
