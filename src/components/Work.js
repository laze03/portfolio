import "../css/main.css";
import H2 from "./H2";
import img from "../media/nexter.png";
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
        className="reversed"
        title="Nexter Project"
        list={["HTML 5", "CSS 3", "SCSS", "css grid", "flexbox"]}
        github="https://github.com/laze03/Nexter"
        link="https://laze03.github.io/Nexter/"
        img={img}
      />
    </div>
  );
}
