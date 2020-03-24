import React, {Component} from 'react';
import Aux from '../../AuxHoc';
import Burguer from '../../components/burguer/Burguer';
import BuildControls from '../../components/burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/burguer/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurguerBuilder extends Component {

  //  constructor(props) {
  //      super(props);
  //      this.state= {...}
  //  }

  state = {
      ingredients: {
          salad:0,  // esto es un object, keys son los names values son los numeros
          bacon: 0,
          cheese: 0,
          meat: 0
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
  }

  updatePurchaseState (ingredients) {  
      const sum = Object.keys(ingredients)
      .map (igKey => {
              return ingredients[igKey];
          })
       .reduce ((sum, el) => {
            return sum + el;
       }, 0);
    this.setState({purchasable: sum > 0});
  
    //usamos .map para obtener los keys o sea los numeros
    //usamos reduce para reducirlos a un solo numero
    // sum > 0 porque si es mayor a cero va a ser true  
  }

  addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice =oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
     if (oldCount <= 0) {
         return;
     } //esto es para evitarq que haya error cuando hay 0 ingredientes

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
}

  purchaseHandler = () => {
    this.setState({purchasing: true})
}


    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
            //esto es para saber si la key o sea salad meat
            //es cero, entonces con <=0 pasa a ser true or false,
            //para saber si el boton debe ser disabled or not
            //esto lo pasamos mas abajo a buildControls
            // sería {salad: true, meat: false, ...}
        }
        return (
            <Aux>
              <Modal show={this.state.purchasing}>
                 <OrderSummary ingredients={this.state.ingredients}/>
              </Modal>
              <Burguer ingredients={this.state.ingredients}/>
              <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disabled={disabledInfo} 
              purchasable={this.state.purchasable} 
              ordered={this.purchaseHandler}
              price={this.state.totalPrice}/>
             

            </Aux>
        );
    }
}

export default BurguerBuilder;