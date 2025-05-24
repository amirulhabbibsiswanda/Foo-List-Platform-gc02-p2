import { useNavigate, NavLink } from "react-router"

export default function Navbar() {
    const navigate = useNavigate()
    function logout() {
        localStorage.clear()
        navigate("/login")
    }
    return (
        <div id="navbar" className="flex justify-between items-center bg-yellow-300 h-35 min-w-screen">
            <img className="h-35 rounded-b-lg" src="https://i.pinimg.com/736x/d8/bd/63/d8bd63b0bff920df88eeec64e634c48a.jpg" alt="logo" />
            {
                localStorage.getItem("access_token") ?
                    <div>
                        <a onClick={() => { navigate("/") }}
                            className="hover:cursor-pointer text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button">
                            Cuisines Surfing</a>
                        <a onClick={() => { navigate("/categories") }}
                            className="hover:cursor-pointer text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button">
                            categories list</a>
                        <a onClick={() => { navigate("/cuisines") }}
                            className="hover:cursor-pointer text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button">
                            cuisines list</a>
                    </div>
                    :
                    <div>
                        <a onClick={() => { navigate("/") }}
                            className=" text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500  focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button">
                            Cuisines Surfing</a>
                    </div>
            }

            {
                localStorage.getItem("access_token") ?
                    <div>
                        <button className="m-1 p-3 bg-slate-200 rounded-2xl 
                                        font-semibold hover:cursor-pointer hover:bg-blue-400"
                            onClick={logout} id="side-button">LOGOUT</button>
                    </div>
                    :
                    <div>
                        <button className="m-1 p-3 bg-slate-200 rounded-2xl 
                                        font-semibold hover:cursor-pointer hover:bg-blue-400"
                            id="side-button"><NavLink to={"/login"}>LOGIN</NavLink></button>
                    </div>
            }
        </div>

    )
}