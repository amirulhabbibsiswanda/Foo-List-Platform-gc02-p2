
import { useNavigate } from 'react-router';

export default function Card({ cuisine }) {
    const navigate = useNavigate()

    const intoCuisineDetail = (id) => {
        navigate(`/cuisine/detail/${id}`)
    }

    return (
        <div className="">
            <div className="w-100 max-h-full mt-5 border border-black flex flex-col items-center justify-between text-center">
                <img src={cuisine.imgUrl} className="w-85 max-w-full h-90 mt-0" alt="" />
                <div className="py-4">
                    <h5 className="text-xxl font-bold">{cuisine.name}</h5>
                </div>
                <button onClick={() => { intoCuisineDetail(cuisine.id) }} className="text-blue-500 hover:cursor-pointer underline mx-4">Detail</button>
            </div>
        </div>

    )
}