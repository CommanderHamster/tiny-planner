import React from 'react'
import RecipeSearchForm from '../RecipeSearchForm/RecipeSearchForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import RecipeResults from "../RecipeResults/ReceipeResults";
import MealPlan from "../MealPlan/MealPlan";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="App-header">
            Surely Meal Planner
          </h1>
        </Col>
      </Row>
      <RecipeSearchForm />
      <RecipeResults />
      <MealPlan />
    </Container>
  )
}

export default App
