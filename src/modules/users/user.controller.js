import { userModel } from "../../../database/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signUp = async(req,res)=>{
  const {name,email,password,age} = req.body;
  let user = await userModel.findOne({email});
  if(user){
    res.json({message:'email already in use'});
  }else{
    await bcrypt.hash(password,8,async function(err,hash){
      await userModel.insertMany({name,email,password:hash,age});
      res.json({message:'success'});
    })
  }
}
export const signIn = async(req,res)=>{
  const {email,password} = req.body;
  let user = await userModel.findOne({email});
  if (user || (await bcrypt.compare(password, user.password))){
    user.password=undefined
    let token = jwt.sign({user},'secret ky')
    return res.json({message:'login success',token})
  }
  
  res.json({message:'incorrect password or email'})
}