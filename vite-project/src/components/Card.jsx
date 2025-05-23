// import axiosInstance from "../library/https";
// import { useNavigate } from "react-router";

export default function Card({ cuisine }) {

    return (
        <div className="col mb-5">
            <div className="card" style={{ width: '18rem' }}>
                <img src={cuisine.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cuisine.name}</h5>
                </div>
                <button className="btn btn-sm btn-primary">Detail</button>
            </div>
        </div>
    )
}