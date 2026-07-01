"use client"
import { sellerMsg } from "@/app/action/seller";
import { error } from "console";
import Form from "next/form";
import { useActionState } from "react";

export default function SellerMsgForm() {
    const initialState: Forms = {
        errors: {},

    };
    const { state, formAction, isPending } = useActionState(
        sellerMsg,
        initialState,
    )
    return (<Form action={formAction} className="space-y-4 w-full max-w-md mx-auto p-4">
        <div>
            <label className="block text-sm sm:text-base font-medium mb-1">Email</label>
            <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#964B00]"
            />
            {state.errors.email && (
                <p className="text-red-500 text-sm">{state.errors.email}</p>

            )}
        </div>

        <div>
            <label className="block text-sm sm:text-base font-medium mb-1">Dealership Name</label>
            <input
                name="SellerName"
                type="text"
                placeholder="Enter your Dealership Name"
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#964B00]"
            />
            {state.errors.sellerName && (
                <p className="text-red-500 text-sm">{state.errors.sellerName}</p>

            )}
        </div>


        <div>
            <label className="block text-sm sm:text-base font-medium mb-1">About your dealership</label>
            <textarea
                name="message"
                placeholder="Please include the valid address of your dealership"
                rows={2}
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#964B00] resize-none"
            />
            {state.errors.message && (
                <p className="text-red-500 text-sm">{state.errors.message}</p>

            )}
        </div>

        <button type="submit"
            disabled={isPending}
            className={'w-full py-2 rounded-lg text-white transition-all duration-200 bg-[#964B00] hover:bg-[#964B00] '}
        >
            {isPending ? 'Sending...' : 'Send Message'}
        </button>
        {state.success && (
            <p className="flex justify-center text-green-500 font-medium">
                {state.success}
            </p>
        )}
        {state.error && (
            <p className="flex justify-center text-red-500 font-medium">
                {state.error}
            </p>
        )}
    </Form>

    );
}