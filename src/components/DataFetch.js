import React, { useState } from "react";
import '../App.css';
const DataFetch = () => {

  const [posts, setPosts] = useState([]);

  const ClickHandler = () => {
    const url = `https://swapi.dev/api/people/${Math.floor(Math.random() * 10) + 1}`
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();  //console.log(json);
        setPosts([...posts, json.name]);
      } catch (error) {
        console.log("Unexpected error occured");
      }
    };
    fetchData();
  };

  const DeleteHandler = (e) => {
    const ele = document.getElementsByClassName(e)[0];
    ele.remove();
  };

  return (
    <div>
      <div>
        <button className="button" onClick={ClickHandler}>Add Record</button>
      </div>
      <table id="table">
        <tr><td>Name</td><td></td></tr>
        {posts.map((post) => (
          <tr className={post}>
            <td key={Math.random()}>{post}</td>
            <td id="button_td">
              <button className="button" name={post} onClick={() => DeleteHandler(post)}> Delete </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DataFetch;