import { useParams } from 'react-router';
import axiosInstance from '../library/https';
import { useEffect, useState } from 'react';

export default function CuisineDetail() {
    const [cuisine, setCuisine] = useState({})

    let cuisineId = useParams().id
    console.log(cuisineId, "ini cuisine id");

    async function fetchCuisine(id) {
        try {
            const { data } = await axiosInstance.get(`/apis/pub/restaurant-app/cuisines/${id}`)
            // console.log(data.data, 'ini data');
            // { id: 272, name: "Es Kopi Gula Malaka Pangalengan", description: "Kopi dengan susu dan gula jawa", price: 48600, imgUrl: "https://res.cloudinary.com/dpjqm8kkk/image/upload/v1723556109/hacktiv8/restaurant/es-kopi-gula-malaka-pangalengan-6hoitjxuqb9.jpg", categoryId: 19, authorId: 3, createdAt: "2024-08-13T13:35:09.960Z", updatedAt: "2024-08-13T13:35:09.960Z", Category: {…}, … }
            setCuisine(data.data)
        } catch (error) {
            console.log(error, "error");
        }
    }

    useEffect(() => {
        fetchCuisine(cuisineId)
    }, [cuisineId])

    return (

        <div className="flex flex-col content-center justify-center w-200 border border-black" style={{}}>
            <img className="w-100" src={cuisine.imgUrl} alt="" />
            <div className="text-center">
                <p>{cuisine.name}</p>
                <p>{cuisine.description}</p>
                <p>Harga: {cuisine.price}</p>
                {/* <p>{cuisine.Category.name}</p>
                <p>{cuisine.User.username}</p> */}
            </div>
        </div>
    );
}
