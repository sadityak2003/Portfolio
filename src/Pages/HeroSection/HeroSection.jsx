import './HeroSection.css'

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey there, I'm </p>
          <h1 className="hero--title">
           Aditya Kumar Singh
          </h1>
          <p className="hero--section-description">
            I create modern, responsive, and user-friendly web experiences
            <br /> with a focus on performance and accessibility.
            <br /> Crafting digital solutions
            that blend creativity with technical excellence.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
