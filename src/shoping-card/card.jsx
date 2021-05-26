import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Card extends Component {
    state = { 
        fontStyle: {
            fontSize: "26px"
        },
        counter: 0
    }

    handleDecrease = () => {
        if(this.state.counter > 0){
            this.setState({
                fontStyle: {
                    fontSize: "26px"
                },
                counter: this.state.counter - 1
            });

            this.props.getTotal(this.props.bookPrice * (-1));
        }
    }

    handleIncrease = () => {
        this.setState({
            fontStyle: {
                fontSize: "26px"
            },
            counter: this.state.counter + 1
        });

        this.props.getTotal(this.props.bookPrice * 1);
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container text-center mt-3">
                    <div className="row">
                        <div className="col">
                            <span className="text-dark" style={this.state.fontStyle}>{this.props.bookName}</span>
                        </div>
                        <div className="col">
                            <span className="text-dark" style={this.state.fontStyle}>{this.props.bookPrice}</span>
                        </div>
                        <div className="col">
                            <div className="bg-warning p-2 rounded">{this.state.counter}</div>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger mr-1" onClick={this.handleDecrease}>-</button>
                            <button className="btn btn-success ml-1" onClick={this.handleIncrease}>+</button>
                        </div>
                    </div>
                    <hr/>
                </div>


            </React.Fragment>
         );
    }
}
 
export default Card;