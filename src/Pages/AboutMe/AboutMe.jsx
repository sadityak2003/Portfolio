import "./AboutMe.css";
import { FaSchool, FaCertificate } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--left">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="about--section--heading">About Me</h1>
          <p className="about--section-description">
            I'm a passionate Software Developer with a focus on creating modern,
            user-friendly web applications. Currently pursuing my Bachelor's
            degree in Computer Science, I combine academic knowledge with
            practical experience in full-stack development.
          </p>
          <p className="about--section-description">
            My approach to development emphasizes clean code, intuitive user
            experiences, and performance optimization. I enjoy tackling complex
            problems and continuously expanding my technical skills through
            hands-on projects and learning new technologies.
          </p>
        </div>
      </div>

      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="about--section--heading">Education</h1>
          <p className="about--section-education">
            <div className="college">
            <FaSchool size={18} />
            Bharati Vidyapeeth College of Engineering | Nov 2022 - July 2026
            </div>
            <div className="btech">
            Bacheolar of Technology in Computer Science
            <br />
            CGPA : 9.15
            </div>
          </p>
        </div>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="about--section--heading">Certification's</h1>
          <p className="about--section-education">
            <div className="college">
            <FaCertificate size={18} />
            Udemy : Flutter Development | Jan 2024 - March 2024
            </div>
            <div className="btech">
            Best Online Flutter Development Course
            <br />
            Completed
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
