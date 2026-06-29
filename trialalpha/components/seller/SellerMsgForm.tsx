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
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#964B00]"
            />
        </div>

        <div>
            <label className="block text-sm sm:text-base font-medium mb-1">Dealership Name</label>
            <input
                name="SellerName"
                type="text"
                placeholder="Enter your Dealership Name"
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#964B00]"
            />
        </div>


        <div>
            <label className="block text-sm sm:text-base font-medium mb-1">About your dealership</label>
            <textarea
                name="message"
                placeholder="Please include valid address"
                rows={2}
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#964B00] resize-none"
            />
        </div>

      <button type="submit" className={'w-full py-2 rounded-lg text-white transition-all duration-200 bg-[#964B00] hover:bg-[#964B00] '}> Send</button>
    </Form>);
}