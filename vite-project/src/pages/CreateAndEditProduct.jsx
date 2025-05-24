import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import axiosInstance from "../library/https";
import { useParams } from 'react-router';
import Swal from "sweetalert2";

export default function CreateAndEditProduct() {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [cuisineName, setCuisineName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [categoryId, setCategoryId] = useState()

    async function fetchCategories() {
        try {
            const categories = await axiosInstance.get("/apis/restaurant-app/categories",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                })
            // console.log(categories.data.data, "ni categories");
            setCategories(categories.data.data)

        } catch (error) {
            // console.log(error, "ini error");
            // console.log(error.name, "ini error name");
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })

        }
    }

    async function addCuisine() {
        try {
            await axiosInstance.post("/apis/restaurant-app/cuisines",
                {
                    name: cuisineName, description, price: Number(price), imgUrl, categoryId: Number(categoryId)
                },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
                }
            )
            navigate("/cuisines")

        } catch (error) {
            // console.log(error, " ini error");
            // console.log(error.name, " ini error name");
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }


    async function editCuisine() {
        try {

            await axiosInstance.put(`/apis/restaurant-app/cuisines/${cuisineId}`,
                {
                    name: cuisineName, description, price: Number(price), imgUrl, categoryId: Number(categoryId)
                },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
                }
            )
            navigate("/cuisines")
        } catch (error) {
            // console.log(error, " ini error");
            // console.log(error.name, " ini error name");
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }


    async function populateDataInEdit(cuisineId) {
        try {
            const { data } = await axiosInstance.get(`/apis/restaurant-app/cuisines/${cuisineId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                }
            )

            setCuisineName(data.data.name)
            setPrice(data.data.price)
            setDescription(data.data.description)
            setImgUrl(data.data.imgUrl)
            setCategoryId(data.data.categoryId)

        } catch (error) {
            // console.log(error, "ini error");
            // console.log(error.name, "ini error name");
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    let params = useParams()
    let cuisineId = params.id
    useEffect(() => {
        fetchCategories()
        if (cuisineId) {
            populateDataInEdit(cuisineId)
        }

    }, [cuisineId])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cuisineId) {
            editCuisine()
        } else {
            addCuisine()
        }
    }

    return (
        <div className="flex flex-col justify-center p-6">
            <p className="text-center text-2xl font-bold text-yellow-700 mb-6">Cuisine Input Form</p>

            <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto border border-yellow-400 rounded-lg p-6 shadow-md bg-white space-y-5">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Cuisine Name</label>
                    <input
                        onChange={(e) => setCuisineName(e.target.value)}
                        value={cuisineName}
                        type="text"
                        name="cuisineName"
                        id="cuisineName"
                        className="bg-yellow-100 border border-yellow-300 text-black text-sm rounded-md focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 shadow-sm"
                        placeholder=""
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                        id="price"
                        className="bg-yellow-100 border border-yellow-300 text-black text-sm rounded-md focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 shadow-sm"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        type="text"
                        id="description"
                        className="bg-yellow-100 border border-yellow-300 text-black text-sm rounded-md focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 shadow-sm"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Image Url</label>
                    <input
                        onChange={(e) => setImgUrl(e.target.value)}
                        value={imgUrl}
                        type="text"
                        id="imgUrl"
                        className="bg-yellow-100 border border-yellow-300 text-black text-sm rounded-md focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 shadow-sm"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
                    <select
                        className="border border-yellow-300 bg-yellow-50 text-sm rounded-md p-2.5 w-full text-black focus:ring-yellow-500 focus:border-yellow-500"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        name="category"
                        id=""
                    >
                        <option value="" disabled>Select Category</option>
                        {categories.map((el) => (
                            <option key={el.id} value={el.id}>{el.name}</option>
                        ))}
                    </select>
                </div>

                <div className="pt-4">
                    <Button />
                </div>
            </form>
        </div>


    )
}