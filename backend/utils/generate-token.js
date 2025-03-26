import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
  const userIdString = userId.toString();


  const token = jwt.sign({ userId: userIdString }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};
