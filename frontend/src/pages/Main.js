import '../App.css';
import React from 'react';
import AppHeader from '../components/header';
import useGetStates from '../hooks/useGetStates';
import AddContainer from '../components/addInput';

function Main() {
  const [states] = useGetStates();

  return (
    <div className="App">
      <AppHeader />
      <AddContainer/>
      <section className="card-container">
        {
          states.map((el) => {
            return (
              <div className="card" key={el._id}>
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
