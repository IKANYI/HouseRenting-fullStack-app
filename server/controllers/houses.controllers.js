import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const newProduct = async (req, res) => {
  const {image, title, description, price } = req.body;
  try {
    const newProduct = await prisma.houses.create({
      data: {
        image,
        title,
        description,
        price,
      }
    })
    res.status(200).json(newProduct)
  }catch(e) {
    console.log(e);
    res.status(500).json({error:"Error creating product"})
  }
};