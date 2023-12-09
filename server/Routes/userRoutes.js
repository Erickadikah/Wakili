const user = require('../Models/user');
const express = require('express');
const userRoute = express.Router();
const bcrypt = require('bcryptjs');
const { jwtSecret } = require('../Helper/authJwt');
const jwt = require('jsonwebtoken');

// Create a new user and hash the password
userRoute.post('/register', async (req, res) => {
    try {
        const existingUser = await user.findOne({ email: req.body.email });

        if (existingUser) {
            // If the user with the same email exists, send a message and don't proceed with registration
            res.status(400).send('User with this email already exists. Please log in.');
        } else {
            const password = req.body.password;

            if (!password || typeof password !== 'string') {
                res.status(400).send('Invalid password');
                return;
            }

            // Generate a salt and hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new user({
                title: req.body.title,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                phone: req.body.phone,
                email: req.body.email,
                password: hashedPassword // Store the hashed password
            });

            const savedUser = await newUser.save();
            res.status(200).send(savedUser);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Login a user
userRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const foundUser = await user.findOne({ email });

        if (!foundUser) {
            res.status(401).send('Incorrect email');
            return;
        }

        const match = await bcrypt.compare(password, foundUser.password);

        if (!match) {
            res.status(401).send('Incorrect password');
            return;
        }

        // Passwords match - login user
        // Generating and send JWT token to client
        const token = jwt.sign({ _id: foundUser._id }, jwtSecret, { expiresIn: '1h' });

        res.status(200).send({ user: foundUser, token });
        console.log('User logged in successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Get all users
userRoute.get('/users', async (req, res) => {
    try {
        const users = await user.find({});
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Get a user by id
userRoute.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const foundUser = await user.findById(id);

        if (!foundUser) {
            res.status(404).send('User not found');
        } else {
            res.status(200).send(foundUser);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = userRoute;
