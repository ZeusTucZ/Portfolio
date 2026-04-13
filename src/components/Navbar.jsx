import "./Navbar.css";
import { Link, NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/aboutme", label: "Sobre mí" },
  { to: "/projects", label: "Proyectos" },
  { to: "/contactme", label: "Contacto" },
];

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-mark" to="/">
          ZT
        </Link>

        <nav className="site-nav" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a className="header-cta" href="#projects">
          Works
        </a>
      </div>
    </header>
  );
};

export default Navbar;
