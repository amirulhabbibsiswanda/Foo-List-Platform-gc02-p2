// import axios from 'axios';
import axiosInstance from '../library/https';
import { useState, useEffect } from 'react';
// import { useState } from 'react';


export default function CardCuisines() {

    const [cuisines, setCuisines] = useState([])

    async function getData() {
        try {
            const fetchedData = await axiosInstance.get("apis/pub/restaurant-app/cuisines")
            // console.log(fetchedData.data.data, "<<<<<<"); // ambil sampel satu data
            // console.log(cuisines, "=======");
            setCuisines(fetchedData.data.data.query)
        } catch (error) {
            console.log(error.name, "error name");
            console.log(error, "ini errornya");
        }
    }
    // console.log("ini jalan");
    // getData()

    useEffect(() => {
        getData();
    }, [])

    const handleOnDelete = (id) => {
        setCuisines(cuisines.filter((el) => el.id !== id))
    }
    return (
        <>
            {/* {JSON.stringify(cuisines)} */}
            <div className="mx-5 flex justify-evenly flex-wrap">
                {/* {JSON.stringify(cuisines)} */}
                {cuisines.map((cuisine) => {
                    return (
                        <div key={cuisine.id} className="w-100 max-h-full mt-5 border border-black flex flex-col items-center justify-between text-center" id="cards-container">
                            <img className="w-85 max-w-full h-90 mt-0" src={cuisine.imgUrl} />
                            <div id="product-description" className=" py-4">
                                <p id="product-name" className="text-2xl font-bold">{cuisine.name}</p>
                                <p id="product-description" className="text-xl font-normal">{cuisine.description}</p>
                            </div>
                            <div className="">
                                <button className="text-blue-500 hover:cursor-pointer underline mx-4">See Detail</button>
                                <button onClick={() => { handleOnDelete(cuisine.id) }} className="text-red-500 hover:cursor-pointer underline mx-4">Delete</button>

                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}