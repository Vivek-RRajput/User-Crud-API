const mysql=require('mysql2');

const pool=mysql.createPool({
    // host: process.env.DB_HOST || 'db',  // <--- use 'db' for Docker Compose
    // user: process.env.DB_USER || 'root',
    // password: process.env.DB_PASSWORD || 'root',
    // database: process.env.DB_NAME || 'testdb',
    host:'db',
    user:'root',
    password:'root',
    database:'testdb',
    waitForConnections: true,
    connectionLimit: 10
});

module.exports=pool.promise();