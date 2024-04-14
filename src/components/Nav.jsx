import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="padding-x padding-y absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <Link to="/Nike-Landing-Page/">
                <img 
                    src={headerLogo}
                    alt="Logo" 
                    width={130}
                    height={29}
                />
            </Link>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className="font-montserrat leading-normal text-lg text-slate-gray"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block">
                <img 
                    src={hamburger}
                    alt="Hamburguer"
                    width={25}
                    height={25} 
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav