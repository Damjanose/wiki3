/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import '../style/dataList.css';
import Results from './Results';
import axios from 'axios';

function List(props) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    console.log(props.input)
    let baseURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${props.input}`
    const getWikipediaData = async () => {
      const res = await axios.get(baseURL);
      setData(res.data.query.search);
    };
    getWikipediaData();
  }, [props.input]);


  const filteredData = data.filter((el) => {
  if(props.input.length >= 1 ){
      return el.title.toLowerCase().includes(props.input) || el.snippet.toLowerCase().includes(props.input)
    }
  })
 
  if(props.input.length < 3) {
    return (
      <div className='warning'>
        <p className='alert'>Please search with more than 3 characters</p>
      </div>
    );

  } else  if(props.input.length >= 3) {
    if(filteredData.length > 0) {
      return (
        <div className='results'>
          <Results data={filteredData}/>
        </div>
      );

    } else {
      return <p>No results found</p>
    }
  }
}
export default List
