const mongoose = require("mongoose");
require('mongoose-double')(mongoose);
const { Schema } = mongoose;
const itemsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemCategory: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String
    },
    itemTip: {
        type: Number
    },
    itemFound: {
        type: Boolean,
    },
    finderEmail: {
        type: Array,
    },
    postDate: {
        type: Date,
    },
});
mongoose.model("Items", itemsSchema);
