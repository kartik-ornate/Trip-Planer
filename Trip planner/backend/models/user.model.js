// import mongoose from 'mongoose'
// const userSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,'provide name']
//     },
//     email:{
//         type:String,
//         required:[true,'provide email']   
//     },
//     password:{
//         type:String,
//         required:[true,'provide password']
//     },
//     forgot_password_otp:{
//         type:String,
//         default:null
//     },
//     forgot_password_expiry:{
//         type:Date,
//         default:''
//     },
//     mobile:{
//         type:Number,
//         default:null,
//     },
//     last_login_date:{
//         type:String,
//         default:''
//     },
//     refresh_token:{
//         type:String,
//         default:''
//     },
//     verify_email:{
//         type:Boolean,
//         default:false
//     },
//     access_token:{
//         type:String,
//         default:'',
//     },
//     wishlist:{
//         type:mongoose.Schema.ObjectId,
//         ref:'wishlist'
//     }
// },{
//     timestamps:true,
// })
// const userModel=mongoose.model('User',userSchema)
// export default userModel;
