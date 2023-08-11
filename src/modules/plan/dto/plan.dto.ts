import { z } from "zod";
export const createplanDTO = z.object({
        title:z.string().nonempty(),
        description:z.string().optional(),
        deadline:z.coerce.date(),
    })

export type LoginDto = z.infer<typeof createplanDTO>