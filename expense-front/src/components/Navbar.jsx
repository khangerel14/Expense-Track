"use client";
import Profile from "@/images/Profile";
import Plus from "@/images/Plus";
import Geldii from "@/images/Geldi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = ({ onClick }) => {
    const router = useRouter();
    const [isDashboard, setIsDashboard] = useState(true)
    const handler = (value) => setIsDashboard(value)
    const dashboard = () => {
        router.push("/dashboard");
        handler(true)
    };
    const recording = () => {
        router.push("/record");
        handler(false)
    };
    return (
        <div className="w-full h-16 bg-white">
            <div className="flex max-w-screen-xl justify-between mx-auto items-center h-16">
                <div className="flex gap-6 items-center">
                    <Geldii />
                    {isDashboard ? <>
                        <button className="font-semibold" onClick={dashboard}>Dashboard</button>
                        <button className="hover:font-semibold" onClick={recording}>Records</button>
                    </> : 
                       <>
                        <button className="hover:font-semibold" onClick={dashboard}>Dashboard</button>
                        <button className="font-semibold" onClick={recording}>Records</button>
                       </>
                    }
                </div>
                <div className="flex gap-6 items-center leading-none">
                    <button className="flex bg-blue-600 rounded-3xl text-white p-2 px-3 gap-2 items-center" onClick={onClick}><Plus /> Record</button>
                    <button className="avatar online"><Profile /></button>
                </div>
            </div>
        </div>
    )    
}

export default Navbar