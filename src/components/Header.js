import React from "react";
import blogData from "../data/blog";


function Header({name = blogData.name}){
    return (
        <h1>{`${name}`}</h1>

    )
}

export default Header;