// eslint 8 才使用 .eslintrc.js
// eslint 9 好像不使用了
module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
    },
    env: {
        browser: true,
        node: true,
    },
    extends: 'airbnb-base',
    rules: {
        // 允許 tab=space*4
        indent: ['error', 4],
        // 不檢查 camelcase
        camelcase: 'off',
        // 不檢查換行格式 LF, CRLF 都可以
        'linebreak-style': 0,
        // 行最大長度
        'max-len': ['error', { code: 140 }],
    },
};
