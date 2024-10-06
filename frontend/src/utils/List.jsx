import Homie from "@/images/Home";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";


const Build = () => {
    const [ transaction, setTransaction ] = useState();
    const getting = async () => {
        try {
            const res = await axios.get("http://localhost:8000/transaction");
            setTransaction(res.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getting()
    }, [])
    return (
        <div className="flex flex-col gap-3">
        {transaction && transaction.map((e) => {
            let key = uuidv4();
            return (
            <div className="flex p-2 px-6 justify-between h-14 bg-white rounded-lg border items-center w-[910px]" key={key}>
                <div className="flex gap-4">
                <input type="checkbox" />
                <Homie />
                <div>
                    <p>{e.name}</p>
                    <p className="text-gray-500 text-sm">{e.createdat}</p>
                </div>
                </div>
                <p className="text-red-400">{e.amount}$</p>
            </div>
            );
        })}
        </div>
    );
};

export default Build;
