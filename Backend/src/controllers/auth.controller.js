// Change require to import and include the .js extension
import * as authService from "../services/auth.service.js";

export const register = async (req, res, next) => {
    try {
        const user = await authService.createUser(req.body);

        res.status(201).json({
            success: true,
            message: "user created successfully",
            // Security Tip: Filter 'user' so it doesn't return the password hash
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message:"some issue in auth controller"
        });
    }
};