"use client"
import { useState } from "react";
import Close from "../images/X"
import Homie from "@/images/Home";
import axios from "axios";

const Category = ({ onClick }) => {
    const [ name, setName ] = useState();
    const [ description, setDesc ] = useState();
    const [ data, setData ] = useState();
    const adding = async () => {
        try {
            const res = await axios.post("http://localhost:8000/category", { name, description });
            console.log(res.data);
            setData(res.data)
        } catch (error) {
            console.error(error, 'error');
        }
    };
    return (
        <div className="w-full h-full glass relative left-0 top-0 right-0 bottom-0 mx-auto">
            <div className="flex flex-col p-5 w-96 gap-4 h-fit bg-white rounded-xl">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h1>Add Category</h1>
                        <div onClick={onClick}><Close /></div>
                    </div>
                    <hr />
                    <div className="flex gap-2 justify-between">
                        <Homie />
                        <input type="text" className="border p-2 w-full rounded-xl" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <input type="text" className="border p-2 w-full rounded-xl" placeholder="Description" onChange={(e) => setDesc(e.target.value)}/>
                    <button className="btn bg-[#16A34A] text-white" onClick={adding}>Add Category</button>
                </div>
            </div>
        </div>
    )
}

export default Category