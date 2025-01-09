const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 5000;
require("dotenv").config()

//JSONオブジェクトを認識できるようになる
app.use(express.json())

app.use("/api/v1", require("./src/v1/routes/auth"))

//loalhost:5000/api/v1/register

//DB接続
try {
    mongoose.connect(process.env.MONGO_URL,{});
    console.log("DBと接続中...")
} catch(error) {
    console.log(error)
}




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})