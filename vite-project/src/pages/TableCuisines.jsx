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
        < div className="relative overflow-x-auto" >
            <button className="bg-green-400 p-3"><NavLink to={"/cuisines/add"}>Add New Cuisine</NavLink></button>

            <p className="text-center text-2xl font-semibold">Cuisine List</p>
            <div className="flex justify-center">

                <table className="text-center max-w-full w-200 text-sm rtl:text-right text-black border border-black">
                    <thead>
                        <tr className="">
                            <th className="border border-black">Name</th>
                            <th className="border border-black">Description</th>
                            <th className="border border-black">Price</th>
                            <th className="border border-black">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cuisines.map((el) => {
                            return (
                                <tr key={el.id}>
                                    <td className="border border-black">{el.name}</td>
                                    <td className="border border-black">{el.description}</td>
                                    <td className="border border-black">{el.price}</td>
                                    <td className="border border-black">
                                        <button onClick={() => { navigate(`/cuisines/edit/${el.id}`) }} className="text-blue-500 hover:cursor-pointer" type="button">Edit</button>
                                        <button onClick={() => { deleteCuisine(el.id) }} className="text-red-500 hover:cursor-pointer bg-amber-100" type="button">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </div >

    )

}