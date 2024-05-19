import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";



import "../Styles/main.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3>Estelle</h3>
            <nav ref={navRef}>
                <div className="nav-links">
                    <a href="/#">Home</a>
                    <a href="/#">Floor Plans</a>
                    <a href="/#">Gallery</a>
                    <a href="/#">Contact</a>
                </div>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <CiMenuBurger />
            </button>
        </header>
    );
}

export default Navbar;
