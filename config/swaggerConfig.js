const swaggerOption = {
    info: {
        version: '1.0.0',
        title: 'node_slim_devcontainer',
    },
    servers: [
        {
            url: `http://localhost:${process.env.PORT}`,
            description: 'Local',
        },
    ],
    security: {
        BearerAuth: {
            type: 'http',
            scheme: 'bearer',
        },
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    // filesPattern: './**/*.js',
    filesPattern: ['../routes/**/*.js', '../middlewares/ResponseStruct.js'],
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/docs',
    // Expose OpenAPI UI, 正式站不啟用
    exposeSwaggerUI: process.env.NODE_ENV === 'development',
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: false,
    // Open API JSON Docs endpoint.
    // apiDocsPath: '/v3/api-docs',
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
    // You can customize your UI options.
    // you can extend swagger-ui-express config. You can checkout an example of this
    // in the `example/configuration/swaggerOptions.js`
    swaggerUiOptions: {},
    // multiple option in case you want more that one instance
    multiple: true,
};

module.exports = swaggerOption;
