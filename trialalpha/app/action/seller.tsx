"use server"

export type Error = {
    email? : string;
    sellerName?: string;
    message?: string;
};

export type FormState = {
    errors: Errors;
    success?: string;
    error?: string;
};


export async function sellerMsg(
    prevState: FormState,
    forData: FormData
): Promise<FormState> {}