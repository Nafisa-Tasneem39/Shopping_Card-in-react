import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class CardHeader extends Component {
    state = { 
        fontStyle: {
            fontSize: "2.5vw"
        }
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container text-center bg-success pt-2 pb-3 mt-1 mb-3 rounded">
                    <div className="row">
                        <div className="col">
                            <span className="text-white" style={this.state.fontStyle}>Book's Name</span>
                        </div>
                        <div className="col">
                            <span className="text-white" style={this.state.fontStyle}>Price</span>
                        </div>
                        <div className="col">
                            <span className="text-white" style={this.state.fontStyle}>Selected Item</span>
                        </div>
                        <div className="col">
                            <span className="text-white" style={this.state.fontStyle}>Click to Select</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CardHeader;