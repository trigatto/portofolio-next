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
              <h2 className="logotype_occupation">Sales Representative</h2>
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
              {/* <p>
                As an engineer, my passion for technology drives my work, while
                my experience in sales has taught me to understand and
                appreciate human behavior. I am a dedicated and driven
                individual, committed to learning and growing both personally
                and professionally. With a natural curiosity and hunger for
                knowledge, I am always seeking out new challenges and
                opportunities to expand my skills.
              </p> */}
              <p>
                As a sales professional with a strong engineering background, I
                bring a unique blend of technical expertise and understanding of
                human behavior to my work. My passion for technology fuels my
                drive to deliver exceptional results in sales. I am dedicated,
                driven, and committed to continuous personal and professional
                growth. With a natural curiosity and a relentless pursuit of
                knowledge, I thrive on seeking new challenges and seizing
                opportunities to enhance my sales skills. I possess a deep
                understanding of client needs, effective communication
                techniques, and a proven track record of driving revenue growth.
                By combining my technical acumen and sales prowess, I am
                equipped to excel in the dynamic world of sales at BairesDev.
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
              {/* <p>
                As a skilled front end developer, I understand the importance of
                soft skills in creating a positive work environment and
                delivering top-quality projects. I bring with me a range of
                valuable soft skills.
              </p> */}
              <p>
                Throughout my career, I have honed a comprehensive set of soft
                skills that are crucial for success in sales. My experiences
                living overseas have significantly enhanced my communication
                skills, enabling me to effectively collaborate with
                cross-functional teams and understand the unique needs of
                clients and end-users. Moreover, my background in engineering
                has cultivated my creativity, adaptability, and problem-solving
                abilities, empowering me to tackle complex challenges with
                innovative solutions. Over the course of seven years in sales, I
                have demonstrated strong leadership skills by successfully
                leading sales teams through effective communication and
                collaboration. As a result, I have consistently delivered
                outstanding results on every project I have undertaken. My key
                soft skills for excelling in a sales role include:
              </p>
              <div className="philosophy_content">
                {/* <p>
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
                </ul> */}

                <ul>
                  <li>
                    <strong>Persuasive communication:</strong> Expertise in
                    articulating value propositions and building strong
                    relationships with clients.
                  </li>
                  <li>
                    <strong>Problem-solving:</strong> A strategic approach to
                    identifying and addressing client challenges, ensuring
                    optimal solutions are delivered.
                  </li>
                  <li>
                    <strong>Critical thinking:</strong> The ability to analyze
                    market trends, customer needs, and competitive landscapes to
                    drive sales strategies.
                  </li>
                  <li>
                    <strong>Adaptability:</strong> Rapidly adapting to evolving
                    market dynamics and client requirements, ensuring continued
                    sales success.
                  </li>
                  <li>
                    <strong>Creative thinking:</strong> Leveraging innovative
                    approaches to overcome obstacles and generate unique selling
                    propositions.
                  </li>
                  <li>
                    <strong>Proactivity:</strong> Taking initiative to identify
                    new sales opportunities, cultivate leads, and drive revenue
                    growth.
                  </li>
                  <li>
                    <strong>Leadership:</strong> Proven ability to inspire and
                    motivate sales teams, fostering a collaborative and
                    high-performing environment.
                  </li>
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
              {/* <p>
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
              </ul> */}
              <p>
                Proficient in utilizing technology to enhance sales processes
                and drive revenue growth.
              </p>
              <ul>
                <li>
                  <strong>HTML:</strong> Knowledge of HTML for creating visually
                  appealing and user-friendly content.
                </li>
                <li>
                  <strong>JavaScript:</strong> Familiarity with JavaScript to
                  enhance interactivity and user experience.
                </li>
                <li>
                  React: Understanding of React framework to develop dynamic and
                  responsive web applications.
                </li>
                <li>
                  <strong>Next.js:</strong> Experience with Next.js for building
                  scalable and performant web solutions.
                </li>
                <li>
                  <strong>Next.js:</strong> Experience with Next.js for building
                  scalable and performant web solutions.
                </li>
                <li>
                  <strong>Responsive Design:</strong> Ability to develop
                  websites that seamlessly adapt to various screen sizes and
                  devices.
                </li>
                <li>
                  <strong>Accessibility:</strong> Knowledge of accessibility
                  standards to ensure inclusivity and usability for all users.
                </li>
              </ul>
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
                  Main Activities: Defined, articulated, and implemented the
                  organization's strategy for selling the B2B product.
                  Negotiated contracts with prospective clients. Prepared weekly
                  and monthly reports. Delivered sales presentations to
                  prospective clients. Managed accounts. Led the development and
                  structuring of the B2B department. Oversaw pre-sales, sales,
                  customer success, and platform improvement discussions with
                  multiple departments. Built and led a team to handle the growing demands
                  of the B2B segment. Achieved a renewable revenue of R$400k in 2020 while working by myself and
                   1 million R$ in 2022 with a team of four, contributing to the company's overall revenue
                  growth to R$12M in a single year.
                </p>
              </div>
              <h3>2018/1 - 2019/1 - Me Salva! Cursos e Consultorias Ltda</h3>
              <h4 className="purple">Role: Sales Analyst</h4>
              <p>
                Main Activities: Consistently recognized as the salesperson of
                the week and month. Conducted B2C sales via intercom and
                telephone. Assisted with the ambassador program and the
                organization of the scholarship program. Participated in
                marketing events.
              </p>
              <h3>2017/2 - Me Salva! Cursos e Consultorias Ltda</h3>
              <h4 className="purple">Role: Intern</h4>
              <p>
                Main Activities: Excelled as the salesperson of the week and
                month during the internship. Demonstrated exceptional
                performance in B2C sales via intercom and telephone. Provided
                valuable support to the ambassador program. Assisted in the
                organization of the scholarship program. Actively participated
                in marketing events.
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