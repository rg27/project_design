import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import "../assets/css/style.css";


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible : true,
      bingmapKey: "ApDiEZM9Y1G3Vyh71rC9RPmSJBYBA3owcwXOkwJxyVxj7I9_RX6n98ce2L0eyQXP",
    
      infoboxesWithPushPins: [
        {
          "location":[10.2990, 123.9639], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Rainfall Monitoring' },
          "pushPinOption":{  },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {
          "location":[10.2524,123.8392], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Flood Monitoring Site A' },
          "pushPinOption":{  },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {
          "location":[10.3321, 123.9357], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Flood Monitoring Site B' },
          "pushPinOption":{  },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        }
      ],
    }
  }
  
  render() {
    return (
      <div className="content">
        {this.state.isVisible && (<div>
          <div className = "map-two">
            <ReactBingmaps 
              id = "four"
              center = {[10.3157, 123.8854]}
              className = "customClass"
              bingmapKey = {this.state.bingmapKey} 
              mapTypeId = {"aerial"}
              infoboxesWithPushPins = {this.state.infoboxesWithPushPins}
            > 
            </ReactBingmaps>
          </div>
        </div>)}
        <br />
      

      </div>
    );
  }
}

export default Map;