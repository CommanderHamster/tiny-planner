import React from 'react'
import { useSelector } from "react-redux"
import {Button, Row, Table} from "react-bootstrap"
import {map, isEmpty} from 'lodash'

const MealPlan = () => {
  const mealPlanR = useSelector((state: {mealPlanR: any}) => state.mealPlanR)
  const isMealPlanEmpty = isEmpty(mealPlanR)
  debugger
  return (
    <div>
      <h3>Meal Plan</h3>

      {
        isMealPlanEmpty && <div>No Meals</div>
      }

      {
        !isMealPlanEmpty &&
        <Table>
          <thead>
          <tr>
            <th>Dish Name</th>
          </tr>
          </thead>
          <tbody>
          {
            map(mealPlanR, (meal) => {
              return (
                <tr key={meal.label}>
                  <td>{meal.label}</td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
      }
    </div>
  )
}

export default MealPlan
