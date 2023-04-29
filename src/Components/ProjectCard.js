const ProjectCard = ({ imageSrc, category, title, projectLink }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={require(`../Images/${imageSrc}`)} height="200" alt="" />
      </div>
      <div className="project-info">
        <p className="project-category">{category}</p>
        <strong className="project-title">
          <span>{title}</span>
          <a href={projectLink} target="_blank" className="more-details">
            project page
          </a>
        </strong>
      </div>
    </div>
  );
};

export default ProjectCard;
