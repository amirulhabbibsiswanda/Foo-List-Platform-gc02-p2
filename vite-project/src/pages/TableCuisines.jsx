import { useEffect, useState } from "react";
import axiosInstance from "../library/https";
import { NavLink } from "react-router";
import CreateAndEditProduct from "./CreateAndEditProduct";
import { useNavigate } from "react-router";

export default function TableCuisines() {
    const [cuisines, setCuisines] = useState([])
    const navigate = useNavigate()
    async function fetchCuisines() {
        try {
            const cuisines = await axiosInstance.get("apis/pub/restaurant-app/cuisines")
            // console.log(cuisines.data.data.query, "ini cuisines");
            setCuisines(cuisines.data.data.query)

        } catch (error) {
            console.log(error, "error");
            console.log(error.name, "error name");
        }
    }

    async function deleteCuisine(id) {
        try {
            // console.log(id, "ini id");

            await axiosInstance.delete(`/apis/restaurant-app/cuisines/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            fetchCuisines()
        } catch (error) {
            console.log(error, 'ini error');
            console.log(error.name, 'ini error name');
        }
    }

    useEffect(() => {
        fetchCuisines()
    }, [])
    return (
        <div className="relative overflow-x-auto p-6">
            <div className="flex items-center justify-between mb-4">
                <NavLink to="/cuisines/add">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow">
                        Add New Cuisine
                    </button>
                </NavLink>
                <NavLink to="/categories" className="text-blue-600 hover:underline">
                    Category List
                </NavLink>
            </div>

            <p className="text-center text-2xl font-bold mb-6">Cuisine List</p>

            <div className="flex justify-center">
                <table className="table-auto w-full max-w-6xl text-sm text-center text-black border border-black shadow-md">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-black px-4 py-2">Name</th>
                            <th className="border border-black px-4 py-2">Description</th>
                            <th className="border border-black px-4 py-2">Price</th>
                            <th className="border border-black px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cuisines.map((el) => (
                            <tr key={el.id} className="hover:bg-gray-50">
                                <td className="border border-black px-3 py-2">{el.name}</td>
                                <td className="border border-black px-3 py-2 text-left">{el.description}</td>
                                <td className="border border-black px-3 py-2">{el.price}</td>
                                <td className="border border-black px-3 py-2 space-x-2">
                                    <button
                                        onClick={() => navigate(`/cuisines/edit/${el.id}`)}
                                        className="text-blue-600 hover:underline"
                                        type="button"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteCuisine(el.id)}
                                        className="text-red-600 hover:underline"
                                        type="button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    )

}