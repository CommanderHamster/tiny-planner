import {createSlice} from "@reduxjs/toolkit"

const mealPlanSlice = createSlice({
  name: 'mealPlanR',
  initialState: [],
  reducers: {
    addMeal: (state, action) => state.concat(action.payload),
  }
})

export const { addMeal } = mealPlanSlice.actions

export default mealPlanSlice.reducer
