import { NavLink } from "react-router-dom";

export default function Nav(){

    return (
        <div className="pt-10 w-screen font-serif">
            <div className="pl-12 pr-12 ">
                <nav className="flex justify-center gap-20 bg-[rgba(170,48,48,0.37)] border border-red-500 ring ring-red-700 ring-offset-2 shadow-lg shadow-red-500/50 opacity-75 rounded-md">
                    <div className="hover:text-red-700/100 hover:underline decoration-solid">
                        <NavLink to="/" className={({ isActive}) => isActive
                            ? "text-red-700 font-bold underline decoration-solid"
                            : ""}>Home</NavLink>
                    </div>

                    <div className="hover:text-red-700/100 hover:underline decoration-solid">
                        <NavLink to="/experience" className={({ isActive}) => isActive
                            ? "text-red-700 font-bold underline decoration-solid"
                            : ""}>Experience</NavLink>
                    </div>

                    <div className="hover:text-red-700/100 hover:underline decoration-solid">
                        <NavLink to="/projects" className={({ isActive}) => isActive
                            ? "text-red-700 font-bold underline decoration-solid"
                            : ""}>Projects</NavLink>
                    </div>

                    <div className="hover:text-red-700/100 hover:underline decoration-solid">
                        <NavLink to="/contact" className={({ isActive}) => isActive
                            ? "text-red-700 font-bold underline decoration-solid"
                            : ""}>Contact</NavLink>
                    </div>

                </nav>
            </div>
        </div>
    )
}