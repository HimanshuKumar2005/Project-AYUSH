const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define User Schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email address']
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Invalid phone number'] // Example: for a 10-digit phone number
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Password Hashing (Pre-save middleware)
userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        try {
            // Generate salt
            const salt = await bcrypt.genSalt(10);
            // Hash password with salt
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (err) {
            return next(err);
        }
    } else {
        return next();
    }
});

// Compare password method for login
userSchema.methods.comparePassword = async function(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
