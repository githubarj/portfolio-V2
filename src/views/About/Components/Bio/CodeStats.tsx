import type React from "react"
import Languages from "./Languages"
import Editors from "./Editors"

import {Row, Col, Typography } from "antd"

const {Title , Text , Link} = Typography
const CodingStats : React.FC = () => {
    return (<Row gutter ={[16,16]}>
      <Col span={24} className ="flex items-center gap-2 "> <Title style={{color: "white"}}> Coding Stats </Title> <Text> powered by </Text> <Link href = "https://wakatime.com/" target="blank">wakatime </Link> </Col>
      <Col md = {24} lg={12} className="w-full">
        <Languages />
      </Col>
       <Col md = {24} lg={12} className="w-full">
        <Editors />
      </Col>
    </Row>)
} 

export default CodingStats