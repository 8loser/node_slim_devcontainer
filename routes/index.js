const express = require('express');

const router = express.Router();

/**
 * @typedef {object} ModelIndex
 * @property {number} index_key
 * @property {string} description - 描述
 */

/**
 * GET /
 * @summary index API
 * @tags Index
 * @return {allOf|StructSuccess|ResponseGetIndex} 200 - 成功
 * @return {StructError} 500 - 失敗
 * @typedef {object} ResponseGetIndex
 * @property {ModelIndex} data - 資料清單
 */
router.get('/', (req, res) => {
    try {
        const data = {
            index_key: 9,
            description: 'test API',
        };
        return res.SendSuccess(data);
    } catch (error) {
        return res.SendError(error);
    }
});

module.exports = router;
