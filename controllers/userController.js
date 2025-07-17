//userconstants.js

const db = require('../db');

//Get all users
exports.getUsers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};

//Get user by id
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE ID=?', [userId]);

        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

//Create a new user
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const [result] = await db.query('Insert into users (name,email) values (?,?)', [name, email]);
        if (result.affectedRows > 0) {
            res.status(201).json({ id: result.insertId, name, email });
        } else {
            res.status(400).send('User creation failed');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

//update user by id
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    try {
        const [result] = await db.query('update users set name=?,email=? where ID=?', [name, email, userId]);
        if (result.affectedRows > 0) {
            res.status(200).json({ id: userId, name, email });
        } else {
            res.status(404).status(404).send('User not found or no changes made');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

//delete user by id
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const [result] = await db.query('DELETE FROM users WHERE ID=?', [userId]);
        if (result.affectedRows > 0) {
            res.status(204).send();
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}