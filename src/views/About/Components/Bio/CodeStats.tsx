import type React from "react"
import Languages from "./Languages"
import Comparison from "./Comparison"

import {Row, Col} from "antd"

const CodingStats : React.FC = () => {
    return (<Row gutter ={[16,16]}>
      <Col md = {24} lg={12} className="w-full">
        <Languages />
      </Col>
       <Col md = {24} lg={12} className="w-full">
        {/*<Comparison />*/}
      </Col>
    </Row>)
} 

export default CodingStats