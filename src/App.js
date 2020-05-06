import React from 'react';
import './App.module.css'
import UserForm from './components/UserForm.jsx';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container alignContent='center' justify='center'>
      <UserForm />
    </Grid>
  );
}

export default App;
