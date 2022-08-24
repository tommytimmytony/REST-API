const mongoose = require('mongoose');

const subscribersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subscribedToChannel: {
        type: String,
        require: true
    }, 
    subscriberDate: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscribersSchema);