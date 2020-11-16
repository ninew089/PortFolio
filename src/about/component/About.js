import React from 'react';
import { Row, Col, Avatar ,Descriptions, Badge } from 'antd';
import { GithubOutlined ,LinkedinOutlined,FacebookOutlined} from '@ant-design/icons';
import { FaLine } from "react-icons/fa";
import { Anchor } from 'antd';
import { useMediaQuery } from 'react-responsive'

const { Link } = Anchor;
export default function About() {
    const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

  return (
      <>
          <Row>
            
      <Col span={isMobile?24:9} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }} >
      <h2 id="ABOUT">ABOUT ME</h2>
                  <div style={{ margin: 10 }}>
           
                      I am a fourth-year computer science student at Chulalongkorn University in Bangkok. I am a self-taught frontend  developer .
                      Currently looking for internship position in the industry in which to improve computer skill and expand work experience.
     </div>
     <h2 id="Contact">Contact Details</h2>
                  <div style={{ margin: 10 }}>
           
                      13 Srenakarin42 St., Bangkok ,Thailand 10250

                      jittanan.jck@gmail.com
                      <div>
                          <Avatar size={36} icon={<FaLine size={20} style={{ marginTop: 8 }} />} style={{ marginRight: 4, background: '#f5f5f5', color: '#001628' }} />
                          new.jck
                      </div>
                    
                      <div> <Avatar size={36} icon={<FacebookOutlined />} style={{ marginRight: 4, background: '#f5f5f5', color: '#001628' }} />
                      Ninew Jck
                      </div>
                      <div> <Avatar size={36} icon={<LinkedinOutlined />} style={{ marginRight: 4, background: '#f5f5f5', color: '#001628' }} />
                      Jittanan Jackthreemongkol
                      </div>
                      <div> <Avatar size={36} icon={<GithubOutlined />} style={{ marginRight: 4, background: '#f5f5f5', color: '#001628' }} />
                      ninew089
                      </div>
                      Mobile No.    099-096-5415
     </div>
     <h2 id="Education">Education History</h2>
                  <div style={{ margin: 10 }}>
                      Chulalongkorn University ,Bangkok -Bachelor ,4 th
     </div>
     <h2 id="Competencies">Competencies</h2>
                
 
                      <Descriptions title="" bordered  column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} >
                   
                          <Descriptions.Item label="Languages">HTML, CSS, JavaScript, TypeScript, Python, Java</Descriptions.Item>
                          <Descriptions.Item label="Front-end Frameworks">Material ui, Ant design</Descriptions.Item>
                          <Descriptions.Item label="Tools">Git</Descriptions.Item>
                          <Descriptions.Item label="UX/UI Design">Figma</Descriptions.Item>
                          <Descriptions.Item label="Frameworks">ReactJS</Descriptions.Item>
                         

   
 
  </Descriptions>,
  
     <h2 id="Interests">Interests </h2>
                  <div style={{ margin: 10 }}>
                      Web developer, UX/UI, Bussiness
     </div>
     <h2 id="Certificate">Certificate</h2>
                  <div style={{ margin: 10 }}>
                    <h4> Front-End Web Development with React (with Honors)  by Coursera 2020</h4> 
                       
                    <h4>  HTML,CSS and Javascript for Web Developers by Coursera 2020</h4> 
                    <h4>  Mastering Web Development with React bySkooldio 2020</h4> 
                    <h4>  Visual Elements of User Interface Design  by Coursera2020</h4> 
                    <h4> Intro to Data Science from Skooldio 2020</h4> 
     </div> 
              </Col>
              <Col span={isMobile?0:3} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }} offset={1}>
               
               <Anchor style={{marginTop:40}} >
       <Link href="#ABOUT" title="ABOUT" />
       <Link href="#Contact" title="Contact Details" />
       <Link href="#Education" title="Education"/>
       <Link href="#Competencies" title="Competencies" />
                         <Link href="#Interests" title="Interests" />
                         <Link href="#Certificate" title="Certificate" />
   
                         </Anchor>
               
      </Col>
   
    </Row>
       
    </>
  );
}
