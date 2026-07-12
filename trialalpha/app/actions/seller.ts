"use server";
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
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const sellerName = formData.get("sellerName") as string;
  const message = formData.get("message") as string;

  const errors: Errors = {};
  if (!email) {
    errors.email = "Email is required!";
  }
  if (!sellerName) {
    errors.sellerName = "Dealership name is required!";
  }
  if (!message) {
    errors.message = "Location is required!";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/seller/seller-msg`,
      { email, sellerName, message },
      { validateStatus: () => true },
    );
    if (res.status === 201) {
      return { errors: {}, success: res.data.message };
    } else {
      return { errors: {}, error: res.data.error || "Something went wrong" };
    }
  } catch (err: unknown) {
    console.log("Server Action Error:", err);
    return { errors: {}, error: "Server error. try later." };
  }
}