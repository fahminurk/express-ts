import { validateLogin, validateRegister } from "../middlewares/validation";
import { login, register } from "../controllers/authentication";
import express from "express";

export default (router: express.Router) => {
  router.post("/auth/register", validateRegister, register);
  router.post("/auth/login", validateLogin, login);
};
