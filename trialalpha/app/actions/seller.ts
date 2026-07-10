"use server"
import axios from "axios";


export type Errors = {
    email?: string;
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
    formData: FormData
): Promise<FormState> {
    const email = formData.get("email") as string;
    const sellerName = formData.get("sellerName") as string;
    const message = formData.get("message") as string;

    const errors: Errors = {};
    if (!email) {
        errors.email = "Email is required";
    }
    if (!sellerName) {
        errors.sellerName = "Dealership name is required";
    }
    if (!message) {
     
        errors.message = "Dealership location is required"; 
    }

    if (Object.keys(errors).length > 0) {
        return { errors };
    }
    
    try {
        
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/seller-msg`, 
            { email, sellerName, message },            
            { validateStatus: () => true }
        );
        
        if (response.status === 200) {
            return { errors: {}, success: response.data.message };
        } else {
            return { errors: {}, error: response.data.error || "Something went wrong" };
        }
    
    } catch (error) {
        console.error("Server action error:", error);
        return { errors: {}, error: "Something went wrong, please try again later" };
    }
}