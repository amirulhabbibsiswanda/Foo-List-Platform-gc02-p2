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
            const cuisines = await axiosInstance.get("/apis/restaurant-app/cuisines",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                }
            )
            // console.log(cuisines.data.data, "ini cuisines");
            setCuisines(cuisines.data.data)

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
        <div className="relative overflow-x-auto p-6 bg-yellow-50 min-h-screen">
            <div className="flex items-center justify-between mb-4">
                <NavLink to="/cuisines/add">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded shadow">
                        Add New Cuisine
                    </button>
                </NavLink>
                <NavLink to="/categories" className="text-yellow-700 hover:underline font-semibold">
                    Category List
                </NavLink>
            </div>
            <div className="flex items-center justify-between mb-4">
                <NavLink to="/users/add">

                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded shadow">
                        Click here to add a new user
                    </button>
                </NavLink>

            </div>

            <p className="text-center text-2xl font-bold text-yellow-700 mb-6">Cuisine List</p>

            <div className="flex justify-center">
                <table className="table-auto w-full max-w-6xl text-sm text-center text-black border border-yellow-300 shadow-lg bg-white">
                    <thead className="bg-yellow-200">
                        <tr>
                            <th className="border border-yellow-300 px-4 py-2">Name</th>
                            <th className="border border-yellow-300 px-4 py-2">Description</th>
                            <th className="border border-yellow-300 px-4 py-2">Price</th>
                            <th className="border border-yellow-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cuisines.map((el) => (
                            <tr key={el.id} className="hover:bg-yellow-100 transition duration-200">
                                <td className="border border-yellow-300 px-3 py-2">{el.name}</td>
                                <td className="border border-yellow-300 px-3 py-2 text-left">{el.description}</td>
                                <td className="border border-yellow-300 px-3 py-2">{el.price}</td>
                                <td className="border border-yellow-300 px-3 py-2 space-x-2">
                                    <button
                                        onClick={() => navigate(`/cuisines/edit/${el.id}`)}
                                        className="text-yellow-600 hover:underline font-medium"
                                        type="button"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteCuisine(el.id)}
                                        className="text-red-600 hover:underline font-medium"
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