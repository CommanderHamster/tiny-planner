import React, {useState} from 'react'
import {Button} from "react-bootstrap";
import {map} from 'lodash'

const RecipeDetails = (props: { recipe: any }) => {
  const [displayDetails, setDisplayDetails] = useState(false)
  return (
    <div className="RecipeDetails">
      <Button size="sm" variant="secondary" onClick={() => setDisplayDetails(!displayDetails)}>{props.recipe.label}</Button>

      {
        displayDetails &&
          <div className="details m-2">
            <div>
              <img className="mb-2" src={props.recipe.image} alt={props.recipe.label} />
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href={props.recipe.url}>Instructions</a>
            </div>
            <div>
              <strong>Diet Labels: </strong>

              {
                map(props.recipe.dietLabels, (dietLabel, key: number) => {
                  return <span key={props.recipe.label + dietLabel}>{(key === 0 ? '' : ', ') + dietLabel}</span>
                })
              }
            </div>
            <div>
              <strong>Health Labels: </strong>

              {
                map(props.recipe.healthLabels, (healthLabel, key: number) => {
                  return <span key={props.recipe.label + healthLabel}>{(key === 0 ? '' : ', ') + healthLabel}</span>
                })
              }
            </div>
            <div>
              <strong>Ingredients: </strong>

              {
                map(props.recipe.ingredients, (ingredient, key: number) => {
                  return (
                    <div key={props.recipe.label + ingredient} className="ml-2">
                      {ingredient.text}
                    </div>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default RecipeDetails
