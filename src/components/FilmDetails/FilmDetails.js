import React, { Component } from 'react';
import "./FilmDetails.css";
import img from "../../images/setitup.jpeg";

export function FilmDetails(props) {
    var divImage = {
        backgroundImage : "url(" + props.film.image+ ")"
      };
    console.log('props.film.image', props.film.image);
    return (
        <div className="wrapper">
            {/* <img src={require("images/thecrown.jpeg").default} /> */}
            <div style={divImage}></div>
            {/* `${props..}` */}
            {/* <img src={require(`${props.film.image}`)} alt="product" /> */}
            
            {/* <p >{props.film.images}</p> */}
            <p className="title">{props.film.title}</p>
            <p className="year">{ props.film.year}</p>
            <p className="rating">{props.film.rating }</p>
            <p className="duration">{ props.film.duration}</p>
          </div>

    )
}
