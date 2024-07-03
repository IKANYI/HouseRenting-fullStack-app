import express from "express";
const app = express();

app.use("/details", detailsRouter);
app.listen(3002, () => {
  console.log("listening on port 3002");
});
