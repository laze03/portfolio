import "../css/main.css";

export default function H2(props) {
  return (
    <h2 className="title">
      <span className="before">{props.before}</span> {props.text}
    </h2>
  );
}
