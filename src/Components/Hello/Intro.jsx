import "./hello.css";

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-header">
        <p className="body-text greeting">Hi all. I am</p>
        <h1 className="headline-text">Githuba Richard Jeremy</h1>
        <p className="subheadline-text proffesion">&gt; Front-end developer</p>
      </div>

      <div className="intro-more">
        <p className="labels-text"> &#47;&#47; find me on github</p>
        <p className="labels-text intro-equals">
          <span className="const">const</span>{" "}
          <span className="githubLink">githubLink</span> ={" "}
          <a
            href="https://github.com/githubarj"
            rel="noreferrer"
            target="_blank"
          >
            <q>https://github.com/githubarj</q>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Intro;
