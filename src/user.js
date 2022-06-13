import express from "express";
import myModule from "../connect/moduleDefine.js";

const router = express.Router();
const app = express();
router.post("/myname", async (req, res) => {
  console.log("req name", req.body.userId);
  // const table = await myModule.date.findAll({
  //   where:{useerid:33}
  // });
  // res.send(table);
  await myModule.name.create({
    createdAt: new Date(),
    updatedAt: new Date(),
    // date: 10,
  userId:req.body.userId,
    name:req.body.email
  });
});
export default router;
 