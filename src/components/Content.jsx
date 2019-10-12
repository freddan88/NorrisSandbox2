import React, { useState, useEffect } from 'react';

const Content = () => {

    const [ state, setState ] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();
        setState(data);
    }

    return (
        <main className="main-content">
            <br/>
            <img src={state.icon_url} alt={state.id} />
            <a href={state.url} target="_blank" rel="noopener noreferrer">Link to joke at: chucknorris.io</a>
            <button onClick={fetchData}>New Joke</button>
            <hr/>
            <div className="text-box">
                <p>{state.value}</p>
            </div>
        </main>
    );
};

export default Content;