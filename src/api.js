const axios = require('axios');

const GetFxRate = (fromCCY, toCCY) => axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=INR&to_currency=JPY&apikey=QFLM4ANJ0UEIOLFA')
  .then(function (response) {
      console.log(fromCCY, toCCY);
      return response.json();
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log("Axios seems cool")
  });

export default GetFxRate;