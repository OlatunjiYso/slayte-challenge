import React from 'react';
import { Grid, Button, Form } from 'semantic-ui-react'

import '../commonStyles.scss';

const userDetailCard = ({handleChange, handleProceed, errors, firstname, lastname, email, submitted}) => (

  <div className='form-body'>
    { submitted &&  <p style={{textAlign:'center', fontSize:'1.8rem'}}> Submitted! Thanks 🤝</p> }
    <h1> Hi there. </h1>
    <Form>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Form.Field>
              <label>First Name</label>
              <input name='firstname' value={firstname} onChange={handleChange}/>
            </Form.Field>
          </Grid.Column>
          <Grid.Column>
            <Form.Field>
              <label>Last Name</label>
              <input name='lastname' value={lastname} onChange={handleChange}/>
            </Form.Field>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Form.Field>
              <label>Email</label>
              <input name='email' value={email} onChange={handleChange} type='email'/>
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
          <Grid.Column>
              <Button fluid className="btn purple-btn" onClick={handleProceed} > Proceed</Button>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Form>
  </div>



);

export default userDetailCard;