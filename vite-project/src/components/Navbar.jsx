import { NavLink } from "react-router"

export default function Navbar() {
    return (
        <div id="navbar" className="flex justify-between items-center bg-yellow-300 h-35 min-w-screen">
            <img className="h-35 rounded-b-lg" src="https://i.pinimg.com/736x/d8/bd/63/d8bd63b0bff920df88eeec64e634c48a.jpg" alt="logo" />
            <div>
                <a className=" text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button" href="#">HOME</a>
                <a className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button" href="#">MENU</a>
                <a className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button" href="#">OUR SERVICES</a>
            </div>

            {
                localStorage.getItem("access_token") ?
                    <div><p className="text-blue-700 px-2 rounded-lg bg-slate-100 text-xl">HALO SELAMAT DATA DI RUMAH MAKAN ONLINE PALSU</p></div>
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