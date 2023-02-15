import "../css/main.css";
import Button from "./Button";

export default function Contact() {
  return (
    <div className="contact" id="Contact">
      <h5>04. What's next</h5>
      <h1>Get In Touch</h1>
      <p>
        Thank you for taking the time to visit my portfolio website. I'm always
        interested in connecting with new people and discussing new projects and
        opportunities. If you have any questions or comments, feel free to reach
        out to me.
      </p>
      <Button
        className="button-l"
        href="mailto:lazrak.professional@gmail.com"
        text="Let's Connect!"
      />
    </div>
  );
}
