import express from "express";
const app = express();
import cors from "cors";
import detailsRouter from './routes/details.routes.js'

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET','POST','DELETE','PATCH'],
  credentials: true,
}));
app.use(express.json());
app.use("/details", detailsRouter);

app.use(express.urlencoded({extended:true}));
app.listen(3002, () => {
  console.log("listening on port 3002");
});
