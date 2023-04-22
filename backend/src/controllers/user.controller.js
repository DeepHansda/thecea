const UserModel = require('../db/models/user.model')

module.exports = {
    signUp:async(req,res)=>{
        try {
            const {fullName,email,password} = req.body
            
        } catch (error) {
            console.log(err)
        }
    },
    signIn:async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    },
    updateUser:async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    },
    getUser:async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    },
}