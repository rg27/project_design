import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";



import axios from 'axios';

class TableList extends Component {
  constructor (props){
		super();
		this.state = {
    rainfalls: [],
    floods1:[],
    floods2:[],

    columns: [{
      dataField: 'entry_id',
      text: 'ID',
      sort: false,
      
    },
    {
      dataField: 'field1',
      text: 'Data Value',
      sort: false,
    
    }, {
      dataField: 'created_at',
      text: 'Date Created',
      sort: false,
   
    }]
  }
}

  componentDidMount() {
    Promise.all([
      axios.get('https://api.thingspeak.com/channels/872827/fields/1.json?results=5'),
      axios.get('https://api.thingspeak.com/channels/872827/fields/1.json?results=15'),
      axios.get('https://api.thingspeak.com/channels/872827/fields/1.json?results=15')
    ])
    .then(([rainfalls_response, floods1_response, floods2_response]) => {
      const rainfalls = rainfalls_response.data.feeds
      const floods1 = floods1_response.data.feeds
      const floods2 = floods2_response.data.feeds
            this.setState({
              rainfalls,
              floods1,
              floods2
            });
        });
  }
  
    render() {
      return (
        <div className=" content" style={{ marginTop: 0 }}>
          <div>
            <h1>Rainfall Monitoring</h1>
            <BootstrapTable 
              striped
              hover
              keyField='entry_id' 
              data={ this.state.rainfalls } 
              columns={ this.state.columns }
              pagination={ paginationFactory() }
            />  
          </div>
        <div className=" content" style={{ marginTop: 50 }}>
          <div>
            <h1>Flood Monitoring Site A</h1>
            <BootstrapTable 
              striped
              hover
              keyField='entry_id' 
              data={ this.state.floods1 } 
              columns={ this.state.columns }
              pagination={ paginationFactory() }
            />  
          </div>
        </div>
        <div  className=" content" style={{ marginTop: 50 }}>
          <div>
            <h1>Flood Monitoring Site B</h1>
            <BootstrapTable 
              striped
              hover
              keyField='entry_id' 
              data={ this.state.floods2 } 
              columns={ this.state.columns }
              pagination={ paginationFactory() }
            />  
          </div>
        </div>
      </div>
        
      );
  }
}

export default TableList;