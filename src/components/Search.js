import { React, useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import '../style/search.css';
import List from './List';
import Welcome from "./Welcome";
import Footer from "./Footer";
import LoadingSpinner from '../components/Loader.js';

export default function Search() {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(true), 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  

  if(isLoading === false) {
    return <div className='loader_container'>
      <LoadingSpinner />
    </div>
  } else 
    return (
    <div className="main">
      <Welcome />
      <div className="search">
        <TextField
          onChange={inputHandler}
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
      <hr/>
      <Footer />
    </div>
  )
}
