import Router from "express";
const router = Router();

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    const {FirstName, LastName, Email, Password} = req.body;
    const newCustomer = await prisma.Userdetails.create({
    data:{
      FirstName:FirstName,
      LastName:LastName,
      Email:Email,
      Password: Password
    },
    select:{
      FirstName: true,
        LastName: true,
        Email: true
    },
    });
    res.status(200).json(newCustomer);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.get('/', async (req, res) => {
  try{
    const getall = await prisma.Userdetails.findMany({
      select:{
        FirstName: true,
        LastName: true,
        Email: true
      }
    });
    res.status(200).json(getall);
  }catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try{
    
    const getcustomer = await prisma.Userdetails.findFirst({
      where:{
         id:id
      },
      select: {
        FirstName: true,
        LastName: true,
        Email: true
      }
  });
  res.status(200).json(getcustomer);
  }catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try{
   const deleteCustomer = await prisma.Userdetails.delete({
    where: { id: id },
    select:{
      FirstName: true,
      LastName: true,
      Email: true
    }
   })
   res.status(200).json(deleteCustomer);
  }catch (err) {
    res.status(500).json({ success: false, message: err.message});
  }
});
router.patch('/:id', async (req, res) => {
  const {FirstName, LastName, Email, Password} = req.body;
  const id = req.params.id;
  try{
      let updateCustomer;
    if(FirstName){
      updateCustomer = await prisma.Userdetails.update({
       where:{id:id},
       data:{FirstName:FirstName} });}
    if(LastName){
      updateCustomer = await prisma.Userdetails.update({
      where:{id:id},
      data:{LastName:LastName} });}
    if(Email){
      updateCustomer = await prisma.Userdetails.update({
      where:{id:id},
      data:{Email:Email}});}
    if(Password){
      updateCustomer = await prisma.Userdetails.update({
      where:{id:id},
      data:{Password:Password} 
        });}
    res.status(200).json(updateCustomer);
  }catch (err) {
    res.status(500).json({ success: false, message: err.message});
  }
});
export default router;
