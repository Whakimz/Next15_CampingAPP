/* eslint-disable @typescript-eslint/no-explicit-any */
export type actionFunction = (
    prevSate: any,
    formDate: FormData
) => Promise<{ message: string }>;


export type LandmarksCardProps = {
    id: string,
    name: string,
    description: string,
    image: string,
    category: string,
    province: string,
    price: number,
    lat: number,
    lng: number
}