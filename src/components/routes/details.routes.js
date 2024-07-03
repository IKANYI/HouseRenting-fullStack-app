import Router from "express";
const router = Router();

router.get("/", async (req, res) => {
  const id = req.params.id;
  try {
    const details = await prisma.details.findFirst({
      where: { id: id },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
