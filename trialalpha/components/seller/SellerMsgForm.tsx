"use client"
import Form from "next/form";
export default function SellerMsgForm() {
    return (<Form action={""} className="space-y-4 w-full max-w-md mx-auto p-4">
        <div>
            <label className="block text-sm sm:text-base font-medium mb-1">Email</label>
            <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5cca01]"
            />
        </div>

        <div>
            <label className="block text-sm sm:text-base font-medium mb-1">Seller Name</label>
            <input
                name="SellerName"
                type="text"
                placeholder="Enter your Seller Username"
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5cca01]"
            />
        </div>


        <div>
            <label className="block text-sm sm:text-base font-medium mb-1">Message</label>
            <textarea
                name="message"
                placeholder="Enter your message"
                rows={2}
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5cca01] resize-none"
            />
        </div>

        <button
            type="submit"
            className="w-full py-2 rounded-lg text-white transition-all duration-200 bg-[#5cca01] hover:bg-[#4aa800]">Send</button>
    </Form>);
}