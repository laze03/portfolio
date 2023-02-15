import { useState } from "react";
import "../css/main.css";
import H2 from "./H2";

export default function Experience() {
  function Detail(props) {
    const List = props.list;
    const listItems = List.map((item) => <li>{item}</li>);
    return (
      <div
        className={"detail " + props.className}
        id={props.id + "D"}
        style={{
          display: [prev == props.id ? "contents" : "none"],
        }}
      >
        <h4>
          {props.class + " Student "} <span>{"@ " + props.place}</span>{" "}
        </h4>
        <h6>{props.date}</h6>
        <ul>{listItems}</ul>
      </div>
    );
  }

  const [prev, setPrev] = useState(1);

  function clickHandler(e) {
    let currenButton = e.target;
    let id = currenButton.id;
    let prevButton = document.getElementById(prev);
    prevButton.classList.toggle("active");
    currenButton.classList.toggle("active");
    setPrev(id);
  }

  return (
    <div className="experience" id="Experience">
      <H2 before="02. " text="Where I've Studied" />
      <div className="experiences">
        <div className="name">
          <button id="1" className="active" onClick={clickHandler}>
            ENSIAS
          </button>
          <button id="2" onClick={clickHandler}>
            Al Khansaa
          </button>
          <button id="3" onClick={clickHandler}>
            Les Palmiers
          </button>
        </div>
        <div className="details">
          <Detail
            class="1- College"
            id="1"
            place="ENSIAS"
            date="September 2022 - Present"
            list={[
              "learning data structures & algorithms",
              "Preparing Certification in Front-End and Back-End Development",
            ]}
          />
          <Detail
            class="2- College"
            id="2"
            place="ENSIAS"
            date="September 2022 - Present"
            list={[
              "learning data structures & algorithms",
              "Preparing Certification in Front-End and Back-End Development",
            ]}
          />
          <Detail
            class="3- College"
            id="3"
            place="ENSIAS"
            date="September 2022 - Present"
            list={[
              "learning data structures & algorithms",
              "Preparing Certification in Front-End and Back-End Development",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
