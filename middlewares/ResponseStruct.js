/**
 * 建立 response 結構 function
 * 把 function 放進 response
 */
module.exports = async (req, res, next) => {
    /**
     * 執行成功
     * @typedef {object} StructSuccess
     * @property {boolean} success - 執行結果 true
     */
    res.SendSuccess = (data) => {
        res.status(200).json({
            success: true,
            data,
        });
    };

    /**
     * 分頁結構
     * @typedef {object} StructPaging
     * @property {boolean} success - 執行結果 true
     * @property {number} total - 篩選後總共幾筆
     * @property {array<object>} list - 資料清單
     */
    res.SendPaging = (paging) => {
        const { total, list } = paging;
        if (total === undefined || list === undefined) {
            throw new Error('paging error');
        }
        res.status(200).json({
            success: true,
            total,
            list,
        });
    };

    /**
     * 執行錯誤
     * @typedef {object} StructError
     * @property {boolean} success - 執行結果 false
     * @property {string} message - 錯誤訊息
     */
    res.SendError = (error, status = 500) => {
        let { message } = error;
        if (message === undefined || message === null) {
            message = 'Internal Server Error';
        }
        res.status(status).json({
            success: false,
            message,
        });
    };

    next();
};
