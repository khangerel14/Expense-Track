"use client" 
import Doll from "@/images/Dollar"
import Geld from "@/images/Geld"
import { useState } from "react"
import { useRouter } from "next/navigation"
const api = "http://localhost:8000/users"

const Currency = () => {
    const router = useRouter()
    const [ currency, setCurrency ] = useState(true);
    const includeValiut = () => {
        try {
            let data = JSON.parse(localStorage.getItem("data"));
            localStorage.setItem(
              "data",
              JSON.stringify({ ...data, currency_type: currency ? "MNT" : "USA" })
            );
        } catch (error) {}
        router.push("/finish")
    }
    const toggle = () => {
        setCurrency(!currency)
    }
    return (
        <div className="flex flex-col mx-auto w-[400px] gap-36 h-[100vh] my-20">
            <div className="flex flex-col w-3/5 mx-auto gap-3">
                <Geld />
                <div className="steps">
                    <div className="step step-primary">Currency</div>
                    <div className="step">Finish</div>                    
                </div>
            </div>
            <div className="flex flex-col justify-center mx-auto gap-7">
                <div className="flex flex-col mx-auto gap-6">
                    <Doll />
                    <h1>Select base currency</h1>
                </div>
                <div className="flex flex-col mx-auto gap-6">
                    <div className="flex flex-col gap-3">
                        <select className="p-3 rounded-xl border-gray-300 border" onChange={toggle} value={currency}>
                            <option value="MNT" onChange={(e) => setValiut(e.target.value)}>MNT - Mongolian Tugrik</option>
                            <option value="USD" onChange={(e) => setValiut(e.target.value)}>USD - USA Dollar</option>
                        </select>
                        <p className="text-[#475569]">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one</p>
                    </div>
                    <button className="btn bg-blue-600 text-white rounded-3xl w-full btn-primary" onClick={includeValiut}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Currency