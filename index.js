import express from "express";
const app = express();
import detailsRouter from './src/components/routes/details.routes.js'


app.use(express.json());
app.use("/details", detailsRouter);
app.listen(3002, () => {
  console.log("listening on port 3002");
});
