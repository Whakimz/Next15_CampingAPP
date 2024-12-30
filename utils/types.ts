/* eslint-disable @typescript-eslint/no-explicit-any */
export type actionFunction = (
    prevSate: any,
    formDate: FormData
) => Promise<{ message: string }>;
