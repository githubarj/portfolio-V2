import Game from "./Game"
import Intro from "./Intro"
import "./hello.css"

function Hello() {
  return (
    <div className="hello-container page">
      <Intro />
      <Game/>
    </div>
  )
}

export default Hello