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

class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };


  render() {
    const { values, handleChange, title } = this.props;
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
            <Typography variant="h6">{title}</Typography>
          </Toolbar>
        </AppBar>
        <br/>
        <Grid >
          <TextField 
            label="Enter your Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br/>
          <TextField 
            label="Enter your City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br/>
          <TextField 
            label="Enter your Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br/>
          <Button
            variant="contained"
            color="secondary"
            style={{marginTop: '10px', marginRight: '5px'}}
            onClick={this.previous}
          >
            Back
          </Button>
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

export default FormPersonalDetails
