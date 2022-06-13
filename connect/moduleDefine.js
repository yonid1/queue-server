import sequelize from "sequelize";
import Seq from "./sequelize.js";

const db = {
  name: Seq.define("list-names", {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: { type: sequelize.STRING, primaryKey: true },
    name: { type: sequelize.STRING ,allowNull:false },
  }),
  date: Seq.define("list-dates", {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: { type: sequelize.STRING, primaryKey: true },
    date: { type: sequelize.INTEGER },
  }),
};
// db.date.belongsTo(db.name, {
//   foreignKey: "userId",
// });
// db.name.hasMany(db.date, {
//   as: "date",
//   foreignKey: "userId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
//   foreignKeyConstraint: true,
// });
export default db;
