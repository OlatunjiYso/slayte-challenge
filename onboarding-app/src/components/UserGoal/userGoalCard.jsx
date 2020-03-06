import React from 'react';
import { Grid, Input, Header, Button, Form } from 'semantic-ui-react'

import '../commonStyles.scss';
import './userGoalCard.scss'

const userGoalCard = ({firstname, handleChange, handleBack, handleProceed, errors, firstGoal, secondGoal, thirdGoal}) => (

  <div className='form-body'>
    <h1> Hi {firstname} </h1>
    <Header as='h3'>What are your main goals with Slayte</Header>
    <Form>
      <Grid columns='equal'>

        <Grid.Row>
          <Grid.Column>
            <Form.Field inline>
              <label>1.</label>
              <Input className='goal-input' name='firstGoal' value={firstGoal}onChange={handleChange} />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column className='goal-input-row'>
            <Form.Field inline>
              <label>2.</label>
              <Input className='goal-input' name='secondGoal' value={secondGoal} onChange={handleChange}/>
            </Form.Field>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Form.Field inline>
              <label>3.</label>
              <Input className='goal-input' name='thirdGoal' value={thirdGoal} onChange={handleChange}/>
            </Form.Field>
          </Grid.Column>
        </Grid.Row>

        { errors.length> 0 && 
        <Grid.Row>
          <Grid.Column>
            {
              errors.map((err, index) => <p className='errMessage'key={index}> <span> <i className="cancel icon"></i></span>{err} </p>)
            }
          </Grid.Column>
        </Grid.Row>
        }



        <Grid.Row className='buttons-row'>
          <Grid.Column style={{textAlign: 'center'}}>
            <Button className='btn purple-btn' onClick={handleBack}> back </Button>
            <Button className='btn purple-btn' onClick={handleProceed}>proceed</Button>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Form>
  </div>



);

export default userGoalCard;