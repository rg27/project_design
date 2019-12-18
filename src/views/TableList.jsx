import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

class TableList extends Component {
  constructor (props){
		super();
		this.state = {
    products: [],
    columns: [{
      dataField: 'entry_id',
      text: 'ID',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'field1',
      text: 'Data Value',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'created_at',
      text: 'Date Created',
      sort: true,
   
    }]
  }
}

  componentDidMount() {
    axios.get('https://api.thingspeak.com/channels/872827/fields/1.json?results=20')
      .then(response => {
        const products = response.data.feeds
        this.setState({
          products
        });
        console.log(response.data.feeds[0].entry_id);
        console.log(this.state.products[0].entry_id)
      });
  }
  
  render() {
    return (
      <div className="container content" style={{ marginTop: 50 }}>
        <BootstrapTable 
        striped
        hover
        keyField='entry_id' 
        data={ this.state.products } 
        columns={ this.state.columns }
        filter={ filterFactory() } 
        pagination={ paginationFactory() }/>
        
      </div>
      
    );
  }
}

export default TableList;