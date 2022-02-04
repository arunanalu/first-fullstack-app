const axios = require('axios');

const deleteState = (id) => {
  const STATES_URI = `http://localhost:3000/estados/${id}`;

  return axios.delete(STATES_URI)
  .then((res) => res.data)
  .catch((errorOrResponse) => {
    return { message: errorOrResponse.response.data.message, state: 'erro' } ;
  });
}

// putState('Br').then((res) => console.log(res))

export default deleteState;