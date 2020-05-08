const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    carId: { type: Schema.Types.ObjectId, ref: 'Car' },
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    publisherId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
