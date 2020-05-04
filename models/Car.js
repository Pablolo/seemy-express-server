const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema(
	{
		location: { type: String, required: false }, // City, Street Address, State / Region /Province, Zip /Postal Code
		model: { type: String, required: true }, // Year, Make, Model, Odometer
		transmission: { type: String, required: true }, // Manual, Automatic
		image: { type: String, required: true }, 
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const Car = mongoose.model('Car', carSchema);

module.exports = Car;