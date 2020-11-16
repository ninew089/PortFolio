
import React from 'react';
import { Row, Col, Avatar ,Descriptions, Badge } from 'antd';
import { GithubOutlined ,LinkedinOutlined,FacebookOutlined} from '@ant-design/icons';
import { FaLine } from "react-icons/fa";
import { Anchor } from 'antd';
import { useMediaQuery } from 'react-responsive'

const { Link } = Anchor;
export default function Project() {
    const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

  return (
      <>
          <Row>
     
      <Col span={isMobile?24:9} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }} offset={1}>
      <h2 >Project</h2>
                  <div style={{ margin: 10 }}>
                    <h4>  Web Application: Personal Interest Evaluation for Thai Government Jobs -2020</h4> 
                       
                    <h4>  https://job-match.ocsc.go.th/ </h4> 
                    <h4>  Web Application: OCSC learning Portal  -2020</h4> 
                    <h4>  http://54.151.212.211/learning-portal</h4> 
              
     </div> 
   
              </Col>
         
   
    </Row>
       
    </>
  );
}
