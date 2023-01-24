// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useParams, Link} from "react-router-dom";
import useFetch from './hooks/useFetch';

function App() {
  const {id} = useParams();
  const {loading, error, pieces} = useFetch(`http://192.168.0.155:1337/api/tests/`)
  console.log(loading, error, pieces);

  return (
    <div className="App">
      <h1>LETS GET CODINk!</h1>
    </div>
  );
}

export default App;