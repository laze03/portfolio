import "../css/main.css";
import H2 from "./H2";
import me from "../media/me smiling.png";

function Ul(i1, i2, i3) {
  return (
    <ul>
      <li>{i1}</li>
      <li>{i2}</li>
      <li>{i3}</li>
    </ul>
  );
}

export default function About() {
  return (
    <section className="about" id="About">
      <H2 before="01." text="About Me" />
      <div className="content">
        <div className="text-section">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis
            purus ut ipsum aliquet, ac auctor turpis imperdiet. Pellentesque
            mattis, lectus in maximus fermentum, felis nibh ornare augue, eget
            vestibulum leo metus at neque. Fusce id turpis fermentum, vestibulum
            ipsum nec, eleifend erat. Donec a lacus eros.
            <br></br>
            <br></br>
            Proin eu nisl elit. Ut convallis semper diam. Sed non porta metus.
            Vestibulum scelerisque in massa nec egestas. Pellentesque non
            euismod magna, a fringilla sem. Morbi vehicula augue ac dui dapibus
            congue. Aenean ipsum lorem, molestie in urna vel, viverra sagittis
            ex. Nulla sagittis est nec lorem fringilla vestibulum. Duis vitae
            leo ante. Nunc convallis tristique augue a convallis.
            <br></br>
            <br></br>
            Ut nunc mauris, dignissim elementum ex sit amet, sodales rhoncus
            arcu. In hac habitasse platea dictumst. Maecenas eget vulputate
            nunc, eget commodo lacus. Suspendisse ultrices ligula enim, vitae
            luctus neque maximus id. Vivamus venenatis quam et felis tempor
            imperdiet. Aliquam et erat aliquam, efficitur ligula eget, gravida
            mi."
          </p>
          <div className="ul">
            {Ul("HTML", "CSS", "SASS")}
            {Ul("JavaScript (ES6+)", "React", "Figma")}
          </div>
        </div>
        <div className="img-section">
          <div className="img">
            <img src={me} alt="me"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
