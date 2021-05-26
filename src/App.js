import React, { Component } from 'react';
import Card from './shoping-card/card'
import CardHeader from './shoping-card/cardHeader';
import DisplayTotal from './shoping-card/displayTotal';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        total: 0
    }
  }

  getEachTotal = (childData) =>{
      this.setState({total: this.state.total + childData});
  }
  render () {
    return (
      <React.Fragment>
        <CardHeader/>
        <Card bookName="Algorithm" bookPrice="500" getTotal = {this.getEachTotal}/>
        <Card bookName="Pragmatic Programmer" bookPrice="700" getTotal = {this.getEachTotal}/>
        <Card bookName="Eloquent Javascript" bookPrice="600" getTotal = {this.getEachTotal}/>
        <Card bookName="C++ Complete Reference" bookPrice="300" getTotal = {this.getEachTotal}/>
        <Card bookName="Head First Java" bookPrice="500" getTotal = {this.getEachTotal}/>
        <DisplayTotal setTotal={this.state.total}/>
      </React.Fragment>
    );
  }
}

export default App;
