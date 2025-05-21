import { useState } from "react";
import Button from "../components/Button";

export default function CreateAndEditProduct() {

    const [cuisineName, setcuisineName] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")
    const [imageUrl, setimageUrl] = useState("")
    const [category, setcategory] = useState("")
    const [author, setauthor] = useState("")

    // const inputHandler = (value, name) => {
    //     if (name === "cuisineName") {
    //         setcuisineName(value)
    //         // console.log(value, cuisineName);
    //     }

    // }
    // console.log(cuisineName);

    return (
        <div className="flex flex-col justify-center">
            <p className="text-center text-xl">Cuisine Input Form</p>


            <form class="w-250 max-w-full mx-auto border border-black">
                <div class="mb-5">
                    <label for="cuisineName" class="block mb-2 text-sm font-medium text-black ">Cuisine Name</label>
                    <input onChange={(e) => { setcuisineName(e.target.value) }} value={cuisineName} type="text" name="cuisineName" id="cuisineName" class="shadow-xs bg-yellow-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="" required />
                </div>
                <div class="mb-5">
                    <label for="price" class=" block mb-2 text-sm font-medium text-black">Description</label>
                    <input onChange={(e) => { setprice(e.target.value) }} value={price} name="price" type="text" id="price" class="shadow-xs  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 bg-yellow-100 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>
                <div class="mb-5">
                    <label for="description" class="block mb-2 text-sm font-medium text-black">Price</label>
                    <input onChange={(e) => { setdescription(e.target.value) }} value={description} type="number" id="description" class="shadow-xs bg-yellow-100 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>
                <div class="mb-5">
                    <label for="imageUrl" class="block mb-2 text-sm font-medium text-black">Image Url</label>
                    <input onChange={(e) => { setimageUrl(e.target.value) }} value={imageUrl} type="number" id="imageUrl" class="shadow-xs bg-yellow-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>

                <div className="space-x-5">
                    <label htmlFor="">Category</label>
                    <select className="border border-slate-400 bg-slate-400" value={category} onChange={(e) => { setcategory(e.target.value) }} name="category" id="">
                        <option value="1">iza</option>
                        <option value="2">siblon</option>
                    </select>
                </div>
                <div className="space-x-5">
                    <label htmlFor="">Author</label>
                    <select className="border border-slate-400 bg-slate-400" value={author} onChange={(e) => { setauthor(e.target.value) }} name="author" id="">
                        <option value="1">lontong</option>
                        <option value="2">jembas</option>
                    </select>
                </div>

                <Button />
            </form>


        </div>

    )
}