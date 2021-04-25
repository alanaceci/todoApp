import React, { useState, useEffect } from "react";
import '../css/Goodbye.css';
import axios from 'axios';


const Goodbye = () => {
    const [gif, setGif] = useState(null);
    
    const fetchGif = async () => {
        const gif = await axios("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: "ZCuR7Y73sRceDFKXn1tQe601hCO7aefX",
                q: "goodbye"
            }
            
        });
        const random = Math.floor((Math.random() * 20) + 1);
        console.log(gif.data.data[random]);
        const goodbye = gif.data.data[random];
        console.log(goodbye.images.fixed_height.url);
        setGif(goodbye.images.fixed_height.url);
    }

    useEffect(async () =>  await fetchGif(), []);

    const renderGif = () => {
        return(
            <div className="image">
                <img src={gif}/> 
            </div>
        )
    }
    
    return (
        <div className="wrapper"> 
            <h2> See you again tomorrow for another productive day! </h2>
            {renderGif()}
        </div>
      
    );

}

export default Goodbye;