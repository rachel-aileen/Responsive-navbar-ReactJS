import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

import "../Styles/main.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <a href="#">
                <img src="https://firebasestorage.googleapis.com/v0/b/ally-health-obgyn.appspot.com/o/estelleLogo.png?alt=media&token=af9b27c5-e88b-48f9-8350-f1b486a888db" 
                alt="Estelle Logo"
                className="logo"></img> 
            </a>
            <nav ref={navRef}>
                <div className="nav-links">
                    <a href="/#">Home</a>
                    <a href="/#">Floor Plans</a>
                    <a href="/#">Gallery</a>
                    <a href="/#">Contact</a>
                </div>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <IoCloseOutline />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <CiMenuBurger />
            </button>
        </header>
    );
}

export default Navbar;
