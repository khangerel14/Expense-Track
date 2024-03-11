import Homie from "../images/Home"
import { v4 as uuidv4 } from "uuid"
const rent = [
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    },
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    },
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    },
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    },
    {
        lere: "Lending & Renting",
        time: "3 hours ago",
        money: "- 1000$"
    }
]

const Lend = () => {
    return (
        <div className="flex flex-col max-w-screen-xl mx-auto rounded-2xl bg-white p-5 my-10 gap-3">
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Last Records</h1>
                <hr />
            </div>
            {
                rent.map((el) => {
                    let key = uuidv4()
                    return (
                        <div className="flex flex-col gap-3" key={key}>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <div>
                                        <Homie />
                                    </div>
                                    <div>
                                        <h1>{el.lere}</h1>
                                        <p style={{color: "gray"}}>{el.time}</p></div>
                                </div>
                                <div>
                                    <p style={{color: "green"}}>{el.money}</p>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Lend