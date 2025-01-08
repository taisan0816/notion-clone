const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 5000;
require("dotenv").config()

//DB接続
try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("DBと接続中...")
} catch(error) {
    console.log(error)
}

//ユーザー新規登録API

//ユーザーログイン用API


app.listen(PORT, () => {
    console.log('ローカルサーバー起動中')
})