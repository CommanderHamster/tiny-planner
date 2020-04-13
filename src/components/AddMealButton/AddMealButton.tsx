import React, { useState } from 'react'
import { addMeal } from '../../store/reducers/mealPlan'
import {Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'

const AddMealButton = (props: { recipe: any }) => {
  const [addSelected, setAddSelected] = useState(false)
  const [daySelected, setDaySelected] = useState('')
  const [mealTypeSelected, setMealTypeSelected] = useState('')
  const dispatch = useDispatch()

  const addToMealPlan = (mealType: string) => {
    return () => {
      dispatch(addMeal({
        recipe: props.recipe,
        day: daySelected,
        mealType,
      }))
      setMealTypeSelected(mealType)
    }
  }

  if (!addSelected) {
    return <Button className="m-1" size="sm" onClick={() => setAddSelected(true)}>Add</Button>
  }

  if (!daySelected) {
    return (
      <div>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('sun')}>Sunday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('mon')}>Monday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('tue')}>Tuesday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('wed')}>Wednesday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('thu')}>Thursday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('fri')}>Friday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('sat')}>Saturday</Button>
      </div>
    )
  }

  if (!mealTypeSelected) {
    return (
      <div>
        <Button className="m-1" size="sm" onClick={addToMealPlan('breakfast')}>Breakfast</Button>
        <Button className="m-1" size="sm" onClick={addToMealPlan('lunch')}>Lunch</Button>
        <Button className="m-1" size="sm" onClick={addToMealPlan('dinner')}>Dinner</Button>
        <Button className="m-1" size="sm" onClick={addToMealPlan('snack')}>Snack</Button>
      </div>
    )
  }

  return <Button className="m-1" size="sm" disabled>Added</Button>
}

export default AddMealButton
