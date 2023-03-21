import "../css/main.css";
import H2 from "./H2";
import Nexter from "../media/nexter.png";
import RPS from "../media/RPS.png";
import Hoobank from "../media/Hoobank.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Work() {
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
          {nexter()}
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
        className="reversed nexter"
        title="Nexter Project"
        list={["HTML 5", "CSS 3", "SCSS", "css grid", "flexbox"]}
        github="https://github.com/laze03/Nexter"
        link="https://laze03.github.io/Nexter/"
        img={Nexter}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Project
        className="direct RPS"
        title="ROck-Paper-Scissors Game"
        list={["JavaScript", "React.js", "SCSS", "css grid"]}
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
        className="reversed Hoobank"
        title="Hoobank Project"
        list={["JavaScript", "React.js", "TailwindCSS", "flexbox"]}
        github="https://github.com/laze03/bank-site"
        link="https://laze03.github.io/bank-site/"
        img={Hoobank}
      />
    </div>
  );
}
