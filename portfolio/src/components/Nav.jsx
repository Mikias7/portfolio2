import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="pt-6 w-full font-serif">
      <div className="px-4 sm:px-8 md:px-12">
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 bg-[rgba(170,48,48,0.37)] border border-red-500 ring ring-red-700 ring-offset-2 shadow-lg shadow-red-500/50 opacity-80 rounded-md p-3 text-sm sm:text-base md:text-lg">
          
          <div className="hover:text-red-700 hover:underline decoration-solid">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 font-bold underline decoration-solid"
                  : ""
              }
            >
              Home
            </NavLink>
          </div>

          <div className="hover:text-red-700 hover:underline decoration-solid">
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 font-bold underline decoration-solid"
                  : ""
              }
            >
              Experience
            </NavLink>
          </div>

          <div className="hover:text-red-700 hover:underline decoration-solid">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 font-bold underline decoration-solid"
                  : ""
              }
            >
              Projects
            </NavLink>
          </div>

          <div className="hover:text-red-700 hover:underline decoration-solid">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 font-bold underline decoration-solid"
                  : ""
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
