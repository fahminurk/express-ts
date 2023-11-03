import * as z from "zod";
import express from "express";

const registerSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const validateRegister = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const check = registerSchema.parse(req.body);
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "invalid data" });
  }
};
export const validateLogin = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const check = loginSchema.parse(req.body);
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "invalid data" });
  }
};
