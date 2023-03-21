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
            My name is Lazrak Ahmed and I am a freshman software engineer
            student who is passionate about all things related to software
            engineering.
            <br />
            <br />
            As a freshman software engineering student, I am just getting
            started on my journey, but I am excited about the opportunities and
            challenges that lie ahead. I have already gained a solid foundation
            in programming languages, data structures, algorithms, and software
            development methodologies, I also got my certificate for the
            Front-End developer made by Meta.
            <br />
            <br />
            Outside of software engineering, I am an avid reader and enjoy
            learning about different cultures and histories. I also enjoy
            playing basketball and spending time outdoors. But software
            engineering is my true passion, and I am excited to continue
            developing my skills and knowledge in this field.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
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
