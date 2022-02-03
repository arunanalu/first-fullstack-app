const axios = require('axios');

const STATES_URI = 'http://localhost:3000/estados';

const getStates = () => axios.get(STATES_URI)
  .then((res) => res.data)
  .catch((errorOrResponse) => {
    if (errorOrResponse.status) {
      return errorOrResponse;
    }
    console.error(errorOrResponse);
  });

// getStates().then((res) => console.log(res))

export default getStates;