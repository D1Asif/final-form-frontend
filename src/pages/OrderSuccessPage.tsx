import { Check } from "phosphor-react";


export default function OrderSuccessPage() {
    return (
        <div className="px-6 md:px-10 pt-[110px] md:pt-[135px] mb-10">
            <div className="flex flex-col items-center justify-center mb-40 mt-28">
                <div className="flex size-12 items-center justify-center rounded-full bg-metal-50 text-green-600">
                    <Check size={28} weight="bold" />
                </div>
                <h1 className="text-heading-6 font-semibold mt-4">Order successfully placed!</h1>
            </div>
        </div>
    )
}
