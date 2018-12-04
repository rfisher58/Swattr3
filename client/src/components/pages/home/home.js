import React, {Component} from "react";
import Navbar from "../../navbar/navbar";
import NavBar from "../../dialog/dialog";
import NewCards from "../../NewCards/NewCards";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Axios from "axios";


// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
  
// });




class App extends Component {
  state = { bugs: [] };

  // methods
  //   get data from the backend to render
  componentDidMount() {
    Axios.get('/api/bugs').then((response) => {
      console.log(response)
      this.setState({
        bugs:response.data
      })
    })
  }

    render() {

      return (
        <div className="App">
       
         <div className = "MenuAppBar"><Navbar /></div>
         <Grid container spacing = {24}>
         { 
           this.state.bugs.map((bug, index) => {
                return (
                  
                  <NewCards key={"bugs" + index} bug={bug} expanded={this.state.expanded} handleExpandClick={this.handleExpandClick} edit="false"/>
                  
                )
           })
          }
        </Grid>
        </div>
      );
    }
  }
  export default App;



 