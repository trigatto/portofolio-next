import "./header.css"

export default function Header() {
  return (
    <header className="header" role="banner" id="top">
      <div className="row">
        <nav className="nav" role="navigation">
          <ul className="nav__items">
            <li className="nav__item">
              <a href="#work" className="nav__link">
                Work
              </a>
            </li>
            {/* <li className="nav__item"><a href="#clients" className="nav__link">Clients</a></li> */}
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="./resume" className="nav__link">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__text-box row">
        <div className="header__text">
          <h1 className="heading-primary">
            <span>Thiago Rigatto</span>
          </h1>
          <p>A Front-End Developer based in Porto Alegre, BR</p>
          <a
            href="https://wa.me/+5551981150316"
            target="_blank"
            className="btn btn--green"
          >
            Get in touch
            <span className="entypo-chat"></span>
          </a>
        </div>
      </div>
    </header>
  );
}
