"use client"
import BarChart from "@/utils/BarChart"
import Pie from "../utils/Pie"

const Expense = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto justify-between">
            <div className="flex bg-white h-72 w-[48%] rounded-2xl p-5 gap-2 flex-col">
                <h1 className="font-semibold">Income - Expense</h1>
                <hr />
                <BarChart />
            </div>
            <div className="flex bg-white h-72 w-[48%] rounded-2xl p-5 gap-2 flex-col">
                <div className="flex justify-between">
                    <h1 className="font-semibold">Income - Expense</h1>
                    <p className="text-gray-500">Jun 1 - Nov 30</p>
                </div>
                <hr />
                <div className="flex gap-24">
                    <Pie />
                </div>
            </div>
        </div>
    )
}

export default Expense