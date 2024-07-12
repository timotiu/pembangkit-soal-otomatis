import { Link, Outlet } from "react-router-dom";

export const Nav=()=>{
    return(
        <>
        <nav>
            <ul className="flex gap-10 pl-10 mb-5 py-5 justify-center font-medium  shadow-green-200 shadow-lg">
            <li className="transition ease-in-out delay-15 hover:-translate-y-1 duration-300">
                    <Link to='/'>Pembangkit Soal - <span className="uppercase font-bold text-green-800">Otomatis</span></Link>
                </li>
            </ul>
        </nav>
        </>
    )
}