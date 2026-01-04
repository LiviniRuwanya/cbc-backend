import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },firstName:{
        type:String,
        required:true,
    },lastName:{
        type:String,
        required:true,
    },password:{
        type: String,
        required: true,
        unique:true
    },isBlocked:{
        type:Boolean,
        default: false,
    },Type:{
        type: String,
        default:"customer",
    },profilePicture:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fprofile%2520icon&psig=AOvVaw1B85Wd0RKwiY9iYUE8MhKM&ust=1733549584068000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD3u8q1kooDFQAAAAAdAAAAABAE",
    }
})

const User= mongoose.model("users",userSchema)

export default User;