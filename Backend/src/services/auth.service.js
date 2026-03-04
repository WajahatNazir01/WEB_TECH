import prisma from "../prisma/client.js"; // Change require to import and include .js
import bcrypt from "bcryptjs"; // Change require to import

// Change exports.createUser to export const createUser
export const createUser = async ({ name, email, password }) => {
    // Hash the password
    const hashedpassword = await bcrypt.hash(password, 10);
    
    // Create the user in Supabase via Prisma
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedpassword
        }
    });
    
    return user;
};