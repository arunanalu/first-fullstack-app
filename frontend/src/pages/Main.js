import '../App.css';
import React from 'react';
import AppHeader from '../components/header';
import useGetStates from '../hooks/useGetStates';

function Main() {
  const [states] = useGetStates();
  return (
    <div className="App">
      <AppHeader />
      <section className="add-state-container">
      </section>
      <section className="card-container">
        {
          states.map((el) => {
            return (
              <div className="card">
                <p key={el._id}>{el.name}</p>
              </div>
            )
          })
        }
      </section>
    </div>
  );
}

export default Main;
