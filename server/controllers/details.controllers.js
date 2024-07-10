import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();
export const createUser = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password } = req.body;

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newCustomer = await prisma.Userdetails.create({
      data: {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: hashedPassword
      },
      select: {
        FirstName: true,
        LastName: true,
        Email: true
      },
    });

    res.status(200).json(newCustomer);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}