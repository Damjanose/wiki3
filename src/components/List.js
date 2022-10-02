/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import '../style/dataList.css';
import Table from './Table';
import Results from './Results';
import axios from 'axios';

function List(props) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getWikipediaData = async () => {
      const res = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=searchphrase${query}`);
      setData(res.data.query.search);
    };
    if (query.length === 0 || query.length > 2) getWikipediaData();
  }, [query]);
  

  const filteredData = data.filter((el) => {
  if(props.input.length >= 1 ){
      return el.title.toLowerCase().includes(props.input) || el.snippet.toLowerCase().includes(props.input)
    }
  })
 
  if(props.input.length < 1) {
    return (
      <div className='show_all_aveliable_datas'>
        {/* <div className='warning'>
          <p className='alert'>Please search with more than 3 characters</p>
        </div> */}
        <div className='filtered_data--results'>
          <Table data={data}/>
        </div>
      </div>
    );

  } else  if(props.input.length >= 1) {
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
