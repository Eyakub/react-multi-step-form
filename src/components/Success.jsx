import React, { Component } from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class Success extends Component {

  render() {
    
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
            <Typography variant="h6">Confirm</Typography>
          </Toolbar>
        </AppBar>
        <h1>Thank you for your submission</h1>
        <p>You will get an email with further instruction</p>
      </React.Fragment>
    );
  }
}

export default Success
