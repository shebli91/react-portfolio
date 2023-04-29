const SoftwareCard = ({ iconClass, title, description }) => {
  return (
    <div className="card">
      <div className="icon">
        <i className={iconClass}></i>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SoftwareCard;
