const Memo = require("../models/memo")

exports.create = async(req, res) => {
    try{
        const memoCount = await Memo.find().countDocuments();
        //メモ新規作成
        const memo = await Memo.create({
            user: req.user._id,
            position: memoCount > 0 ? memoCount: 0,
        });
        res.status(201).json(memo)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

exports.getAll = async(req, res) => {
    try{
        const memos = await Memo.find({user: req.user._id}).sort("-position");
        res.status(200).json(memos)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}