import { useEffect, useState } from 'react';
import getStates from '../services/getStates';

export default function useGetStates() {
  const [states, setStates] = useState([]);
  
  useEffect(() => {
    async function requisition() {
        const res = await getStates()
        setStates(res)
    }
    requisition();
  }, [states]);

  return [states, setStates]
}