import React from 'react'
import { useSelector } from "react-redux"
import {map, isEmpty, groupBy} from 'lodash'
import MealPlanDay from "../MealPlanDay/MealPlanDay";

const MealPlan = () => {
  const mealPlanR = useSelector((state: {mealPlanR: any}) => state.mealPlanR)
  const isMealPlanEmpty = isEmpty(mealPlanR)
  const mealPlanGroupedByDay = groupBy(mealPlanR, 'day')
  return (
    <div className="MealPlan mb-5">
      <h3>Meal Plan</h3>

      {
        isMealPlanEmpty && <div>No Meals</div>
      }

      {
        !isMealPlanEmpty &&
        map(mealPlanGroupedByDay, (recipes, day) => {
          return <MealPlanDay key={day} day={day} recipes={recipes} />
        })
      }
    </div>
  )
}

export default MealPlan
