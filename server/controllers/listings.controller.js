import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllHouses = async (req, res) => {
  try {
    const houses = await prisma.houses.findMany();
    res.status(200).json(houses);
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching houses.' });
  }
};


