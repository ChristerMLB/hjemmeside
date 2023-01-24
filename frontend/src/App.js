// import logo from './logo.svg';
import './App.css';
import {createContext} from "react";
import { fetchAPI } from '../../lib/api';
import { getStrapiMedia } from '../../lib/media';

export const GlobalContext = createContext({});

function App() {
  return (
    <div className="App">
      <h1>LETS GET CODINk!</h1>
    </div>
  );
}

export default App;