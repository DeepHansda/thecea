const BookModel = require('../db/models/book.model')

module.exports = {
    addBook:async(req,res)=>{
        try {
            const {coverImg,title,desc,author,pages} = req.body
            

        } catch (error) {
            console.log(err)
        }
    }
}