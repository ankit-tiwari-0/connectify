import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
  email: "neha.sharma@example.com",
  fullName: "Neha Sharma",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
},
{
  email: "ananya.gupta@example.com",
  fullName: "Ananya Gupta",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
},
{
  email: "kavya.singh@example.com",
  fullName: "Kavya Singh",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
},
{
  email: "riya.patel@example.com",
  fullName: "Riya Patel",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
},
{
  email: "shreya.verma@example.com",
  fullName: "Shreya Verma",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
},
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();