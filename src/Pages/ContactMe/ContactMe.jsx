import { Mail, Phone, LocationEditIcon, GithubIcon, LinkedinIcon, GitBranchIcon } from "lucide-react";
import { useState } from "react";
import "./ContactMe.css"

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--header">
        <p className="sub--title">Get In Touch</p>
        <h2 className="contact-me-title">Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      
      <div className="contact--container">
        {/* Form Box */}
        <div className="contact--box">
          <div className="contact--form--container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Phone Number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
            <label htmlFor="message" className="contact--label">
              <span className="text-md">Message</span>
              <textarea
                className="contact--input text-md"
                id="message"
                rows="8"
                placeholder="Type your message..."
              />
            </label>
            
            <div>
              <button className="btn btn-primary contact--form--btn">Submit</button>
            </div>
          </div>
        </div>
        
        {/* Personal Details Box */}
        <div className="contact--box contact--details">
          <div className="details--header">
            <h3 className="connect-title">Connect</h3>
            <p className="text-md">Feel free to reach out to me directly through any of these channels.</p>
          </div>
          
          <div className="details--info-container">
            <div className="details--info">
              <h3 className="connect-title">Connect with me</h3>
              <div className="details--item">
                <Mail className="details--icon" size={20} />
                <span>sadityak2003@gmail.com</span>
              </div>
              <div className="details--item">
                <Phone className="details--icon" size={20} />
                <span>+91 9910631411</span>
              </div>
               <div className="details--item">
                <LocationEditIcon className="details--icon" size={20} />
                <span>New Delhi, India</span>
              </div>
            </div>
            
            <div className="details--divider"></div>

            <h3 className="connect-title">Find me on</h3>
            <div className="details--social">
              <div className="details--item">
                <GithubIcon className="details--icon" size={20} />
                <a href="https://www.github.com/sadityak2003">Github</a>
              </div>
              <div className="details--item">
                <LinkedinIcon className="details--icon" size={20} />
                <a href="https://www.linkedin.com/in/aditya-a2003ks/">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="details--project">
            <p className="text-md">Want to discuss a project? Let's connect and bring your ideas to life!</p>
          </div>
        </div>
      </div>
    </section>
  );
}