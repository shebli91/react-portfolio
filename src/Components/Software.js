import SoftwareCard from "./SoftwareCard";

const Software = () => {
  return (
    <section className="cards" id="software">
      <h2 className="title">Software</h2>
      <div className="content">
        <SoftwareCard
          iconClass="fa-brands fa-aws"
          title="Amazon Web Services"
          description="Amazon Web Services is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster."
        />
        <SoftwareCard
          iconClass="fa-brands fa-js"
          title="JavaScript"
          description="JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities."
        />
        <SoftwareCard
          iconClass="fa-brands fa-react"
          title="React.js"
          description="React.js is a lightweight JavaScript framework used for building user interfaces, which can also be applied for creating reusable User Interface components. It is declarative, efficient, and flexible JavaScript library that helps develop fast and user-friendly web applications."
        />
      </div>
    </section>
  );
};

export default Software;
