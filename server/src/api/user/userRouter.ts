import { Router } from "express";
import { z } from "zod";
import { userServices } from "./userService";
import { StatusCodes } from "http-status-codes";


export const userRouter:Router = (() => {
const router = Router();

router.post('/add-data',async (req,res) => {
    try{
        // Define the schema for request body validation
        const schema = z.object({
            emojis: z.array(z.string()).refine((val) => val.length > 0, 'emojis must have at least one emoji'),
            intervalTime: z.number().refine((val) => val > 0, 'intervalTime must be greater than 0')
        });

        // Validate the request body
        const { emojis, intervalTime } = schema.parse(req.body);
        await userServices.addUserData({emojis,intervalTime});
        res.status(StatusCodes.OK).send("Data added successfully");
        // Your code here...

    }
    catch(e){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal Server Error");
    }
});
return router;
})();

