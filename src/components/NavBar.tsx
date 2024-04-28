import { Link } from 'react-router-dom';
import Logomarca from '../assets/img/logomarca.png';
import { FaGear } from "react-icons/fa6";

const NavBar = () => {
    return (
        <>
            <div className="w-full h-20 bg-purple-950">
                <div className="w-full px-5 py-3 flex items-center justify-between max-w-7xl m-auto">
                    <img src={Logomarca} className="w-40" />
                    <ul className="flex text-white flex-row gap-5 items-center justify-center">
                        <Link className="text-yellow-500 hover:text-amber-600 duration-200" to="/app-band">Home</Link>
                        <Link className="text-yellow-500 hover:text-amber-600 duration-200" to="/app-band/grupos">Grupos</Link>
                        <button type="button"><FaGear /></button>
                       
                      
                    </ul>
                </div>

            </div>
        </>
    )
}

export default NavBar