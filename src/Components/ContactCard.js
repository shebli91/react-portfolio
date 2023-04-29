const ContactCard = ({ iconClass, title, info }) => {
  return (
    <div className="card">
      <div className="icon">
        <i className={iconClass}></i>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ContactCard;
