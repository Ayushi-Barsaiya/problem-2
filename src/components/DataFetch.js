import React, { useState } from "react";

const DataFetch = () => {
  const [posts, setPosts] = useState([]);

  const ClickHandler = () => {

    const url = `https://swapi.dev/api/people/${Math.floor(Math.random() * 10) + 1}`

    const fetchData = async () => {
      try {
            const response = await fetch(url);
            const json = await response.json();
                //console.log(json);
            setPosts([...posts, json.name]);
        } catch (error){
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
        <button onClick={ClickHandler}>ADD RECORD</button>
      </div>
      <table>
        {posts.map((post) => (
          <tr className={post}>
            <td key={Math.random()}>{post}</td>
            <td>
              <button name={post} onClick={() => DeleteHandler(post)}> delete </button>   
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DataFetch;