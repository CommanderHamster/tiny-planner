import {createSlice} from "@reduxjs/toolkit"
import {merge} from 'lodash'

const mealPlanSlice = createSlice({
  name: 'mealPlanR',
  initialState: {},
  reducers: {
    addMeal: (state, action) => { return merge({}, state, { [action.payload.label]: action.payload }) },
  }
})

export const { addMeal } = mealPlanSlice.actions

export default mealPlanSlice.reducer
