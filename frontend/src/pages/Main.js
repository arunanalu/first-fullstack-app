import '../App.css';
import React from 'react';
import AppHeader from '../components/header';
import useGetStates from '../hooks/useGetStates';
import AddContainer from '../components/addInput';
import deleteState from '../services/deleteState';
import getStates from '../services/getStates';

function Main() {
  const [states, setStates] = useGetStates();

  const deleteCard = async (id) => {
    await deleteState(id);
    const req = await getStates();
    setStates(req);
  }

  return (
    <div className="App">
      <AppHeader />
      <AddContainer setStates={setStates} />
      <section className="card-container">
        {
          states.map((el) => {
            return (
              <div className="card" key={el._id} >
                <p className="x" onClick={() => deleteCard(el._id)}>x</p>
                <p>{el.name}</p>
              </div>
            )
          })
        }
      </section>
    </div>
  );
}

export default Main;
