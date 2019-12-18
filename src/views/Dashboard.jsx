
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

import Rainfall2 from './charts/Rainfall2.jsx'
import FloodSiteA2 from './charts/FloodSiteA2'
import FloodSiteB2 from './charts/FloodSiteB2'

class Dashboard extends React.Component {
  
  render() {
    return (
      <>
        <div className="content">
          <div className="chart-area">
            < Rainfall2/>
          </div>
               
          <Row>
            <Col lg="6">
                  <div className="chart-area">
                    <div className="chart-area">
                      < FloodSiteA2/>
                    </div>
                  </div>
            </Col>
         
            <Col lg="6">
              <div className="chart-area ">
                < FloodSiteB2/>
              </div>
            </Col>
          </Row>
        
        </div>
      </>
    );
  }
}

export default Dashboard;
