//server.js
const exress=require('express');
const bodyParser=require('body-parser')
const userRoutes=require('./routes/userRoutes');
const {swaggerUi, swaggerDocs} = require('./swagger');

const app=exress();
app.use(bodyParser.json());

//Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//Routes setup
app.use('/api/users/',userRoutes);

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});