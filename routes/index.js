const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    try {
        const data = {
            title: 'node_slim_devcontainer',
            description: 'test API',
        };
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
