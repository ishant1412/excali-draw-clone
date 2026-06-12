import { Request, Response } from "express";
import {  User, UserSignIn } from "@repo/utils";
import { finduserByEmail, createUser } from "../service/user.service";
import { createToken, ValidateUser, ValidateUserSignin } from "../lib/jwt";

export const singUpUser = async (req: Request, res: Response) => {
  const data: User = req.body;
  try {
    ValidateUser(data);

    const user = await finduserByEmail(data.email);
    if (user) {
      return res.status(400).json({
        message: "the user already exists, you can sign in directly",
      });
    }

    createUser(data);

    res.status(201).json({
      message: "user created successfully",
    });
  } catch (e) {
    res.status(500).json({
      message: "server issue unable to create the user",
      error: e,
    });
  }
};

export const singInUser = async (req: Request, res: Response) => {
  const data: UserSignIn = req.body;
  

  try {
    ValidateUserSignin(data);
    const user = await finduserByEmail(data.email);

    if (!user) {
      return res.status(400).json({
        message: "the user doesnt exist, sign up first",
      });
    }

    const token = createToken(data.email);

    res.status(200).json({
      token,
    });
  } catch (e) {
    res.status(500).json({
      message: "couldn't create a token",
      error: e,
    });
  }
};
