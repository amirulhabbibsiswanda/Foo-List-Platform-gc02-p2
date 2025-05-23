// import axios from 'axios';
import axiosInstance from '../library/https';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
// import { useState } from 'react';

export default function CardCuisines() {
    const navigate = useNavigate()
    const [cuisines, setCuisines] = useState([])
    const [search, setSearch] = useState("")

    let path = "/apis/pub/restaurant-app/cuisines"
    if (search) {
        path = path + `?q=${search}`
    }
    async function getData(path) {
        try {
            const fetchedData = await axiosInstance.get(path)
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
        getData(path);
    }, [path])

    const intoCuisineDetail = (id) => {
        navigate(`/apis/pub/restaurant-app/cuisines/${id}`)
    }

    return (
        <>
            <div className=''>
                <div>
                    {/* <form onSubmit={getData} className='' action=""> */}
                    <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" className='border' placeholder='search by cuisine name' />
                    {/* </form> */}
                </div>
                <div className="mx-5 flex justify-evenly flex-wrap">
                    {/* {JSON.stringify(cuisines)} */}
                    {cuisines.map((cuisine) => {
                        return (
                            <div key={cuisine.id} className="w-100 max-h-full mt-5 border border-black flex flex-col items-center justify-between text-center" id="cards-container">
                                <img className="w-85 max-w-full h-90 mt-0" src={cuisine.imgUrl} />
                                <div id="product-description" className=" py-4">
                                    <p id="product-name" className="text-2xl font-bold">{cuisine.name}</p>
                                    <p id="product-price" className="text-xl font-normal">{cuisine.price}</p>
                                </div>
                                <div className="">
                                    <button onClick={() => { intoCuisineDetail(cuisine.id) }} className="text-blue-500 hover:cursor-pointer underline mx-4">See Detail</button>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
