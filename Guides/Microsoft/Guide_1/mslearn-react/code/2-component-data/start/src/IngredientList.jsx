import "./IngredientList.css"
import React from 'react';


function IngredientList(props){
    //Create the list items using map
    const IngredientListItems = props.ingredients.map((ingredient,index)=>{

        return(
            //Return the desired HTML for each ingredient

            <li key={index} className={ingredient.prepared ? 'prepared':''} >
                {ingredient.name}
            </li>
        );
    });

    //Return the HTML for the component 
    //IngredientListItems will be rendered as li elements
    return(
        <ul>
            {IngredientListItems}
        </ul>
    );


}

export default IngredientList;