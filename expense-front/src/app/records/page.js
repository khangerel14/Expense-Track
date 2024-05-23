"use client";
import Plus from "@/images/Plus"
import Maped from "@/utils/Down"
import Plussed from "@/images/Plussed"
import Left from "@/images/Left"
import DownTwo from "@/images/DownTwo"
import Close from "../../images/X"
import { useState } from "react"
import axios from "axios";
import Category from "@/utils/AddCategory";
import Build from "@/utils/List";
import Navbar from "@/components/Navbar";

const Record = () => {
    const [ name, setName ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ created, setCreated ] = useState('');
    const [ tranType, setTranType ] = useState('') 
    const [ data, setData ] = useState([]);
    const [ open, setOpen ] = useState(false);
    const [ isIncome, setIsIncome ] = useState(false)
    const [ modal, setModal ] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
    const income = (bool) => {
        setIsIncome(bool);
    }
    const opened = () => {
        setOpen(!open)
    }
    const recording = async () => {
        try {
            const res = await axios.post("http://localhost:8000/transaction/post", { name, amount, created, tranType });
            console.log(res.data);
            setData(res.data)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="bg-[#eff0f2] h-screen">
            <Navbar onClick={toggleModal}/>
            <div className="flex max-w-screen-xl mx-auto my-8 gap-12 relative">
                <div className="flex flex-col w-2/6 h-fit rounded-xl bg-white py-3 px-3 pb-5 gap-3">
                    <h1 className="font-semibold mb-3 text-xl">Records</h1>
                    <div className="flex flex-col gap-6">
                        <button className="flex bg-blue-600 p-1 rounded-3xl text-white w-full justify-center items-center gap-2" onClick={toggleModal}>
                            <Plus /> Add
                        </button>
                        <input type="search" className="border-2 border-gray-400 p-1 rounded-lg" placeholder=" Search"/>
                    </div>
                    <div className="flex flex-col my-3 gap-4">
                        <h1 className="font-semibold text-lg">Types</h1>
                        <div className="flex flex-col gap-3 pl-4">
                            <div className="flex gap-3">
                                <input type="checkbox"/>
                                <p>All</p>
                            </div>
                            <div className="flex gap-3">
                                <input type="checkbox"/>
                                <p>Income</p>
                            </div>
                            <div className="flex gap-3">
                                <input type="checkbox"/>
                                <p>Expense</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h1 className="font-semibold text-lg">Category</h1>
                            <button className="text-gray-400 hover:text-blue-600">Clear</button>
                        </div>
                        <div className="flex flex-col gap-2 pl-4">
                            <Maped />
                            <button className="flex items-center gap-3" onClick={opened}><Plussed /> Add Category</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className="font-semibold text-lg">Amount Range</h1>
                        <input type="range" min="0" max="1000" value="40" class="range range-xs" /> 
                    </div>
                </div>
                <div className="flex flex-col w-full gap-6">
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <button className="border-none bg-gray-300 rounded-xl h-10 w-10"><Left /></button>
                            <p>Last 30 Days</p>
                            <button className="border-none bg-gray-300 rounded-xl h-10 w-10">ba</button>
                        </div>
                        <button className="flex gap-5 p-3 bg-white rounded-lg font-medium border">Newest First <DownTwo /></button>
                    </div>
                    <div className="flex p-2 px-6 justify-between w-full h-12 bg-white rounded-lg border items-center">
                        <div className="flex gap-3">
                            <input type="checkbox"/>
                            <p>Select all</p>
                        </div>
                        <p className="text-gray-400">- 35,500$</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-semibold">Today</h1>
                        <Build />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold">Yesterday</h1>
                    </div>
                </div>
            </div>
            {modal && (
                <div className="flex flex-col h-full w-full items-center glass absolute left-0 top-0 right-0 bottom-0">
                    <div className="w-full h-full relative" onClick={toggleModal}></div>
                    <div className="flex flex-col mt-36 w-[700px] h-96 bg-white gap-2 rounded-xl p-7 absolute justify-between">
                        <div className="flex justify-between">
                            <h1>Add Record</h1>
                            <div onClick={toggleModal}>
                                <Close />
                            </div>
                        </div>
                        <div className="flex justify-between gap-3">
                            <div className="flex flex-col h-fit bg-white gap-3">
                                <div className="flex flex-col gap-2">
                                    <div className="flex bg-[#F3F4F6] w-full rounded-3xl">
                                        <a
                                        className={`w-[160px] h-[40px] text-center flex items-center justify-center rounded-[20px] text-[16px] gap-1 font-normal ${
                                            isIncome
                                            ? "bg-transparen text-black"
                                            : "bg-[#0166FF] text-white"
                                        }`}
                                        onClick={() => income(false)}
                                        >
                                        Expense
                                        </a>
                                        <a
                                        className={`w-[160px] h-[40px] text-center flex items-center justify-center rounded-[20px] text-[16px] gap-1 font-normal ${
                                            isIncome
                                            ? "bg-[#16A34A] text-white"
                                            : "bg-transparent text-black"
                                        }`}
                                        onClick={() => income(true)}
                                        >
                                        Income
                                        </a>
                                    </div>
                                    <input type="text" className="border rounded-xl p-5" placeholder="$ 000.00" onChange={(e) => setAmount(e.target.value)}/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h1>Category</h1>
                                    <select className="w-full p-2 border rounded-md" onChange={(e) => setTranType(e.target.value)}>
                                        <option>Home</option>
                                        <option>Food</option>
                                        <option>Drink</option>
                                        <option>Taxi</option>
                                        <option>Gift</option>
                                        <option>Shopping</option>
                                    </select>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex flex-col gap-1">
                                        <h1>Date</h1>
                                        <input type="date" className="border rounded-md p-1"/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h1>Date</h1>
                                        <input type="time" className="border rounded-md p-1" onChange={(e) => setCreated(e.target.value)}/>
                                    </div>
                                </div>
                                <button className={`btn rounded-3xl ${ income ? 'bg-[#0166FF] text-white' : 'bg-[#16A34A] text-white' }`} onClick={recording}>
                                    Add Record
                                </button>
                            </div>
                            <div className="w-[100%] h-[280px]">
                                <div className="flex flex-col gap-2">
                                    <h1>Payee</h1>
                                    <input placeholder="Write here" className="w-full p-2 border rounded-lg" onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1>Note</h1>
                                    <textarea placeholder="Write here" className="w-full p-2 border rounded-lg"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {open && (<Category onClick={opened}/>)}
        </div>
    )
}

export default Record