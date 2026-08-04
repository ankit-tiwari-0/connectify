import jwt from "jsonwebtoken"


export const generateToken = (userId, res) =>{
  const tokenss = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", tokenss, {
    maxAge: 7*24*60*60*1000,
    httponly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development"
  });

  return tokenss;
}