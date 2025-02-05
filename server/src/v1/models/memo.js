const mongoose = require("mongoose");

const memoSchema = new mongoose.Schema({
    user:{
        //mongoose.Schema.Types.ObjectIdとrefはセット
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    icon: {
        type: String,
        default: "📝",
    },
    title: {
        type:String,
        default: "無題",
    },
    description: {
        type: String,
        default: "ここに自由に記入してください。",
    },
    position: {
        type: Number,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    favoritePosition: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("Memo", memoSchema)