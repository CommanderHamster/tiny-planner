import React from 'react'
import { useSelector } from "react-redux"
import { addMeal } from '../../store/reducers/mealPlan'
import {Button, Row, Table} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import {map, isEmpty} from 'lodash'

const RecipeResults = () => {
  const searchR = useSelector((state: {searchR: any}) => state.searchR)
  const isSearchEmpty = isEmpty(searchR.hits)
  const isEmptyMessage = searchR.loading ? 'loading...' : 'No Results'
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Results</h3>

      {
        isSearchEmpty && <div>{isEmptyMessage}</div>
      }

      {
        !isSearchEmpty &&
        <Table>
          <thead>
            <tr>
              <th>Dish Name</th>
              <th>Add to Meal Plan</th>
            </tr>
          </thead>
          <tbody>
          {
            map(searchR.hits, ({recipe}: any) => {
              return (
                <tr key={recipe.label}>
                  <td>{recipe.label}</td>
                  <td><Button onClick={() => dispatch(addMeal(recipe))}>Add</Button></td>
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

export default RecipeResults
