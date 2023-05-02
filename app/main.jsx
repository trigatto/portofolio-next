import "./main.css";
import Image from "next/image";
import portfolioPic from "../public/resume-display-img.png";
import profilePic from "../public/profile.jpeg";
import passwordProject from "../public/password.jpg"
import quizProject from "../public/quiz.jpg";

export default function Main() {
  return (
    <main role="main">
      <section className="work" id="work">
        <div className="row">
          <h2>My Work</h2>
          <div className="work__boxes">
            <div className="work__box">
              <div className="work__text">
                <h3>Portfolio and Resume</h3>
                <p>
                  This page you're on right now and the resume that goes with
                  it.
                </p>
                <ul className="work__list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Responsive Design</li>
                </ul>

                <div className="work__links">
                  <a href="./resume" target="_blank" className="link__text">
                    Visit Resume <span>&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/trigatto/portfolio"
                    title="View Source Code"
                    target="_blank"
                  >
                    <Image
                      src="/github.svg"
                      height={100}
                      width={100}
                      className="work__code"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
              <div className="work__image-box">
                <Image src={portfolioPic} className="work__image" alt="Project 1" />
              </div>
            </div>

            <div className="work__box">
              <div className="work__text">
                <h3>Password Generator</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  eius.
                </p>
                <ul className="work__list">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node</li>
                  <li>MongoDB</li>
                </ul>

                <div className="work__links">
                  <a href="https://github.com/trigatto" className="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  <a href="#">
                    <Image
                      src="/github.svg"
                      height={100}
                      width={100}
                      className="work__code"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
              <div className="work__image-box">
                <Image
                  src={passwordProject}
                  className="work__image"
                  alt="Project 1"
                />
              </div>
            </div>

            <div className="work__box">
              <div className="work__text">
                <h3>Quizzical App</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  eius.
                </p>
                <ul className="work__list">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node</li>
                  <li>MongoDB</li>
                </ul>

                <div className="work__links">
                  <a href="#" className="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  <a href="https://github.com/trigatto">
                    <Image
                      src="/github.svg"
                      height={100}
                      width={100}
                      className="work__code"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
              <div className="work__image-box">
                <Image
                  src={quizProject}
                  width={600}
                  height={300}
                  className="work__image"
                  alt="Project 3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="client" id="clients">
        <div className="row">
          <h2>Clients</h2>
          <div className="client__logos">
            <img
              src="./images/ronjones.png"
              className="client__logo"
              alt="Company 2"
            />
            <img
              src="./images/goldengrid.png"
              className="client__logo"
              alt="Company 3"
            />
            <img
              src="./images/bullseye.png"
              className="client__logo"
              alt="Company 1"
            />
            <img
              src="./images/mighty-furnitures.png"
              className="client__logo"
              alt="Company 1"
            />
            <img
              src="./images/fastlane.png"
              className="client__logo"
              alt="Company 3"
            />
            <img
              src="./images/chippy.png"
              className="client__logo"
              alt="Company 1"
            />
          </div>
        </div>
      </section> */}
      <section className="about" id="about">
        <div className="row">
          <h2>About Me</h2>
          <div className="about__content">
            <div className="about__text">
              <p>
                As a recent graduate in front-end development, I am excited to
                bring my diverse skill set to the world of programming. With
                over 7 years of experience in sales and a background in energy
                engineering, I bring a unique perspective to problem-solving in
                the world of technology.
              </p>
              <p>
                As an engineer, I am trained to approach challenges methodically
                and logically. My experience in energy engineering has taught me
                to analyze complex systems, identify inefficiencies, and develop
                practical solutions to improve performance. I believe these
                skills translate directly to programming, where I can apply my
                analytical mindset to create clean and efficient code.
              </p>
              <p>
                In addition to my technical skills, my sales experience has
                given me excellent communication and collaboration skills. In
                sales, I learned how to listen to customers' needs, identify
                pain points, and offer effective solutions. I believe these
                skills are essential in programming, where collaboration and
                effective communication are key to building successful projects.
              </p>
              <p>
                I am proficient in HTML, CSS, and JavaScript, with experience
                working with React, React Native, and Next.js. I am eager to
                continue learning and expanding my skill set while creating
                innovative and user-friendly designs.
              </p>
              <a href="./resume" className="btn">
                My Resume
              </a>
            </div>

            <div className="about__photo-container">
              <Image className="about__photo" src={profilePic} alt="Thiago Rigatto with his arms crossed." />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
