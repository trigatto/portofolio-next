import "./footer.css";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer role="contentinfo" className="footer">
        <div className="row">
          <ul className="footer__social-links">
            <li className="footer__social-link-item">
              <a href="https://twitter.com/" title="Link to Twitter Profile">
                <img
                  src="twitter.svg"
                  className="footer__social-image"
                  alt="Twitter"
                />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a
                href="https://github.com/trigatto/"
                title="Link to Github Profile"
              >
                <img
                  src="github.svg"
                  className="footer__social-image"
                  alt="Github"
                />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://codepen.io/" title="Link to Codepen Profile">
                <img
                  src="codepen.svg"
                  className="footer__social-image"
                  alt="Codepen"
                />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://www.linkedin.com/in/trigatto/">
                <img
                  src="linkedin.svg"
                  title="Link to Linkedin Profile"
                  className="footer__social-image"
                  alt="Linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <a href="#top" className="back-to-top" title="Back to Top">
        <Image
          src="arrow-up.svg"
          width={100}
          height={100}
          alt="Back to Top"
          className="back-to-top__image"
        />
      </a>
    </>
  );
}
