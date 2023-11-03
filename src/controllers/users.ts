import express from "express";

import {
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from "../db/users";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    if (id.length !== 24)
      return res.status(400).json({ message: "invalid id" });

    const checkUser = await getUserById(id);
    if (!checkUser) return res.status(400).json({ message: "user not found" });

    await deleteUserById(id);
    return res.status(200).json({ message: "user deleted" });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    if (id.length !== 24)
      return res.status(400).json({ message: "invalid id" });

    const checkUser = await getUserById(id);
    if (!checkUser) return res.status(400).json({ message: "user not found" });

    const user = await updateUserById(id, req.body);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
