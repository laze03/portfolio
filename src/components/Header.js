import "../css/main.css";
import Button from "./Button";

export default function Header() {
  return (
    <header className="header">
      <h5>Hi, my name is</h5>
      <h1>Lazrak Ahmed</h1>
      <h1 className="h1color">I build web applications</h1>
      <p>
        I'm a software engineer student at
        <a href="http://ensias.um5.ac.ma/">{" ENSIAS"}</a>. Currently, I'm
        focused on learning web development and creating projects using
        <a href="https://reactjs.org/">{" React.js"}</a> .
      </p>
      <Button
        className="button-l"
        href="/resume.pdf"
        text="Have a look at my resume!"
      />
    </header>
  );
}
