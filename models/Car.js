const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema(
  {
    location: {
      streetAdress: { type: String, required: true },
      city: { type: String, required: true },
      province: { type: String, required: true },
      postalCode: { type: Number, required: true },
    },
    carSpecs: {
      year: { type: Number, required: true },
      make: { type: String, required: true },
      model: { type: String, required: true },
      odometer: { type: Number, required: true },
    },
    transmission: { type: String, required: true },
    availability: {
      advanceNoticeHours: { type: Number, required: true },
      maxDurationDays: { type: Number, required: true },
    },
    image: { type: String, required: true },
    description: { type: String, required: true },
    licensePlate: { type: String, required: true },
    dailyPrice: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
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
