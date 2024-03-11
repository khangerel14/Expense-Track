import { createCategory, getAllCategory } from "../controller/category.js";
import express from "express";

const category = express.Router();


category.route("/").post(createCategory).get(getAllCategory);
export {category}