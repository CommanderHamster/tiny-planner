import React from 'react'
import {groupBy, map} from 'lodash'
import RecipeDetails from '../RecipeDetails/RecipeDetails'

const MealPlanDay = (props: { key: string, day: string, recipes: any[] }) => {
  const recipesByMealType = groupBy(props.recipes, 'mealType')

  return (
    <div className="ml-2" key={props.key}>
      <h4>{props.day}</h4>

      {
        map(recipesByMealType, (mealTypeRecipes, mealType) => {
          return (
            <div className="ml-2" key={props.day + mealType}>
              <h5>{mealType}</h5>
              <div className="ml-2">
                {
                  map(mealTypeRecipes, ({recipe}) => {
                    return <RecipeDetails recipe={recipe} />
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default MealPlanDay
