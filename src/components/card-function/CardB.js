import React from "react";

function CardB(props){
    console.log(props)
    return (
        <div className="card">
        <img src="https://img.icons8.com/dusk/64/000000/guest-male.png" alt="avatar" className="image"/>
        <div className="container">
            <h4><b>{props.name}</b></h4>
            <p>{props.role}</p>
        </div>
    </div>
    )
}

export default CardB