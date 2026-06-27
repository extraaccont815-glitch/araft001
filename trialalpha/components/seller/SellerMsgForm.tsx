"use client"
import Form from "next/form";
export default function SellerMsgForm(){
    return (<form action={""} className="space-y-4 w-full max-w-md mx-auto p-4">
        <div>
            <label className="block text-sm sm:text-base font-medium mb-1">Email</label>
            <input
              name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5cca01]" 
            />
        </div>
    </form>);
}