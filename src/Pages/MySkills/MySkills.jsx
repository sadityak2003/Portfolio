import data from "../../data/index.json";
import "./MySkills.css";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
        <p className="section--title">My Expertise</p>
        <h2 className="skills--heading">Technical Skills</h2>
      
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <span className="skills--section--title">
                <img src={item.src} width={35} height={35} alt="" />
                <h3>{item.title}</h3>
              </span>
              <p className="skills--section--description">{item.item1}</p>
              <p className="skills--section--description">{item.item2}</p>
              <p className="skills--section--description">{item.item3 }</p>
              <p className="skills--section--description">{item.item4 }</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
