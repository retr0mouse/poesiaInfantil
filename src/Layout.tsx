import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 768) {
            setIsMenuOpened(false);
        }
    }, [windowWidth]);

    return (
        <>
            <header>
                <NavLink className={({ isActive }) => (isActive ? "active " : "") + "header_link"} to="/about">Sobre nosotros</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active " : "") + "header_link"} to="/news">Novedades</NavLink>
                <NavLink to="/"><img className="logo_btn" src="/poesiaInfantil/logo.svg" alt="" /></NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active " : "") + "header_link"} to="/learn">Leer online</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active " : "") + "header_link"} to="/news">Nuestro blog</NavLink>
                <button onClick={() => setIsMenuOpened(!isMenuOpened)} className='burger_btn'><img className="" src="/poesiaInfantil/burger.svg" alt="" /></button>
                <div className={`menu ${isMenuOpened ? 'opened' : ''}`}>
                    <NavLink className={({ isActive }) => isActive ? "active " : "" + "menu_link"} to="/about">Sobre nosotros</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active " : "" + "menu_link"} to="/news">Novedades</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active " : "" + "menu_link"} to="/learn">Leer online</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active " : "") + "header_link"} to="/news">Nuestro blog</NavLink>
                </div>
            </header>
            <Outlet />
            <footer>
                <div className="footer_content">
                    <h1>ME INTERESA LA POESÍA INFANTIL</h1>
                    <p>Suscríbete para recibir la información más reciente e importantes de poesiainfantil.es, desde novedades hasta ofertas especiales, lanzamientos exclusivos, eventos y más.</p>
                    <div className="email_input">
                        <input type="email" name="email" id="email" placeholder='Dirección de correo electrónico' />
                        <button>ME SUSCRIBO</button>
                    </div>
                    <div className="terms_container">
                        <label>
                            <input type="checkbox" name="terms" id="terms" />
                            <span className="checkmark"></span>
                            Acepto la <b>Política de privacidad</b> poesiainfantil.es
                        </label>
			</div>
                    <div className="green_line" />
                    <div className="footer_links">
                        <a href="">Política</a>
                        <p>©2024 poesiainfantil.es</p>
                        <a href="">Política de cookies</a>
                    </div>
                </div>
                <img src="/poesiaInfantil/footerImage.svg" alt="" />
            </footer>
        </>
    );
}
