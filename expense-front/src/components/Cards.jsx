import Bluen from "@/images/Blue"
import { Downed } from "@/images/Down"
import Green from "@/images/Gren"
import { Upped } from "@/images/up"


const { default: Visa } = require("@/images/Visa")

const Card = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto justify-between my-10">
            <div className=""><Visa /></div>
            <div className="flex flex-col gap-6 p-4 border-2 rounded-xl bg-white w-96 justify-between">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Green />
                        <h1>Your Income</h1>
                    </div>
                    <hr />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-semibold text-3xl">1,200,000$</h1>
                    <p className="text-gray-500">Your Income Amount</p>
                </div>
                <div className="flex gap-2">
                    <Upped />
                    <p>32% from last month</p>
                </div>
            </div>
            <div className="flex flex-col gap-6 p-4 border-2 rounded-xl bg-white w-96 justify-between">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Bluen />
                        <h1>Total Expenses</h1>
                    </div>
                    <hr />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-semibold text-3xl">-1,200,000$</h1>
                    <p className="text-gray-500">Your Income Amount</p>
                </div>
                <div className="flex gap-2">
                    <Downed />
                    <p>32% from last month</p>
                </div>
            </div>
        </div>
    )
}

export default Card