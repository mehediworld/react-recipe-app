import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from "./Recipe";

const App=()=>{

const APP_ID="";
const APP_KEY="";

const [recipes,setrecipes]=useState([]);
const [search,setsearch]=useState([""]);
const [query,setquery]=useState(["beef"]);

useEffect( ()=>{
  getreq();

},[query]);

const getreq=async()=>{
  const response=await fetch
  (`https://api.edamam.com/search?q=query&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data=await response.json();
  setrecipes(data.hits);
  console.log(data.hits);
};

const upadte=e=>{
  setsearch(e.target.value);
};

const getsearch=e=>{
  e.preventDefault();
  setquery(search);
  setsearch('');
};

return(
    <div className="App">
      <form onSubmit={getsearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={upadte}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
      ))}

      </div>

    </div>
  );
};

export default App;
