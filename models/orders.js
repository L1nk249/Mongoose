const mongoose = require('mongoose');




const orderSchema = mongoose.Schema({
	total: Number,
	shippingFees: Number,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	isPaid: Boolean,
	articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
	purchaseDate: Date,
	
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;

