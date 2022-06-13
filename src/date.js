import express from "express";
import myModule from "../connect/moduleDefine.js";

const router = express.Router();
const app = express();
router.post("/myqueue", async (req, res) => {
  console.log("req", req.body);
  const table = await myModule.date.findAll({
    // where:{id:1}
  });
  res.send(table);
  // await myModule.create({
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  //   date: 10,
  //   name:"michal"
  // });
});
export default router;
 