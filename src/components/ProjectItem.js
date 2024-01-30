import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techCard = technologies.map((techItem) => {
                    return <span key={techItem} >{techItem}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */
        techCard
        }
      </div>
    </div>
  );
}

export default ProjectItem;
