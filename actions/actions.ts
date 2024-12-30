/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { imageSchema, landmarkSchema, profileSchema, validateWithZod } from "../utils/schema";
import db from '../utils/db'
import { redirect } from "next/navigation";


const getAuthUser = async () => {
    const user = await currentUser()

    if (!user) {
        throw new Error('You must Logged!!!')
    }
    if (!user.privateMetadata.hasProfile) redirect('/profile/create')
    return user
}


const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : 'An Error !!'
    }
}
export const createProfileAction = async (
    prevState: any,
    formData: FormData
) => {
    try {
        const user = await getAuthUser()

        const rawData = Object.fromEntries(formData);

        const validatedField = validateWithZod(profileSchema, rawData);


        // console.log("Raw Data:", rawData); // ตรวจสอบข้อมูลก่อน validate

        // console.log("Validated Field:", validatedField);

        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedField
            }
        })

        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true,
            }
        })
        // return { message: "Create Profile Success!!!" };
    } catch (error) {
        // console.error("Validation Error:", error);
        return renderError(error)
    }
    redirect('/')
};


export const createLandmarkAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {
    try {
        const user = await currentUser()
        if (!user) throw new Error('Please Login!!!')
        const rawData = Object.fromEntries(formData);
        const file = formData.get('image') as File
        const validatedFile = validateWithZod(imageSchema, { image: file })
        const validatedField = validateWithZod(landmarkSchema, rawData);
        console.log('validated', validatedFile);
        console.log("Validated Field:", validatedField);


        return { message: "Create Landmark Successfully!!!" };
    } catch (error) {
        // console.error("Validation Error:", error);
        return renderError(error)
    }
    // redirect('/')
};