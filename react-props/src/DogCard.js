import React from "react";
import "./DogCard.css";

function DogCard(props) {
    console.log(props);
    return (
        <div className="dog-card">
            <img src={props.imgUrl} />
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}

export default DogCard;
