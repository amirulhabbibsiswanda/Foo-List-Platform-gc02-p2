import { useState } from "react"
import { useNavigate } from "react-router"
import axiosInstance from "../library/https"
import Swal from "sweetalert2"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function login(e) {
        try {
            e.preventDefault()
            const user = await axiosInstance.post("/apis/login",
                {
                    email: email,
                    password: password
                }
            )
            // console.log(user.data, "ini user.data.data");
            localStorage.setItem("access_token", user.data.data.access_token)
            navigate("/cuisines")

        } catch (error) {
            // console.log(error.name, "ini erorname");
            // console.log(error.message, "ini eror message");
            // console.log(error, "ini error");
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">LOGIN PAGE
            <form onSubmit={login} className="flex flex-col w-150 h-150">
                <label htmlFor="email">Email</label>
                <input name="email" onChange={(e) => { setEmail(e.target.value) }} className="border" type="text" />

                <label htmlFor="password">Password</label>
                <input name="password" onChange={(e) => { setPassword(e.target.value) }} className="border" type="text" />

                <input type="submit" value="LOGIN" className="bg-green-300 mt-10 w-50 mx-auto hover:cursor-pointer" />
            </form>

        </div>


    )
}