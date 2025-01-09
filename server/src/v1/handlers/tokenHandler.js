const JWT = require("jsonwebtoken")
const User = require("../models/user")

//クライアントから渡されたJWTが正常か検証
const tokenDecode = (req) => {
    const bearerHeader = req.headers["authorization"];
    if(bearerHeader) {
        //"authorization" : "bearer token"という形がreq.headersにあり、tokenの部分を取り出す.
        const bearer = bearerHeader.split(" ")[1]
        try{
            //verifyでbearerをデコードする.
            const decodedToken = JWT.verify(bearer, process.env.TOKEN_SECRET_KEY)
            return decodedToken;
        }catch{
            return false;
        }
    } else {
        return false;
    }
}

//JWT認証を検証するためのミドルウェア
exports.verifyToken = async (req, res, next) => {
    const tokenDecoded = tokenDecode(req);
    if(tokenDecoded) {
        //そのJWTと一致するユーザーを探してくる. encodeはidでしたから？decodeしたときidを含んでいるからfindById
        const user = await User.findById(tokenDecoded.id);
        if(!user) {
            return res.status(401).json("権限がありません");
        }
        req.user = user;
        //midlewareが正常に動作すればつぎの処理を実行する
        next();
    }else{
        return res.status(401).json("権限がありません")
    }
}