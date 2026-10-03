import mongoose from "mongoose";


export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://pammyrani17_db_user:kxsEpBX8LZJ5kAIt@cluster0.bvjunwm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}