const express = require('express');
const router = express.Router();


// @route GET api/posts/test
// desc Test posts routes
// @access Public
router.get('/test', (req, res) => {
	res.json('Posts Works')
})

module.exports = router;
