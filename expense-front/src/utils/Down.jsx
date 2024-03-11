import { useEffect, useState } from "react"
import { Eye } from "../images/Eye"
import { Nexted } from "../images/next"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"

const Map = () => {
    const [ categories, setCategories ] = useState()
    const category = async () => {
        try {
            const res = await axios.get("http://localhost:8000/category")
            setCategories(res.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        category()
    }, [])
    return (
        <div className="flex flex-col gap-2">
            {categories && categories.map((e) => {
                let key = uuidv4()
                return (
                    <button className="flex justify-between" key={key}>
                        <div className="flex gap-2">
                            <Eye />
                            <p>{e.name}</p>
                        </div>
                        <Nexted />
                    </button>
                )
            })}
        </div>
    )
}
export default Map
