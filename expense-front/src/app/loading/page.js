'use client';
import Geld from "@/images/Geld";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Loading = () => {
    const router = useRouter()
    const [ down, setDown ] = useState(4)
    const downing = () => {
        setDown((num) => num - 1)
    }
    useEffect(() => {
        const countdownInterval = setInterval(downing, 1000);
        return () => {
          clearInterval(countdownInterval);
        };
      }, []);
    setTimeout(() => {
        router.push("/currency")
    }, 4000);
    return (
        <div className="flex flex-col mx-auto gap-8 items-center justify-center h-[100vh]">
            <Geld />
            <div className="flex flex-col gap-5">
                <span className="loading mx-auto text-blue-600"></span>
                <p>Түр хүлээнэ үү... {down}</p>
            </div>
        </div>
    )
}

export default Loading