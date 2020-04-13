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
        <Button className="m-1" size="sm" onClick={() => setDaySelected('Sunday')}>Sunday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('Monday')}>Monday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('Tuesday')}>Tuesday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('Wednesday')}>Wednesday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('Thursday')}>Thursday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('Friday')}>Friday</Button>
        <Button className="m-1" size="sm" onClick={() => setDaySelected('Saturday')}>Saturday</Button>
      </div>
    )
  }

  if (!mealTypeSelected) {
    return (
      <div>
        <Button className="m-1" size="sm" onClick={addToMealPlan('Breakfast')}>Breakfast</Button>
        <Button className="m-1" size="sm" onClick={addToMealPlan('Lunch')}>Lunch</Button>
        <Button className="m-1" size="sm" onClick={addToMealPlan('Dinner')}>Dinner</Button>
        <Button className="m-1" size="sm" onClick={addToMealPlan('Snack')}>Snack</Button>
      </div>
    )
  }

  return <Button className="m-1" size="sm" disabled>Added</Button>
}

export default AddMealButton
