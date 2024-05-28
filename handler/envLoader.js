/**
 * 載入 .env
 * 使用 dotenv 載入環境變數，不用 rebuild container
 */
require('dotenv').config({
    override: true,
    debug: process.env.DEBUG,
    path: `${process.cwd()}/.env`,
});

/**
 * 檢查需要的 env 是否有設定
 */
const envLoading = () => {
    // 哪些 key 一定要設定
    // const checkKeyList = ['TOKEN'];
    const checkKeyList = [];
    checkKeyList.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`\`${key}\` required `);
        }
    });
};

module.exports = envLoading;
