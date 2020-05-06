import React, { Component } from "react";
import {
  AppBar,
  TextField,
  Typography,
  Button,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { makeStyles, styled } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import {Grid} from '@material-ui/core';

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };


  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              size="medium"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Enter User Details</Typography>
          </Toolbar>
        </AppBar>
        <br/>
        <Grid >
          <TextField 
            label="Enter your first name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br/>
          <TextField 
            label="Enter your last name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br/>
          <TextField 
            label="Enter your Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br/>
          <Button
            variant="contained"
            color="primary"
            style={{marginTop: '10px'}}
            onClick={this.continue}
          >
            Continue
          </Button>
        </Grid>
        
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
