import React, {Component} from "react";
import Navbar from "../../navbar/navbar";
import NavBar from "../../dialog/dialog";
import NewCards from "../../NewCards/NewCards";
import Grid from '@material-ui/core/Grid';
import Edit from "../../edit/edit";



class Account extends Component {

  
  // methods




  
  
    render() {
      return (
        <div className="App">
         <div className = "MenuAppBar"><Navbar /></div>
         <Grid container spacing = {24}>
         <Grid item xs = {3}>
        <NewCards />
        </Grid>
        </Grid>
        </div>
      );
    }
  }
  export default Account;