// import { useState } from "react";
// import Button from "../components/Button";
// import axios from "axios";
// import { useNavigate } from "react-router";

// export default function CreateAndEditProduct() {

//     const [cuisineName, setCuisineName] = useState("")
//     const [price, setPrice] = useState(0)
//     const [description, setDescription] = useState("")
//     const [imageUrl, setImgUrl] = useState("")
//     const [categoryId, setCategoryId] = useState()
//     // const [author, setauthor] = useState("")

//     // const inputHandler = (value, name) => {
//     //     if (name === "cuisineName") {
//     //         setCuisineName(value)
//     //         // console.log(value, cuisineName);
//     //     }

//     // }
//     // console.log(cuisineName);
//     const navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const response = await axios.post("https://h8-phase2-gc.vercel.app/apis/restaurant-app/cuisines",
//             {
//                 "name": cuisineName,
//                 "description": description,
//                 "price": Number(price),
//                 "imgUrl": imageUrl,
//                 "stock": 120,
//                 "categoryId": Number(categoryId)
//             },
//             {
//                 headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzQ3ODQzOTM5LCJleHAiOjE3NDc4NDc1Mzl9.SfRyrNnP0VK0im4yOwx_irzHay6qmfWwDRGk9kOfuJs" }
//             }
//         )
//         navigate("/")
//         console.log(response, "in  response");

//     }

//     return (
//         <div className="flex flex-col justify-center">
//             <p className="text-center text-xl">Cuisine Input Form</p>


//             <form onSubmit={handleSubmit} class="w-250 max-w-full mx-auto border border-black">
//                 <div class="mb-5">
//                     <label for="cuisineName" class="block mb-2 text-sm font-medium text-black ">Cuisine Name</label>
//                     <input onChange={(e) => { setCuisineName(e.target.value) }} value={cuisineName} type="text" name="cuisineName" id="cuisineName" class="shadow-xs bg-yellow-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="" required />
//                 </div>
//                 <div class="mb-5">
//                     <label for="price" class=" block mb-2 text-sm font-medium text-black">Price</label>
//                     <input onChange={(e) => { setPrice(e.target.value) }} value={price} name="price" type="number" id="price" class="shadow-xs  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 bg-yellow-100 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
//                 </div>
//                 <div class="mb-5">
//                     <label for="description" class="block mb-2 text-sm font-medium text-black">Description</label>
//                     <input onChange={(e) => { setDescription(e.target.value) }} value={description} type="text" id="description" class="shadow-xs bg-yellow-100 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
//                 </div>
//                 <div class="mb-5">
//                     <label for="imageUrl" class="block mb-2 text-sm font-medium text-black">Image Url</label>
//                     <input onChange={(e) => { setImgUrl(e.target.value) }} value={imageUrl} type="text" id="imageUrl" class="shadow-xs bg-yellow-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
//                 </div>

//                 <div className="space-x-5">
//                     <label htmlFor="">Category</label>
//                     <select className="border border-slate-400 bg-slate-400" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }} name="category" id="">
//                         <option value="1">iza</option>
//                         <option value="2">siblon</option>
//                     </select>
//                 </div>
//                 <div className="space-x-5">
//                     <label htmlFor="">Author</label>
//                     {/* <select className="border border-slate-400 bg-slate-400" value={author} onChange={(e) => { setauthor(e.target.value) }} name="author" id="">
//                         <option value="1">lontong</option>
//                         <option value="2">jembas</option>
//                     </select> */}
//                 </div>

//                 <Button />
//             </form>


//         </div>

//     )
// }