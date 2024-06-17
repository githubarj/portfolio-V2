import { Col, Row } from "antd"
import Intro from './Components/Intro';
const Home = () => {
  return (
    <Row className="home-container" >
      <Col className="intro-section" >
        <Intro />
      </Col>
      
    </Row>
  )
}

export default Home