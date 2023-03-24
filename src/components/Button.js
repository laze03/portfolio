import "../css/main.css";

export default function Button(props) {
  return (
    <a
      className={props.className + " button"}
      href={props.href}
      download={props.download}
      alt="me"
    >
      {props.text}
    </a>
  );
}
