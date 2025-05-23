import { useEffect, useState } from "react";
import axiosInstance from "../library/https";


export default function TableCategories() {

    const [categories, setCategories] = useState([])

    async function fetchCategory() {
        try {
            const categories = await axiosInstance.get("/apis/restaurant-app/categories",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                }
            )
            // console.log(categories.data.data, "ini fetch");
            setCategories(categories.data.data)

        } catch (error) {
            console.log(error, "ini error");
            console.log(error.name, "ini error name");
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])
    return (
        <div className="relative overflow-x-auto">
            <p className="text-center text-2xl font-semibold">Category List</p>
            <div className="flex justify-center">

                <table className="text-center max-w-full w-200 text-sm rtl:text-right text-black border border-black">
                    <thead>
                        <tr>
                            <th className="border border-black">N0.</th>
                            <th className="border border-black">Category</th>
                        </tr>

                    </thead>
                    <tbody>
                        {categories.map((el, i) => {
                            return (
                                <tr key={el.id}>
                                    <td className="border border-black">{i + 1}</td>
                                    <td className="border border-black">{el.name}</td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>

    )
}