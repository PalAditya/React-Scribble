import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    fromCCY: "USD",
    toCCY: "INR",
    persons: []
  };

  this.myFunc = this.myFunc.bind(this);
  this.stock = this.stock.bind(this);
}
  componentDidMount() {
      this.stock("USD", "INR");
      
  }

  stock (fromCCY, toCCY) {
    axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCCY}&to_currency=${toCCY}&apikey=GetYourOwn:)`)
      .then(res => {
        console.log("Done");
        const arr = [];
        const data = res.data["Realtime Currency Exchange Rate"];
        // eslint-disable-next-line
        for (const [key, value] of Object.entries(data)) {
          arr.push(value);
        }
        console.log(arr)
        this.setState({ persons: arr });
      })
  }

  myFunc() {
    console.log("I was called")
    this.stock("AUD", "INR");
  }

  render() {
    return (
      <div>
      <ul>
        { this.state.persons.map(person => <li>{person}</li>)}
      </ul>
      <button onClick = {this.myFunc}>Click :)</button>
      </div>
    )
  }
}