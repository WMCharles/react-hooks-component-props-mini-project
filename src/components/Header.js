import React from "react";
import blogData from "../data/blog";

function Title(props){
    return <h1>{props.title}</h1>
}
function Header(){
    return (
        <header>
            <Title title={blogData.name}/>
        </header>
    )
}

export default Header;