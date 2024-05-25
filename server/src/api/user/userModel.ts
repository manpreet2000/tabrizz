import { z } from "zod";


export const userDataSchema = z.object({
    emojis: z.array(z.string()),
    intervalTime: z.number(),
    userId: z.string(),
    email: z.string().email().optional(),
});
export type userDataType = z.infer<typeof userDataSchema>;
