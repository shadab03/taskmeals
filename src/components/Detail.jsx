import React from 'react'

import card from '../styles/card.css';
import styles from '../styles/MealDetail.Module.css';

const Detail = ({meal}) => {

 
    const renderIngrediants = (meal) => {
        const ingrediants = [];
        for (let index = 1; index <= 20; index += 1) {
          const ingrediant = meal[`strIngredient${index}`];
          if (ingrediant) {
            const measure = meal[`strMeasure${index}`];
            const element = (
              <li key={index}>
                <span>
                  {measure}
                </span>
                <span>-</span>
                <span>
                  {ingrediant}
                </span>
              </li>
            );
            ingrediants.push(element);
          }
        }
        return ingrediants;
      };
    
      const renderInstructions = (instructions) => {
        if (instructions) {
          const list = instructions.split(new RegExp(/\n/)).filter((item) => item.length > 1);
          return (
            <ul className={styles.items}>
              {/* eslint-disable-next-line */}
              {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          );
        }
        return instructions;
      };

  return (
    <div>
    <div className={'card-detail'}>
      <img className={'card-img'} src={meal.strMealThumb} alt={meal.strMeal} />
      <div>
        <h3 className={'card-title'}>{meal.strMeal}</h3>
        <div className={styles.ingredients}>
          <h4 className={styles.heading}>Ingredients</h4>
          <ul className={styles.listItem}>
            {renderIngrediants(meal)}
          </ul>
        </div>
        <div className={styles.instructions}>
          <h4 className={styles.heading}>Instructions</h4>
          <div data-testid="meal-description" className={styles.instructions}>
            {renderInstructions(meal.strInstructions)}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Detail