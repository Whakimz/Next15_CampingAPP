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


export const landmarkSchema = z.object({
    name: z.string()
        .min(2, { message: 'ชื่อต้องมากกว่า 2 อักขระขึ้นไป!!!' })
        .max(30, { message: 'ชื่อต้องน้อยกว่า 30 อักขระขึ้นไป!!!' }),
    category: z.string(),
    description: z.string()
        .min(2, { message: 'รายละเอียดต้องมากกว่า 2 อักขระขึ้นไป!!!' })
        .max(200, { message: 'รายละเอียดต้องน้อยกว่า 200 อักขระขึ้นไป!!!' }),
    price: z.coerce.number().int().min(0, { message: 'ราคาต้องมากกว่า 0' }),
    province: z.string(),
    lat: z.coerce.number(),
    lng: z.coerce.number(),
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


