import React, { Component } from "react";
import {
  AppBar,
  Typography,
  Button,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";

class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }, title
    } = this.props;
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
        <br />
        <Grid>
          <List component="nav">
            <ListItem alignItems="end">
              <ListItemText primary="First Name:" />
              {firstName}
            </ListItem>
            <ListItem alignItems="end">
              <ListItemText primary="Last Name:" />
              {lastName}
            </ListItem>
            <ListItem alignItems="end">
              <ListItemText primary="Email:" />
              {email}
            </ListItem>
            <ListItem alignItems="end">
              <ListItemText primary="Occupation:" />
              {occupation}
            </ListItem>
            <ListItem alignItems="end">
              <ListItemText primary="City:" />
              {city}
            </ListItem>
            <ListItem alignItems="end">
              <ListItemText primary="Bio:" />
              {bio}
            </ListItem>
          </List>
          <br />
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "10px", marginRight: "5px" }}
            onClick={this.previous}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
            onClick={this.continue}
          >
            Confirm & Continue
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Confirm;
