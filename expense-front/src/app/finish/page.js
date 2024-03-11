"use client";
import Done from "@/images/Done"
import Geld from "@/images/Geld"
import { useRouter } from "next/navigation"

const Finish = () => {
    const router = useRouter();
    const moveHome = () => {
        router.push("/dashboard")
    }
    return (
        <div className="flex flex-col mx-auto w-[400px] gap-36 h-[100vh] mt-20">
            <div className="flex flex-col w-3/5 mx-auto gap-3 justify-start">
                <Geld />
                <div className="steps">
                    <div className="step step-primary">Currency</div>
                    <div className="step step-primary">Finish</div>                    
                </div>
            </div>
            <div className="flex flex-col justify-center mx-auto gap-7">
                <div className="flex flex-col mx-auto gap-7">
                    <Done />
                    <h1>Good Job!</h1>
                </div>
                <div className="flex flex-col mx-auto gap-10 text-center">
                    <p className="text-[#475569]">Your very first account has been created. Now continue to dashboard and start tracking</p>
                    <button className="btn bg-blue-600 text-white rounded-3xl" onClick={moveHome}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Finish