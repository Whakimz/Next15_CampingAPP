/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { imageSchema, landmarkSchema, profileSchema, validateWithZod } from "../utils/schema";
import db from '../utils/db'
import { redirect } from "next/navigation";
import { uploadFile } from "../utils/supabase";
import { revalidatePath } from "next/cache";


const getAuthUser = async () => {
    // code body
    const user = await currentUser();
    if (!user) {
        throw new Error("You must logged!!!");
    }
    if (!user.privateMetadata.hasProfile) redirect("/profile/create");
    return user;
};

const renderError = (error: unknown): { message: string } => {
    //code body
    return {
        message: error instanceof Error ? error.message : "An Error!!!",
    };
};
export const createProfileAction = async (
    prevState: any,
    formData: FormData
) => {
    try {
        const user = await currentUser();
        if (!user) throw new Error("Please Login!!!");

        const rawData = Object.fromEntries(formData);
        const validateField = validateWithZod(profileSchema, rawData);
        // console.log("validated", validateField);

        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? "",
                ...validateField,
            },
        });
        const client = await clerkClient();
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true,
            },
        });
        // return { message: "Create Profile Success!!!" };
    } catch (error) {
        // console.log(error);
        return renderError(error);
    }
    redirect("/");
};

export const createLandmarkAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {
    try {
        const user = await getAuthUser();
        const rawData = Object.fromEntries(formData);
        const file = formData.get("image") as File;

        // Step 1 Validate Data
        const validatedFile = validateWithZod(imageSchema, { image: file });
        const validateField = validateWithZod(landmarkSchema, rawData);

        // Step 2 Upload Image to Supabase
        const fullPath = await uploadFile(validatedFile.image);
        // console.log(fullPath);
        // Step 3 Insert to DB
        await db.landmark.create({
            data: {
                ...validateField,
                image: fullPath,
                profileId: user.id,
            },
        });
        // return { message: "Create Landmark Success!!!" };
    } catch (error) {
        // console.log(error);
        return renderError(error);
    }
    redirect("/");
};

export const fecthLandmarks = async (
    //search query

) => {
    //code body
    const landmarks = await db.landmark.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    return landmarks
}

export const fetchFavoriteId = async ({ landmarkId }: { landmarkId: string }) => {
    const user = await getAuthUser();
    const favorite = await db.favorite.findFirst({
        where: {
            landmarkId: landmarkId,
            profileId: user.id
        },
        select: {
            id: true
        }
    })
    return favorite?.id || null
}


export const toggleFavoriteAction = async (prevState: {
    favoriteId: string | null;
    landmarkId: string;
    pathname: string
}) => {
    const { favoriteId, landmarkId, pathname } = prevState
    const user = await getAuthUser()
    try {
        //delete
        if (favoriteId) {
            await db.favorite.delete({
                where: {
                    id: favoriteId
                }
            })
        } else {
            //create
            await db.favorite.create({
                data: {
                    landmarkId: landmarkId,
                    profileId: user.id
                }
            })
        }
        revalidatePath(pathname)
        return {
            message: favoriteId ? 'Remove Favorite Success!!!' : 'Add Favorite Success!!',

        }
    } catch (error) {
        return renderError(error)
    }
}

export const fecthFavorite = async () => {
    const user = await getAuthUser()
    const favorites = await db.favorite.findMany({
        where: {
            profileId: user.id
        },
        select: {
            landmark: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    image: true,
                    price: true,
                    province: true,
                    lat: true,
                    lng: true,
                    category: true
                }
            }
        }
    })

    return favorites.map((favorite) => favorite.landmark)
}