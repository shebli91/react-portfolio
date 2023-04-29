import Card from "./ContactCard";

const Contact = () => {
  return (
    <section className="cards Contact" id="contact">
      <h2 className="title">Contact me at ...</h2>
      <div className="content">
        <Card
          iconClass="fa-solid fa-phone"
          title="Mobile"
          info="+972 59-913-3134"
        />
        <Card
          iconClass="fa-solid fa-envelope"
          title="Email"
          info="mhamadshebli@gmail.com"
        />
      </div>
    </section>
  );
};

export default Contact;
