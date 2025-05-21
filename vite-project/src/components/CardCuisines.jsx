import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useState } from 'react';


export default function CardCuisines() {

    const [cuisines, setCuisines] = useState([])

    async function getData() {
        try {
            const fetchedData = await axios.get("https://h8-phase2-gc.vercel.app/apis/pub/restaurant-app/cuisines")
            // console.log(fetchedData.data.data.query[0], "<<<<<<"); // ambil sampel satu data
            // console.log(cuisines, "=======");
            setCuisines(fetchedData.data.data.query)

        } catch (error) {
            console.log(error.name, "error name");
            console.log(error, "ini errorr");

        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {/* {JSON.stringify(cuisines)} */}
            <div className="mx-5 flex justify-evenly flex-wrap">
                {cuisines.map((cuisine) => {
                    return (
                        <div className="w-100 h-135 max-h-full mt-5 border border-black flex flex-col items-center justify-between text-center" id="cards-container">
                            <img className="w-85 max-w-full h-90 mt-0" src={cuisine.imgUrl} alt="" />
                            <div id="product-description" className=" py-4">
                                <p id="product-name" className="text-2xl font-bold">{cuisine.name}</p>
                                <p id="product-description" className="text-xl font-normal">{cuisine.description}</p>
                            </div>
                            <div className="">
                                <button className="text-blue-500 hover:cursor-pointer underline mx-4">See Detail</button>
                                <button className="text-red-500 hover:cursor-pointer underline mx-4">Delete</button>

                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}