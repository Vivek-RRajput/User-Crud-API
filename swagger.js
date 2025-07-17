//swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Crud API',
            version: '1.0.1',
            description: 'Simple CRUD API using Node.js, Express, and MySQL and Swagger for documentation',
        },
        servers: [{
            url: 'http://localhost:3000'
        }
        ]

    },
    apis: ['./routes/*.js', './controllers/*.js'] // Path to the API docs

};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports={
    swaggerUi,
    swaggerDocs
};