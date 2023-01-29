// import logo from './logo.svg';
import './App.css';
import { React, useState, useEffect } from 'react';
import {useParams, Link} from "react-router-dom";
import useFetch from './hooks/useFetch';
const rooturl = process.env.REACT_APP_ROOTURL;

function App() {

  const [pieces, setPieces] = useState([]);
  const {id} = useParams();


  const {loading, error, fetchedPieces} = useFetch(`${rooturl}:1337/api/tests/?populate=*`);

  useEffect(()=>{
    if(fetchedPieces){
      setPieces( fetchedPieces.map(piece => piece.attributes ));
    }
  },[fetchedPieces]);

  if(loading){ return <div className="App"><p>Loading...</p></div> };
  if(error){ return <div className="App"><p>Error :(</p></div> };

  if(fetchedPieces){console.log(fetchedPieces)}



  return (
    <div className="App">
      {

        pieces.map((piece, index) => (
          <div className="pieceDiv" key={"piecediv"+index}>
            <h1 key={"title"+index}>{piece.title}</h1>
            <img src={rooturl+":1337"+piece.heroimg.data.attributes.url} alt={piece.heroimg.data.attributes.alternativeText} key={"img"+index} />
          </div>
        ))

      }
    </div>
  );
}

export default App;