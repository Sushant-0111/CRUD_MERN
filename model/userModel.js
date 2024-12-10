import mongoose from "mongoose";


const userSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: trues
    },
    email:{
        type: String,
        required: trues
    },
    address:{
        type: String,
        required: trues
    }

})

export default mongoose.model("users", userSchema);


