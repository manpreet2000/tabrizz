import { z } from "zod";


export const userDataSchema = z.object({
    emojis: z.array(z.string()),
    intervalTime: z.number(),
});
export type userDataType = z.infer<typeof userDataSchema>;
