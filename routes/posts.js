const router = require('express').Router();

// @desc     Add post
// @route    POST /api/posts
// @access   Private
router.post('/', (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
