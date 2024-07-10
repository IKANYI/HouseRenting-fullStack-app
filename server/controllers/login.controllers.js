import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

import jwt from 'jsonwebtoken';
export const acceptUser = async (req, res) => {
 try{
    const {Email, Password} = req.body;
    if(Email === ""){
      return res.status(400).json({error: "Email is required"});
    } 
    if (Password === ""){
      return res.status(400).json({error: "Password is required"});
    }
    const user = await prisma.userdetails.findFirst({
      where: {Email: Email}
      
    })
    if(!user){
      return res.status(401).json({error: "wrong email"});
    }
    const passwordMatch = await bcrypt.compare(Password, user.Password)

    if (!passwordMatch){
      const payload = {
        id : user.id,
        Email : user.Email
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: "10m"})
    res.cookie("access_token",token,{httpOnly: true})
    return res.status(200).json({sucess:true,data:user})
  }
    res.status(200).json({message: "Login successful",user:user});
 }catch(e){
  console.error("error during login",e);
  res.status(500).json(e.message);
 }finally{
  await prisma.$disconnect();
 }
}