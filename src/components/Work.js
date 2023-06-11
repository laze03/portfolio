import "../css/main.css";
import H2 from "./H2";
import Nexter from "../media/nexter.png";
import RPS from "../media/RPS.png";
import Hoobank from "../media/Hoobank.png";
import flvariant from "../media/flvariant.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Work() {
  function flVariant() {
    return (
      <p>
        A web application built with <a>React</a> and <a>Express.js</a> that
        combines biology and computer science to perform comprehensive data
        analysis using <a>Recharts</a>.
      </p>
    );
  }

  function hoobank() {
    return (
      <p>
        A static website for a bank corporate built using
        <a> reusable components </a>
        in <a>React</a>.
      </p>
    );
  }

  function rps() {
    return (
      <p>
        An interactive classic game made with the help of
        <a> React useContext Hook </a> and <a> reusable components</a>.
      </p>
    );
  }

  function nexter() {
    return (
      <p>
        A simple website for a real estate agency built using <a>css grid </a>
        and <a>flexbox</a>.
      </p>
    );
  }

  function Project(props) {
    const List = props.list;
    const listItems = List.map((item) => (
      <li>
        <h6>{item}</h6>
      </li>
    ));
    return (
      <div className={"project " + props.className}>
        <div className="content">
          <h6>Featured Project</h6>
          <h4>{props.title} </h4>
          {props.function}
          <ul>{listItems}</ul>
          <div className="links">
            <a href={props.github} className="logo">
              <FiGithub />
            </a>
            <a href={props.link} className="logo">
              <FiExternalLink />
            </a>
          </div>
        </div>
        <div className="img-section">
          <div className="img">
            <img src={props.img}></img>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="work" id="Work">
      <H2 before="03. " text="Some Things I've Built" />
      <Project
        className="direct RPS"
        title="FL Variant Web App"
        function={flVariant()}
        list={[
          "SCSS",
          "JavaScript",
          "React.js",
          "Recharts",
          "Node.js",
          "Express.js",
          "REST API",
        ]}
        github="https://github.com/laze03/FL-Variant"
        link="https://laze03.github.io/FL-Variant/"
        img={flvariant}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Project
        className="reversed RPS"
        title="Rock-Paper-Scissors Game"
        function={rps()}
        list={[
          "JavaScript",
          "React.js",
          "React context hook",
          "SCSS",
          "flexbox",
        ]}
        github="https://github.com/laze03/Rock-Paper-Scissors"
        link="https://laze03.github.io/Rock-Paper-Scissors/"
        img={RPS}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Project
        className="direct Hoobank"
        title="Hoobank Project"
        function={hoobank()}
        list={["JavaScript", "React.js", "TailwindCSS", "flexbox"]}
        github="https://github.com/laze03/bank-site"
        link="https://laze03.github.io/bank-site/"
        img={Hoobank}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Project
        className="reversed nexter"
        title="Nexter Project"
        function={nexter()}
        list={["HTML 5", "CSS 3", "SCSS", "css grid", "flexbox"]}
        github="https://github.com/laze03/Nexter"
        link="https://laze03.github.io/Nexter/"
        img={Nexter}
      />
    </div>
  );
}
