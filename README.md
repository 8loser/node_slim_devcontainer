# Node Slim devContainer
使用 devContainer 開發 Node，包含功能如下


 * 主要架構
   * devContainer; node:18-slim
   * express
 * 程式碼自動格式
   * eslint; [.eslintrc.js](.eslintrc.js)
   * vscode 設定 [settings.json](.vscode/settings.json)
 * 環境變數載入
   * dotenv
   * [envLoader.js](handler/envLoader.js)
 * 程式碼變更偵測重啟
   * nodemon
 * OpenAPI 文件
   * express-jsdoc-swagger
   * [swaggerConfig.js](config/swaggerConfig.js)
 * Response 資料結構打包
   * [ResponseStruct.js](middlewares/ResponseStruct.js)

# 檔案結構
```
.
├── app.js
├── bin
│   └── www
├── config
│   └── swaggerConfig.js
├── handler
│   └── envLoader.js
├── middlewares
│   └── ResponseStruct.js
├── package.json
├── pnpm-lock.yaml
├── README.md
└── routes
    └── index.js
```

