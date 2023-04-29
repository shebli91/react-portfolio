import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="content">
        <ProjectCard
          imageSrc="bank-app.png"
          category="A small Bank App | user: ms / pass: 1111"
          title="Bank App"
          projectLink="https://shebli91.github.io/Bank-app/"
        />
        <ProjectCard
          imageSrc="todo-app.png"
          category="ToDo List application"
          title="ToDo List App"
          projectLink="https://shebli91.github.io/todo-list-app/"
        />
        <ProjectCard
          imageSrc="blackjack-game.png"
          category="Simple JavaScript game"
          title="BlackJack Game"
          projectLink="https://shebli91.github.io/Blackjack-Game/"
        />
        <ProjectCard
          imageSrc="Guess-My-Number-game.png"
          category="Simple JavaScript game"
          title="Guess My Number Game"
          projectLink="https://shebli91.github.io/Guess-My-Number/"
        />
        <ProjectCard
          imageSrc="passenger-counter-app.png"
          category="A great tool for counting in metro subway"
          title="Passenger Counter"
          projectLink="https://shebli91.github.io/passenger-counter/"
        />
        <ProjectCard
          imageSrc="pig-game.png"
          category="Simple JavaScript game"
          title="Pig Game"
          projectLink="https://shebli91.github.io/Pig-Game/"
        />
        <ProjectCard
          imageSrc="tracker-ext.png"
          category="Useful tool for saving chrome tabs"
          title="Lead Tracker - Chrome"
          projectLink="https://shebli91.github.io/Chrome-extension-leads-tracker/"
        />
      </div>
    </section>
  );
};

export default Projects;
