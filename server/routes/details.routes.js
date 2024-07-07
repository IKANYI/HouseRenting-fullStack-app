import { Router } from "express";
const router = Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';


router.post("/", async (req, res) => {
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
});


router.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await prisma.Userdetails.findFirst({
      where: { Email: Email }
    });

    if (!user) {
      return res.status(400).json({ success: false, message: "wrong email" });
    }

    
    const isPasswordValid = await bcrypt.compare(Password, user.Password);

    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }
    console.log(err.message);

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.log(err);
  }
});


router.get('/', async (req, res) => {
  try {
    const getAll = await prisma.Userdetails.findMany({
      select: {
        FirstName: true,
        LastName: true,
        Email: true
      }
    });
    res.status(200).json(getAll);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const getCustomer = await prisma.Userdetails.findFirst({
      where: { id: id },
      select: {
        FirstName: true,
        LastName: true,
        Email: true
      }
    });
    res.status(200).json(getCustomer);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deleteCustomer = await prisma.Userdetails.delete({
      where: { id: id },
      select: {
        FirstName: true,
        LastName: true,
        Email: true
      }
    });
    res.status(200).json(deleteCustomer);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


router.patch('/:id', async (req, res) => {
  const { FirstName, LastName, Email, Password } = req.body;
  const id = req.params.id;
  try {
    let updateCustomer;

    if (FirstName) {
      updateCustomer = await prisma.Userdetails.update({
        where: { id: id },
        data: { FirstName: FirstName }
      });
    }
    if (LastName) {
      updateCustomer = await prisma.Userdetails.update({
        where: { id: id },
        data: { LastName: LastName }
      });
    }
    if (Email) {
      updateCustomer = await prisma.Userdetails.update({
        where: { id: id },
        data: { Email: Email }
      });
    }
    if (Password) {
      const hashedPassword = await bcrypt.hash(Password, 10);
      updateCustomer = await prisma.Userdetails.update({
        where: { id: id },
        data: { Password: hashedPassword }
      });
    }

    res.status(200).json(updateCustomer);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
