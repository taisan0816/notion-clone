const router = require("express").Router()
const memoController = require("../controllers/memo")
const tokenHandler = require("../handlers/tokenHandler")

//メモを作成
router.post("/", tokenHandler.verifyToken, memoController.create)

//ログインしているユーザーが投稿したメモをすべて取得
router.get("/", tokenHandler.verifyToken, memoController.getAll)

router.get("/:memoId", tokenHandler.verifyToken, memoController.getOne)

router.put("/:memoId", tokenHandler.verifyToken, memoController.update)

router.delete("/:memoId", tokenHandler.verifyToken, memoController.delete)

module.exports = router