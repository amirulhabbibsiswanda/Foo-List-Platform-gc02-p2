import Button from "../components/Button"
import { useState } from "react";
import axiosInstance from "../library/https";
import { useNavigate } from "react-router";

export default function AddUser() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")

    const navigate = useNavigate()

    async function postNewUser(e) {
        e.preventDefault()
        try {
            await axiosInstance.post("/apis/add-user",
                {
                    username, email, password, phoneNumber, address
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                }
            )

            navigate("/cuisines")
        } catch (error) {
            console.log(error, "ini error");
            console.log(error.name, "ini error name");

        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 px-4">
            <p className="text-2xl font-bold text-yellow-700 mb-6">Add New User</p>

            <form onSubmit={postNewUser} className="w-full max-w-xl p-6 bg-white border border-yellow-300 rounded-lg shadow-md">
                <div className="mb-5">
                    <label htmlFor="username" className="block mb-2 text-sm font-semibold text-yellow-800">
                        Username
                    </label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        name="username"
                        id="username"
                        placeholder=""
                        className="bg-yellow-100 border border-yellow-300 text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-yellow-800">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="text"
                        id="email"
                        className="bg-yellow-100 border border-yellow-300 text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-yellow-800">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="text"
                        id="password"
                        className="bg-yellow-100 border border-yellow-300 text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-semibold text-yellow-800">
                        Phone Number
                    </label>
                    <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        name="phoneNumber"
                        type="text"
                        id="phoneNumber"
                        className="bg-yellow-100 border border-yellow-300 text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="address" className="block mb-2 text-sm font-semibold text-yellow-800">
                        Address
                    </label>
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        name="address"
                        type="text"
                        id="address"
                        className="bg-yellow-100 border border-yellow-300 text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                    />
                </div>

                <div className="text-right">
                    <Button />
                </div>
            </form>
        </div>


    )
}