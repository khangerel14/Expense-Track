import { v4 as uuidv4 } from "uuid";
const card = [
    {
        title: "Your Income",
        tugrug: "1,200,000",
        min: "Your Income Amount",
        updown: "32% from last month"
    },
    {
        title: "Total Expenses",
        tugrug: "-1,200,000",
        min: "Your Income Amount",
        updown: "32% from last month "
    }
]

const Maping = () => {
    return (
        <div className="flex gap-[20px] justify-between w-full" style={{gap: 45}}>
            {
                card.map((el) => {
                    let key = uuidv4()
                    return (
                        <div className="flex flex-col gap-6 p-2 border-2 rounded-xl bg-white" style={{width: 400}} key={key}>
                            <h1>{el.title}</h1>
                            <hr />
                            <h1 className="font-semibold text-7xl">{el.tugrug}</h1>
                            <p>{el.min}</p>
                            <div>
                                <p>{el.updown}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Maping