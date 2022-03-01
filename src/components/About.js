import React from "react";

function About({prop}){

    return(
        <aside>
            {prop.image ? 
            <img src= {prop.image} alt="blog logo"></img>
            :
            <img src= "https://via.placeholder.com/215" alt="blog logo"></img>
            }
            <p>{prop.about}</p>
        </aside>
    )
}

export default About;
