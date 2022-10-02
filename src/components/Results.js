import React from "react";
import '../style/results.css'

export default function Results({ data }) {
  
  return (
    <div className="results_container">
        {data.map((item) => (
        <div className="filtered_data--table_body" key={item.pageid}>
          <h3 className="filtered_data--table_body__title">{item.title}</h3>
          <code className="filtered_data--table_body__description">{item.snippet}</code>
        </div>
      ))}
    </div>
  )
}