const axios = require('axios');

const STATES_URI = 'https://6mb9yb.deta.dev/estados';


const putState = (name) => {
  const body = {
    name: name,
  };

  return axios.post(STATES_URI, body)
  .then((res) => res.data)
  .catch((errorOrResponse) => {
    return { message: errorOrResponse.response.data.message, state: 'erro' } ;
  });
}

// putState('Br').then((res) => console.log(res))

export default putState;