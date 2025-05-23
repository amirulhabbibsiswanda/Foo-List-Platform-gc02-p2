import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import axiosInstance from "../library/https";
import { useParams } from 'react-router';

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
            console.log(error, "ini error");
            console.log(error.name, "ini error name");

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
            navigate("/")

        } catch (error) {
            console.log(error, " ini error");
            console.log(error.name, " ini error name");
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
            console.log(error, " ini error");
            console.log(error.name, " ini error name");
        }
    }

    let params = useParams()
    let cuisineId = params.id

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
            console.log(error, "ini error");
            console.log(error.name, "ini error name");
        }
    }
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
        <div className="flex flex-col justify-center">
            <p className="text-center text-xl">Cuisine Input Form</p>

            <form onSubmit={handleSubmit} className="w-250 max-w-full mx-auto border border-black">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-black ">Cuisine Name</label>
                    <input onChange={(e) => { setCuisineName(e.target.value) }} value={cuisineName} type="text" name="cuisineName" id="cuisineName" className="shadow-xs bg-yellow-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="" />
                </div>
                <div className="mb-5">
                    <label className=" block mb-2 text-sm font-medium text-black">Price</label>
                    <input onChange={(e) => { setPrice(e.target.value) }} value={price} name="price" type="number" id="price" className="shadow-xs  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 bg-yellow-100 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-black">Description</label>
                    <input onChange={(e) => { setDescription(e.target.value) }} value={description} type="text" id="description" className="shadow-xs bg-yellow-100 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-black">Image Url</label>
                    <input onChange={(e) => { setImgUrl(e.target.value) }} value={imgUrl} type="text" id="imgUrl" className="shadow-xs bg-yellow-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
                </div>

                <div className="space-x-5">
                    <label htmlFor="">Category</label>
                    <select className="border border-slate-400 bg-slate-400" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }} name="category" id="">
                        <option value="" selected disabled>Select Category</option>
                        {categories.map((el) => {
                            return (
                                <option key={el.id} value={el.id}>{el.name}</option>
                            )
                        })}
                    </select>
                </div>

                <Button />
            </form>


        </div>

    )
}