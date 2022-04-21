import React, { useState } from 'react'


const DataFetch = () => {

    const [posts, setPosts] = useState([]);

    const ClickHandler = () => {
        const url = `https://swapi.dev/api/people/${Math.floor(Math.random() * 10) + 1}`
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setPosts([...posts,
                   json.name])
            }
            catch (error) {
                console.log("error");
            }
        };
        fetchData();
    }

    const DeleteHandler = () => {
            
    }

    return (
        <div>
            <div>
                <button onClick={ClickHandler}>ADD RECORD</button>
            </div>
            <table>
                {posts.map((post) =>
                    <tr>
                        <td key={Math.random()}>{post}</td>
                        <td><button onClick={DeleteHandler}>delete</button></td>
                    </tr>
                )}
            </table>
        </div>
    );
};

export default DataFetch