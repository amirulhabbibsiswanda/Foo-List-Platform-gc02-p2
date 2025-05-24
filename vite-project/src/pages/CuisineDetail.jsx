import { useParams } from 'react-router';
import axiosInstance from '../library/https';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

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
            // console.log(error, "error");
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    useEffect(() => {
        fetchCuisine(cuisineId)
    }, [cuisineId])

    return (
        <div className='flex justify-center min-h-screen border'>

            <div className="flex flex-col items-center justify-center w-64 rounded-lg overflow-hidden shadow-sm">
                <img className="w-full h-40 object-cover shadow-lg shadow-amber-300" src={cuisine.imgUrl} alt={cuisine.name} />
                <div className="text-center p-4 shadow-lg shadow-amber-100">
                    <p className="text-lg font-semibold">{cuisine.name}</p>
                    <p className="text-sm text-gray-600">{cuisine.description}</p>
                    <p className="mt-2 font-medium">Harga: {cuisine.price}</p>
                </div>
            </div>
        </div>

    );
}
