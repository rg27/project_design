
import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

export default class FloodSiteB2 extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {},
      }
    } 
      componentDidMount() {
        axios.get(`https://api.thingspeak.com/channels/946392/fields/1.json?timezone=Asia%2FTaipei&results=5`)
          .then(res => {
            const feed = res.data;
            let rain_id = [];
            let rain_data = [];
            Array.from(feed.feeds).forEach(element => {
            console.log(element);
              rain_id.push(element.created_at);
              rain_data.push(element.field1);
            });

            this.setState({ 
              Data: {
                labels: rain_id,
                
                datasets:[
                   {
                      label:'Alert Level',
                      data: rain_data ,
                      fill: true,
                      // backgroundColor: gradientStroke,
                      borderColor: "#1f8ef1",
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      pointBackgroundColor: "#1f8ef1",
                      pointBorderColor: "rgba(255,255,255,0)",
                      pointHoverBackgroundColor: "#1f8ef1",
                      pointBorderWidth: 20,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 4,
                   }
                ]
             }
             });
          })
      }
  render()
    {
        return(
          <div className="content">

          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="12">
                      <CardTitle tag="h2">Barangay Sirao</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line  data = {this.state.Data}
                    options = {{ maintainAspectRatio: false,legend: {
                    display: false  },
                    tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                    },
                    responsive: true,
                    scales: {
                      yAxes: [
                        {
                          barPercentage: 1.6,
                          gridLines: {
                          drawBorder: false,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent"
                        },
                        ticks: {
                          suggestedMin: 1,
                          suggestedMax: 3,
                          padding: 20,
                          fontColor: "#9a9a9a"
                        }
                        }
                      ],
                      xAxes: [
                        {
                          barPercentage: 1.6,
                          gridLines: {
                          drawBorder: false,
                          color: "rgba(29,140,248,0.1)",
                          zeroLineColor: "transparent"
                          },
                            ticks: 
                            {
                              padding: 20,
                              fontColor: "#9a9a9a"
                            }
                        }
                      ]
                    } 
                    }} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
            )
        }
  }