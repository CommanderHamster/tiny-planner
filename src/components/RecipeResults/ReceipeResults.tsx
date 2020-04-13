import React from 'react'
import { useSelector } from "react-redux"
import {Table} from "react-bootstrap"
import {map, isEmpty} from 'lodash'
import AddMealButton from "../AddMealButton/AddMealButton";

const RecipeResults = () => {
  const searchR = useSelector((state: {searchR: any}) => state.searchR)
  const isSearchEmpty = isEmpty(searchR.hits)
  const isEmptyMessage = searchR.loading ? 'loading...' : 'No Results'

  return (
    <div className="mb-4">
      <h3 className="mb-3">Results</h3>

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
                  <td><AddMealButton recipe={recipe} /></td>
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
