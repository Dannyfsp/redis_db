import { Router } from "express";
import { createPerson } from "../controllers/person.controllers.js";

export const router = Router();

router.post("/person", createPerson);
