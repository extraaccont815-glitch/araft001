"use client";

import { FormState, sellerMsg } from "@/app/actions/seller";
import Form from "next/form";
import { useActionState } from "react";

export default function SellerMsgForm() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    sellerMsg,
    initialState
  );

  return (
    <Form action={formAction} className="space-y-4 w-full max-w-md mx-auto p-4">
      <div>
        <label className="block text-sm sm:text-base font-medium mb-1">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5cca01]"
        />
        {state.errors?.email && (
          <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm sm:text-base font-medium mb-1">
          Dealership Name
        </label>
        <input
          name="sellerName"
          type="text"
          placeholder="Enter your dealership name"
          className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5cca01]"
        />
        {state.errors?.sellerName && (
          <p className="text-red-500 text-sm mt-1">{state.errors.sellerName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm sm:text-base font-medium mb-1">
          Enter your dealership location 
        </label>
        <textarea
          name="message"
          placeholder="Enter your dealership location"
          rows={2}
          className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5cca01] resize-none"
        />
        {state.errors?.message && (
          <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={`w-full py-2 rounded-lg text-white transition-all duration-200 ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state.success && (
        <p className="flex justify-center text-green-500 font-medium mt-2">
          {state.success}
        </p>
      )}
      {state.error && (
        <p className="flex justify-center text-red-500 font-medium mt-2">
          {state.error}
        </p>
      )}
    </Form>
  );
}