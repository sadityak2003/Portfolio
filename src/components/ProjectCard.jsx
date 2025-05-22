import React from "react";

const ProjectCard = ({ title, description, src, link }) => {
  return (
    <div className="portfolio--section--card">
      <div className="portfolio--section--img">
        <img src={src} alt={title} />
      </div>
      <div className="portfolio--section--card--content">
        <div>
          <h3 className="portfolio--section--title">{title}</h3>
          <p className="text-md">{description}</p>
        </div>
        <p className="text-sm portfolio--link">
          <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none">
            <path
              d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
              stroke="currentColor"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;