import React from "react";
import '../style/table.css'

export default function Table({ data }) {
  
  return (
    <table className="filtered_data--table">
      <thead className="filtered_data--table_heder">
        <tr>
          <th className="filtered_data--table_heder__title">Title</th>
          <th className="filtered_data--table_heder__snipperd">Snippet</th>
          <th className="filtered_data--table_heder__woerdcount">Wordcount</th>
          <th className="filtered_data--table_heder__size">Size</th>
          <th className="filtered_data--table_heder__time">Timestamp</th>
        </tr>
      </thead>
      <tbody className="filtered_data">
        {data.map((item) => (
        <tr className="filtered_data--table_body" key={item.pageid}>
          <td className="filtered_data--table_body__title">{item.title}</td>
          <td className="filtered_data--table_body__snipperd">{item.snippet}</td>
          <td className="filtered_data--table_body__woerdcount">{item.wordcount}</td>
          <td className="filtered_data--table_body__size">{item.size}</td>
          <td className="filtered_data--table_body__time">{item.timestamp}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
