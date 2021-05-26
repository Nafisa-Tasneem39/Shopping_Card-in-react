import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class DisplayTotal extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container text-center mt-3 p-4 bg-dark rounded">
                    <span className="text-white display-4">Total Cost = {this.props.setTotal}</span>
                </div>
            </React.Fragment>
         );
    }
}
 
export default DisplayTotal;