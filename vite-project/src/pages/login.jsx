import { useState } from "react"
import { useNavigate } from "react-router"
import axiosInstance from "../library/https"

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
            console.log(user.data, "ini user.data.data");
            localStorage.setItem("access_token", user.data.data.access_token)
            navigate("/cuisines")

        } catch (error) {
            console.log(error.name, "ini erorname");
            console.log(error.message, "ini eror message");
            console.log(error, "ini error");
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

        // <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        //     <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        //         <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        //             <div class="mt-12 flex flex-col items-center">
        //                 <h1 class="text-2xl xl:text-3xl font-extrabold">
        //                     Login
        //                 </h1>

        //                 <div class="w-full flex-1 mt-8">

        //                     <div class="mx-auto max-w-xs">
        //                         <input
        //                             class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        //                             name="email" type="email" placeholder="Email" />
        //                         <input
        //                             class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        //                             name="email" type="password" placeholder="Password" />


        //                         {/* <button
        //                             class="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        //                             </svg>

        //                             <span class="ml-3">
        //                                 Login
        //                             </span>
        //                         </button> */}
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    )
}