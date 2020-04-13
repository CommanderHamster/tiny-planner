import React from "react"
import {Field, FormErrors, InjectedFormProps, reduxForm} from 'redux-form'
import SelectField from '../fields/SelectField/SelectField'
import InputField from '../fields/InputField/InputField'
import { GET_SEARCH_REQUESTED } from '../../store/reducers/search'
import { Button, Row, Col } from 'react-bootstrap'
import { map } from 'lodash'


interface FormValues {
  q: string,
  mealType: {value: string, label: string}[],
  diet: {value: string, label: string}[],
  health: {value: string, label: string}[],
  cuisineType: {value: string, label: string}[],
}

const searchFormSubmit = (values: FormValues , dispatch: any) => {
  dispatch(GET_SEARCH_REQUESTED({
      q: values.q,
      mealType: map(values.mealType, ({value}) => value),
      diet: map(values.diet, ({value}) => value),
      health: map(values.health, ({value}) => value),
      cuisineType: map(values.cuisineType, ({value}) => value)
      // from: '0',
      // to: '3',
      // calories: '591-722',
    }))
}

const searchFormValidate = (values: FormValues): FormErrors<FormValues> => {
  return {
    q: !values.q ? 'Search value is required' : ''
  }
}

function RecipeSearchForm(props: InjectedFormProps<FormValues, any>) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Row>
        <Col className="w-100 mb-1" style={{ fontWeight: "bold" }}>Search Recipes</Col>
      </Row>
      <Row>
        <Col className="w-100">
          <Field
            name="q"
            component={InputField}
            type="text"
            placeholder="Search"
          />
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <label className="w-100">
            <div className="mb-1">Meal Type</div>
            <Field
              name="mealType"
              component={SelectField}
              options={[
                { label: 'Breakfast', value: 'Breakfast' },
                { label: 'Lunch', value: 'Lunch' },
                { label: 'Dinner', value: 'Dinner' },
                { label: 'Snack', value: 'Snack' }
              ]}
            />
          </label>
        </Col>
        <Col>
          <label className="w-100">
            <div className="mb-1">Diet</div>
            <Field
              name="diet"
              component={SelectField}
              options={[
                { label: 'balanced', value: 'balanced' },
                { label: 'high-protein', value: 'high-protein' },
                { label: 'high-fiber', value: 'high-fiber' },
                { label: 'low-fat', value: 'low-fat' },
                { label: 'low-carb', value: 'low-carb' },
                { label: 'low-sodium', value: 'low-sodium' }
              ]}
            />
          </label>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <label className="w-100">
            <div className="mb-1">Health Type</div>
            <Field
              name="health"
              component={SelectField}
              options={[
                { label: 'Bread', value: 'Bread' },
                { label: 'Cereals', value: 'Cereals' },
                { label: 'Condiments and sauces', value: 'Condiments and sauces' },
                { label: 'Drinks', value: 'Drinks' },
                { label: 'Desserts', value: 'Desserts' },
                { label: 'Main course', value: 'Main course' },
                { label: 'Pancake', value: 'Pancake' },
                { label: 'Preps', value: 'Preps' },
                { label: 'Preserve', value: 'Preserve' },
                { label: 'Salad', value: 'Salad' },
                { label: 'Sandwiches', value: 'Sandwiches' },
                { label: 'Side dish', value: 'Side dish' },
                { label: 'Soup', value: 'Soup' },
                { label: 'Starter', value: 'Starter' },
                { label: 'Sweets', value: 'Sweets' },
              ]}
            />
          </label>
        </Col>

        <Col>
          <label className="w-100">
            <div className="mb-1">Cuisine Type</div>
            <Field
              name="cuisineType"
              component={SelectField}
              options={[
                { label: 'American', value: 'American' },
                { label: 'Asian', value: 'Asian' },
                { label: 'British', value: 'British' },
                { label: 'Caribbean', value: 'Caribbean' },
                { label: 'Central Europe', value: 'Central Europe' },
                { label: 'Chinese', value: 'Chinese' },
                { label: 'Eastern Europe', value: 'Eastern Europe' },
                { label: 'French', value: 'French' },
                { label: 'Indian', value: 'Indian' },
                { label: 'Italian', value: 'Italian' },
                { label: 'Japanese', value: 'Japanese' },
                { label: 'Kosher', value: 'Kosher' },
                { label: 'Mediterranean', value: 'Mediterranean' },
                { label: 'Mexican', value: 'Mexican' },
                { label: 'Middle Eastern', value: 'Middle Eastern' },
                { label: 'Nordic', value: 'Nordic' },
                { label: 'South American', value: 'South American' },
                { label: 'South East Asian', value: 'South East Asian' },
              ]}
            />
          </label>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="w-100">
          <Button className="float-right" value="Search" type="submit">Search</Button>
        </Col>
      </Row>
    </form>
  )
}

// export default RecipeSearchForm
export default reduxForm({
    form: 'SEARCH_FORM',
    onSubmit: searchFormSubmit,
    validate: searchFormValidate
  }
)(RecipeSearchForm)
