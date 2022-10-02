import { React, useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import '../style/search.css';
import List from './List';
import Welcome from "./Welcome";
import Footer from "./Footer";
import LoadingSpinner from '../components/Loader.js';
import axios from 'axios';

export default function Search() {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchedValue, setSearchedValue] = useState([]);

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getWikipediaData = async () => {
      const res = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=searchphrase?q=${query}`);
      setData(res.data.query.search);
    };
    if (query.length === 0 || query.length > 2) getWikipediaData();
  }, [query]);


  useEffect(() => {
    localStorage.setItem('Searched Value', JSON.stringify(searchedValue));
  }, [searchedValue]);

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(true), 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    setSearchedValue(lowerCase);
    setQuery(e.target.value.toLowerCase())
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
