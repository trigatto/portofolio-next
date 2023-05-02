import './page.css'
import Image from "next/image";
import profilePic from "/public/profile.jpeg"

export default function Resume(){
    return (
      <div>
        <div id="main_container">
          <div id="header">
            <div className="header_logotype_container">
              <h1 className="logotype_name">
                <span className="purple">Thiago </span>Rigatto
              </h1>
              <h2 className="logotype_occupation">Frontend Web Developer</h2>
            </div>

            <div className="header_menu_container">
              <ul className="download_print_buttons horizontal_list">
                <li>
                  <a className="btn--green" href="./">
                    <span className="icon entypo-home"></span>Home
                  </a>
                </li>
                <li>
                  <a href="trigatto-resume.pdf" download>
                    <span className="icon entypo-download"></span>Download CV
                  </a>
                </li>
              </ul>
              <div className="clear"></div>
              <ul className="header_menu horizontal_list">
                <li>
                  <a className="no_border" href="#soft-skills">
                    Soft Skills
                  </a>
                </li>
                <li>
                  <a href="#tech-skills">Tech Skills</a>
                </li>
                <li>
                  <a href="#work">Work Experience</a>
                </li>
                <li>
                  <a href="#interests">Hobbies & Interests</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div id="left_col">
            <div className="profile_frame">
              <div className="profile_picture">
                <Image
                  src={profilePic}
                  className="img-profile"
                  alt="profile picture"
                />
              </div>
            </div>
            <div className="hello_content">
              <h2>Hey!</h2>
              <p>
                As an engineer, my passion for technology drives my work, while
                my experience in sales has taught me to understand and
                appreciate human behavior. I am a dedicated and driven
                individual, committed to learning and growing both personally
                and professionally. With a natural curiosity and hunger for
                knowledge, I am always seeking out new challenges and
                opportunities to expand my skills.
              </p>
            </div>
            <div id="contact" className="contact_details_content">
              <h2>Contact details</h2>
              <p className="purple">Phone:</p>
              <p>+55 51 981150316</p>
              <p className="purple">Email:</p>
              <p>trigatto92@gmail.com</p>
              <p className="purple">Residence:</p>
              <p>Porto Alegre, Brazil</p>
            </div>
            <a href="mailto:trigatto92@gmail.com" className="btn">
              Send me a message!
            </a>
            <div className="get_social_content">
              <h2>Get social</h2>
              <ul className="social_icons horizontal_list">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/thiago.rigatto/"
                  >
                    <span className="entypo-facebook-circled"></span>
                    <span className="invisible">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://twitter.com/RigattoThiago"
                  >
                    <span className="entypo-twitter-circled"></span>
                    <span className="invisible">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/trigatto/"
                  >
                    <span className="entypo-linkedin-circled"></span>
                    <span className="invisible">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="content_container">
            <div id="soft-skills" className="block">
              <h2>Soft Skills</h2>
              <p>
                As a skilled front end developer, I understand the importance of
                soft skills in creating a positive work environment and
                delivering top-quality projects. I bring with me a range of
                valuable soft skills.
              </p>
              <div className="philosophy_content">
                <p>
                  My experiences living overseas have perfected my communication
                  skills, this is vital for collaborating with cross-functional
                  teams and understanding the needs of clients and end-users.
                  Additionally, my background in engineering has honed my
                  creativity, adaptability, and problem-solving skills, enabling
                  me to tackle complex challenges with innovative solutions.
                  Having worked for seven years in sales, I have also developed
                  strong leadership skills, having led sales teams to success
                  through effective communication and collaboration. As a front
                  end developer, I am confident in my ability to deliver
                  outstanding results on every project.
                </p>
                <ul>
                  <li>Communication</li>
                  <li>Problem-solving</li>
                  <li>Logical thinking</li>
                  <li>Adaptability</li>
                  <li>Creativity</li>
                  <li>Proactivity</li>
                  <li>Leadership</li>
                </ul>
                <div className="clear"></div>
              </div>
            </div>
            <div className="horizontal_line">
              <div className="line_left"></div>
              <div className="left_circle"></div>
              <div className="central_circle"></div>
              <div className="right_circle"></div>
              <div className="line_right"></div>
            </div>

            <div id="tech-skills" className="block">
              <h2>Tech Skills</h2>
              <p>
                Here are some of the technical skills and tools that I am
                proficient in.
              </p>
              <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next</li>
                <li>CSS</li>
                <li>Responsive Design</li>
                <li>Acessibility</li>
              </ul>
              {/* <h1>Profile</h1>
              <blockquote className="profile_quote">
          <p>
            "There is no end to education. It is not that you read a book, pass
            an examination, and finish with education. The whole of life, from
            the moment you are born to the moment you die, is a process of
            learning."
          </p>
          <p>Jiddu Krishnamurti.</p>
          <span className="entypo-quote"></span>
        </blockquote>  */}
            </div>
            <div className="horizontal_line">
              <div className="line_left"></div>
              <div className="left_circle"></div>
              <div className="central_circle"></div>
              <div className="right_circle"></div>
              <div className="line_right"></div>
            </div>
            <div id="work" className="block">
              <h2>Work Experience</h2>
              <div className="work-exp">
                <h3>2019/2 - 2022/2 - Me Salva! Cursos e Consultorias Ltda</h3>
                <h4 className="purple">Role: Head of B2B Sales</h4>
                <p>
                  Main Activities: Define, articulate and implement the
                  organization's strategy for selling the B2B product.
                  Negotiating contracts with prospective clients. Preparing
                  weekly and monthly reports. Giving sales presentations to
                  prospective clients. Managing accounts. Recruiting and hiring.
                  Team management.
                </p>
              </div>
              <h3>2018/1 - 2019/1 - Me Salva! Cursos e Consultorias Ltda</h3>
              <h4 className="purple">Role: Sales Analyst</h4>
              <p>
                Main Activities: B2C sales via intercom. Assistance with the
                ambassador program. Organization of the scholarship program. B2C
                sales via telephone. Participation in Marketing events.
              </p>
              <h3>2017/2 - Me Salva! Cursos e Consultorias Ltda</h3>
              <h4 className="purple">Role: Intern</h4>
              <p>
                Main Activities: B2C sales via intercom. Assistance with the
                ambassador program. Organization of the scholarship program. B2C
                sales via telephone. Participation in Marketing events.
              </p>
              <h3>
                2017/2 – Representative of Me Salva! at the Federal University
                of Rio Grande do Sul
              </h3>
              <h4 className="purple">Role: Ambassador</h4>
              <p>
                Main Activities: Promote marketing actions within the University
                and bring Engineering students closer to the Me Salva concept.
                Disseminate distance education within the University. Organize
                events within the University.
              </p>
              <h3>
                2017/1 – Academic Athletic Association of the School of
                Engineering of the Federal University of Rio Grande do Sul
              </h3>
              <h4 className="purple">Role: Chief Financial Officer</h4>
              <p>
                Main Activities: Financial planning, based on data from previous
                years, order products, control financial provision, help with
                package and ticket control, perform bus charter, organize
                events.
              </p>
              <h3>
                2016/2 – Academic Athletic Association of the School of
                Engineering of the Federal University of Rio Grande do Sul
              </h3>
              <h4 className="purple">Role: Financial Assistant</h4>
              <p>
                Main Activities: Order products, help with the provision of
                finance, help with package and ticket control, charter buses.
              </p>
              <h3>
                2015-2016 – Advisory for International and Interinstitutional
                Affairs
              </h3>
              <h4 className="purple">Role: Intern</h4>
              <p>
                Main Activities: Briefing on universities, professors,
                publications, research. Support the monitoring of the agreement
                system. Organize institutional materials sent by partner
                universities. Support visits and provide service to the public,
                in person and by phone. Assist in international surveys.
              </p>
              <h3>
                2015 – Advisory for International and Interinstitutional Affairs
              </h3>
              <h4 className="purple">
                Role: Scientific Initiation Scholarship
              </h4>
              <p>
                Main Activities: Organize and tabulate data referring to
                international rankings of universities, assist in coordinating
                projects and new agreements.
              </p>
            </div>
            <div className="horizontal_line">
              <div className="line_left"></div>
              <div className="left_circle"></div>
              <div className="central_circle"></div>
              <div className="right_circle"></div>
              <div className="line_right"></div>
            </div>
            <div id="interests" className="last block">
              <h2>Interests & Hobbies</h2>
              <p>
                I'm passionate about technology, sports and human behavior, both
                determine almost all my interests and hobbies:
              </p>
              <ul>
                <li>Hanging out with friends and family</li>
                <li>Traveling</li>
                <li>Reading</li>
                <li>Having new experiences</li>
                <li>Football, Swimming and Biking</li>
                <li>Web Developing</li>
                <li>Computer Gaming</li>
                <li>Manga and Anime</li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
          <div id="footer">
            <p className="footer_name">Thiago Rigatto CV 2023</p>
          </div>
        </div>
      </div>
    );
}