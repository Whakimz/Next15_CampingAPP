import { z, ZodSchema } from 'zod'

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: 'อักขระต้องมากกว่า 2 อักขระ' }),
    lastName: z.string().min(2, { message: ' อักขระต้องมากกว่า 2 อักขระ' }),
    username: z.string().min(2, { message: ' อักขระต้องมากกว่า 2 อักขระ' })
})

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data);
    if (!result.success) {
        const errors = result.error.errors.map((error) => {
            return `${error.path.join(".")}: ${error.message}`;
        });
        console.error("Validation Error:", { data, errors });
        throw new Error(errors.join(","));
    }
    return result.data;
};

