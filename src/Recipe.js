import React from "react";


const Recipe=({title,calories,image,ingredients})=>{

    return(
        <div className="recipe-content">
            <h2>{title}</h2>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt=""></img>
        </div>
    );
};

export default Recipe;
