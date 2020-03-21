import React from 'react';

import './Burguer.css';
import BurguerIngredient from './BurguerIngredients/BurguerIngredients';
import './BurguerIngredients/BurguerIngredients.css';

const burguer = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                //array con dos elementos
                return <BurguerIngredient key={igKey + i} type={igKey} />
        
            });//igkey es por ej salad e i es un numero que crea un id especial
        }) //ahora voy a reducir todo a un array para
        //ver si hay keys y values que aplicar en la hamburg
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
        console.log(transformedIngredients)
    return (
        <div className="Burguer">
            <BurguerIngredient type='bread-top' />
            {transformedIngredients}
            <BurguerIngredient type='bread-bottom' />
        </div>
    );
};

export default burguer;