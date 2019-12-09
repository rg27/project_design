// import React, { Component } from 'react'  
// import axios from 'axios';  
// import { Line, Bar } from "react-chartjs-2";

// export class Rainfall extends Component {  
// 	constructor(){
// 		super();
// 		this.state = {
		 
// 		}
// 	  }
// 	  componentDidMount() {
// 		this.getChartData();
// 	  }

//         getChartData() {
//     	axios.get("https://api.thingspeak.com/channels/872827/fields/1.json?results=2").then(res => {
//         const coin = res.data;
// 		let feeds = [];
// 		let feeds1 = [];
       
//         feeds.forEach(element => {
// 		feeds.push(element.feeds.entry_id);
// 		feeds1.push(element.feeds.field1);
     

//           });

//        console.log(coin)
//         this.setState({
         
//             labels:feeds,
//             datasets: [
//               {
//                 label: "Population",
//                 data: feeds,
//                 backgroundColor: [
//                   "rgba(255, 99, 132, 0.6)",
//                   "rgba(54, 162, 235, 0.6)",
//                   "rgba(255, 99, 132, 0.6)"
//                 ],
//               }
//             ]
          
//         });
//       });
//     }

//         render() {  
//                 return (  
//                         <div>  
//                                 <Line  
//                                         data={this.state.Data}  
//                                         options={{ maintainAspectRatio: true }} />  
//                         </div>  
//                 )  
//         }  
// }  
  
// export default Rainfall  


import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

export default class Rainfall extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }
       
      componentDidMount() {
        axios.get(`https://api.thingspeak.com/channels/872827/fields/1.json?results=10`)
          .then(res => {
            const feed = res.data;
       
            let playername = [];
            let playerscore = [];
            Array.from(feed.feeds).forEach(element => {
          console.log(element);
              playername.push(element.entry_id);
        
              playerscore.push(element.field1);
              
            });
            this.setState({ 
              Data: {
                labels: playername,
                datasets:[
                   {
                      label:'Height',
                      data: playerscore ,
                      backgroundColor:[
                       'rgba(255,105,145,0.6)',
                       'rgba(155,100,210,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(240,134,67,0.6)',
                       'rgba(120,120,120,0.6)',
                       'rgba(250,55,197,0.6)'
                    ]
                   }
                ]
             }
             });
          })
      }
 render()
   {
      return(
        <div>
          <Line
            data = {this.state.Data}
            options = {{ maintainAspectRatio: false }} />
        </div>
      )
   }
}