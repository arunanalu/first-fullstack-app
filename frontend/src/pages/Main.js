import '../App.css';
import React, { useEffect, useState } from 'react';
import getStates from '../services/getStates';
import AppHeader from '../components/header';

function Main() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function requisition() {
      const res = await getStates()
      setResult(res)
    }
    requisition();
  }, []);

  // console.log(result)
  return (
    <div className="App">
      <AppHeader />
      <section className="card-container">
        {
          result.map((el) => {
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
