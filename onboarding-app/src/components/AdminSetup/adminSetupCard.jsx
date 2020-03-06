import React from 'react';
import { Grid, Icon, Button, Form } from 'semantic-ui-react'

import '../commonStyles.scss';
import './adminSetupCard.scss'

import AdminEmail from './AdminEmail';

const adminSetupCard = ({ errors, handleChange, handleBackButton, admins, removeMail, addAdminMail, newAdminMail, handleFinalSubmit }) => (

  <div className='form-body'>
    <h1> Way to go ! </h1>
    <h3 className='sub-heading' >Let us know who should be admins in this setup, then you are on your way</h3>
    <Form>
      <Grid columns='equal'>

        <Grid.Row>
          <Grid.Column>
            <Form.Field>
              <input placeholder='Type email' name='newAdminMail' value={newAdminMail} onChange={handleChange} />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>

         
        <Grid.Row>
          <Grid.Column>
            <div className='centered-content'>
              <Button icon circular className='addButton'>
                <Icon name='add' onClick={() => addAdminMail(newAdminMail)} />
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
        

        {admins.length > 0 &&
          <Grid.Row>
            <Grid.Column>
              {
                admins.map((adminMail, index) => <AdminEmail key={index} email={adminMail} removeMail={removeMail} />)
              }
            </Grid.Column>
          </Grid.Row>
        }

        {errors.length > 0 &&
          <Grid.Row>
            <Grid.Column>
              {
                errors.map((err, index) => <p className='errMessage' key={index}> <span> <i className="cancel icon"></i></span>{err} </p>)
              }
            </Grid.Column>
          </Grid.Row>
        }

        <Grid.Row className='buttons-row'>
          <Grid.Column>
            <div className='centered-content'>
              <Button className='btn purple-btn' onClick={handleBackButton}> back </Button>
              <Button className='btn green-btn' onClick={handleFinalSubmit}>finish</Button>
            </div>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Form>
  </div>



);

export default adminSetupCard;