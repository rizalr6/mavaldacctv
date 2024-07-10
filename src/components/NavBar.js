import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from '../assets/img/logob.png';
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';

export const NavBar = () => {

const [activeLink, setActivelink] = useState('home');
const [scrolled, seScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50) {
            seScrolled(true);
        } else {
            seScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
}, {})

const onUpdateActiveLink = (value) => {
    setActivelink(value);
}

return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo" className="logomsg" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="home" spy={true} smooth={true} offset={20} duration={900}><Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}> Home </Nav.Link></Link>
                    <Link to="skills" spy={true} smooth={true} offset={-215} duration={900}><Nav.Link className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}> About </Nav.Link></Link>
                    <Link to="product" spy={true} smooth={true} offset={-70} duration={900}><Nav.Link className={activeLink === 'products' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('products')}> Product </Nav.Link></Link>
                    <Link to="about" spy={true} smooth={true} offset={-90} duration={900}><Nav.Link className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}> Services </Nav.Link></Link>
                    <Link to="gallery" spy={true} smooth={true} offset={-115} duration={900}><Nav.Link className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}> Gallery </Nav.Link></Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://wa.me/+6282234174425?text=Halo%20MavaldaCCTV%20Area%20Kalimantan%20Tolong%20Pricelist%20Paket%20CCTV%20Ya" target="_blank"><img src={navIcon1} alt="" /></a>
                        <a href="https://web.facebook.com/profile.php?id=100093336092191" target="_blank"><img src={navIcon2} alt="" /></a>
                        <a href="https://www.instagram.com/mavalda.soekarindo.group/" target="_blank"><img src={navIcon3} alt="" /></a>
                    </div>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={900}><button className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Hubungi Kami</button></Link>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>

 )
}