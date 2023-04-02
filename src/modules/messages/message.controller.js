import { messageModel } from "../../../database/models/message.model.js"


export const addMsg =async (req,res)=>{
  const {message,receivedId} = req.body
  await messageModel.insertMany({message,receivedId})
  res.json({message:'success'})
}
export const getMsg =async (req,res)=>{
  const id = req.userId
  let messages= await messageModel.find({receivedId:id})
  res.json({message:'success'},messages)
}
export const deleteMsg =async (req,res)=>{
  const {id} = req.body
  let deleted= await messageModel.findByIdAndDelete({id})
  res.json({message:'success'},deleted)
}