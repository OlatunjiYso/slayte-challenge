import React, { Component } from 'react';

import UserDetailCard from '../UserDetail/userDetailCard';
import UserGoalCard from '../UserGoal/userGoalCard';
import AdminSetupCard from '../AdminSetup/adminSetupCard';

import { validateEmail } from '../FormUtility/formValidations';


class Onboarding extends Component {

  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      firstGoal: '',
      secondGoal: '',
      thirdGoal: '',
      adminEmail: '',
      displayUserDetailCard: true,
      displayUserGoalCard: false,
      displayAdminSetupCard: false,
      errors: [],
      admins: [],
      newAdminMail: '',
      submitted: false
    }
    this.baseState = this.state 
  }

  // reset state
  resetState = () => {
    this.setState(this.baseState);
  }


  //handle Button clicks
  handleUserDetailsProceedButton = (e) => {
    e.preventDefault();
    let { firstname, lastname, email } = this.state;
    let errors = [];
    if (firstname.trim().length < 2) errors.push('Please enter firstname');
    if (lastname.trim().length < 2) errors.push('Please enter lastname');
    if (!validateEmail(email)) errors.push('enter a valid email');
    if (errors.length > 0) {
      this.setState({ errors });
    } else {
      this.setState({
        errors: [],
        displayUserDetailCard: false,
        displayUserGoalCard: true,
        displayAdminSetupCard: false,
      });
    }
  }

  handleUserGoalsBackButton = (e) => {
    e.preventDefault();
      this.setState({
        errors: [],
        displayUserDetailCard: true,
        displayUserGoalCard: false,
        displayAdminSetupCard: false,
      });
  }

  handleUserGoalsProceedButton = (e) => {
    e.preventDefault();
    let { firstGoal, secondGoal, thirdGoal } = this.state;
    if (firstGoal.trim().length < 2 && secondGoal.trim().length < 2 && thirdGoal.trim().length < 2) {
      this.setState({ errors: ['Please add at least one goal'] });
    } else {
      this.setState({
        errors: [],
        displayUserDetailCard: false,
        displayUserGoalCard: false,
        displayAdminSetupCard: true,
      });
    }
  }

  handleAdminSetupBackButton = (e) => {
    e.preventDefault();
      this.setState({
        errors: [],
        displayUserDetailCard: false,
        displayUserGoalCard: true,
        displayAdminSetupCard: false,
      });
  }

  handleAdminFinalSubmit = (e) => {
    e.preventDefault(e)
    if (this.state.admins.length < 1) {
      this.setState({ errors: ['Add at least one admin email']});
    } else {
      this.resetState();
      this.setState({ submitted: true});
      setTimeout(()=> {
        this.setState({ submitted: false })
      }, 4000);
    }
  }

  handleAdminSetupBackButton = (e) => {
    e.preventDefault();
      this.setState({
        errors: [],
        displayUserDetailCard: false,
        displayUserGoalCard: true,
        displayAdminSetupCard: false,
      });
  }

  handleAddAdminMail = (email) => {
    if (!validateEmail(email)) {
      this.setState({ errors: ['please enter a valid email']});
    } else {
      let { admins } = this.state;
      let updatedAmins = [...admins, email]
      this.setState({ admins: updatedAmins, errors:[], newAdminMail: '' });
    }
  }

  handleRemoveAdminMail = (email) => {
    let { admins } = this.state;
    let updatedAmins = admins.filter((adminEmail)=> adminEmail !== email);
    this.setState({ admins: updatedAmins});
  }


  // Handle user inputs
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }



  render() {
    let { displayUserGoalCard, displayUserDetailCard,displayAdminSetupCard, firstname, lastname, email, errors, firstGoal, secondGoal, thirdGoal, admins, newAdminMail, submitted } = this.state;

    return (
      <div>
        {
          displayUserDetailCard &&
          <UserDetailCard
            firstname={firstname}
            lastname={lastname}
            email={email}
            handleProceed={this.handleUserDetailsProceedButton}
            handleChange={this.handleChange}
            errors={errors} 
            submitted={submitted}/>
        }
        {
          displayUserGoalCard &&
          <UserGoalCard
            firstname={firstname}
            firstGoal={firstGoal}
            secondGoal={secondGoal}
            thirdGoal={thirdGoal}
            handleBack={this.handleUserGoalsBackButton}
            handleProceed={this.handleUserGoalsProceedButton}
            handleChange={this.handleChange}
            errors={errors} />
        }
        {
         displayAdminSetupCard &&
          <AdminSetupCard
            handleBackButton={this.handleAdminSetupBackButton}
            handleFinalSubmit={this.handleAdminFinalSubmit}
            handleChange={this.handleChange}
            removeMail={this.handleRemoveAdminMail}
            addAdminMail={this.handleAddAdminMail}
            newAdminMail={newAdminMail}
            admins={admins}
            errors={errors} />
        }
      </div>
    )
  }
}


export default Onboarding;