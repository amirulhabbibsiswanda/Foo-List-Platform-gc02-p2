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
        <div className="relative overflow-x-auto p-6">
            <p className="text-center text-2xl font-bold text-yellow-800 mb-6">Category List</p>

            <div className="flex justify-center">
                <table className="table-auto w-full max-w-4xl text-sm text-center text-black border border-yellow-500 shadow-md">
                    <thead className="bg-yellow-100 text-yellow-800 font-semibold">
                        <tr>
                            <th className="border border-yellow-500 px-4 py-2">No.</th>
                            <th className="border border-yellow-500 px-4 py-2">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((el, i) => (
                            <tr key={el.id} className="hover:bg-yellow-50">
                                <td className="border border-yellow-300 px-4 py-2">{i + 1}</td>
                                <td className="border border-yellow-300 px-4 py-2">{el.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}