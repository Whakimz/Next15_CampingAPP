import { z, ZodSchema } from 'zod'

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: 'อักขระต้องมากกว่า 2 อักขระ' }),
    lastName: z.string().min(2, { message: ' อักขระต้องมากกว่า 2 อักขระ' }),
    username: z.string().min(2, { message: ' อักขระต้องมากกว่า 2 อักขระ' })
})

const validateFile = () => {
    const maxFileSize = 1024 * 1024
    return z.instanceof(File)
        .refine((file) => {
            return file.size <= maxFileSize
        }, 'File size must be less than 1MB')
}

export const imageSchema = z.object({
    image: validateFile()
})


export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data);
    if (!result.success) {
        const errors = result.error.errors.map((error) => {
            console.error("Field Error:", error.path, error.message); // Log path ใน console
            return error.message; // แต่แสดงเฉพาะ message ใน toast
        });
        throw new Error(errors.join(", "));
    }
    return result.data;
};


