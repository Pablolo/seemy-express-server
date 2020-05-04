const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		firstName: { type: String, required: true},
		lastName: { type: String, required: true},
		email: { type: String, required: true, unique: true },
		hashedPassword: { type: String, required: true },
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;