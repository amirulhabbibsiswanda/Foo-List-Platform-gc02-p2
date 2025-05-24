
import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axiosInstance from '../library/https'
import Swal from 'sweetalert2'

export default function UploadImage() {
    const id = useParams().id
    const navigate = useNavigate()
    const [file, setFile] = useState(null)
    const [cuisine, setCuisine] = useState(false)
    const [cuisineWillBeEdit, setCuisineWillBeEdit] = useState({})

    async function getCuisine(id) {
        try {
            const { data } = await axiosInstance.get(`/apis/restaurant-app/cuisines/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                }
            )
            // console.log(data.data, "iniiiii");
            setCuisineWillBeEdit(data.data)
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }


    async function handleUpload() {

        setCuisine(true)
        try {
            const formData = new FormData()
            formData.append('file', file)

            await axiosInstance.patch("/apis/restaurant-app/cuisines/" + id, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            })

            setFile(null)
            navigate('/cuisines')
        } catch (error) {
            // console.log(error);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })

        } finally {
            setCuisine(false)
        }
    }


    useEffect(() => {
        getCuisine(id)
    }, [id])

    return (

        <div className='bg-yellow-50'>

            <div className="flex flex-col items-center mt-4">
                <div className="border border-black w-fit p-4">
                    <img
                        src={cuisineWillBeEdit.imgUrl}
                        alt=""
                        className="max-w-[240px] max-h-[240px] object-cover rounded"
                    />
                    <div className="py-2 text-center">
                        <h5 className="text-lg font-bold">{cuisineWillBeEdit.name}</h5>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center min-h-[40vh]  px-4 mt-6">
                <h2 className="text-lg font-semibold text-yellow-700 mb-4">
                    Change cuisine image with ID: {id}
                </h2>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    disabled={cuisine}
                    className="mb-4 block w-full max-w-xs text-sm text-gray-700 bg-white border border-yellow-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50"
                />

                <div className="flex gap-4">
                    <button
                        onClick={handleUpload}
                        disabled={cuisine || !file}
                        className={`px-4 py-2 rounded-lg text-white font-semibold transition ${cuisine || !file
                            ? 'bg-yellow-300 cursor-not-allowed'
                            : 'bg-yellow-500 hover:bg-yellow-600'
                            }`}
                    >
                        {cuisine ? 'Uploading Image' : 'Upload Image'}
                    </button>

                    <button
                        onClick={() => navigate('/cuisines')}
                        disabled={cuisine}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${cuisine
                            ? 'bg-gray-300 text-white cursor-not-allowed'
                            : 'bg-white text-yellow-700 border border-yellow-500 hover:bg-yellow-100'
                            }`}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>


    )
}
