import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LongMenu from '../language/language';
import Axios from "axios";
import Tooltip from '@material-ui/core/Tooltip';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    title:"",
    description: "",
    link: "",
    dueDate:"",
    pay: "",
    languages: [],

  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


// Methods

handleDateChange = (event, date) =>{
 this.setState ({
   dueDate: date
 })
}

handleInputChange = event => {
  let value = event.target.value;
  let name = event.target.name;
  this.setState({
    [name]: value
  })
  console.log(value);
}

postBug = event =>{
  event.preventDefault();
  console.log(this.state);

  Axios.post('/api/bugs', this.state).then((response)=>{
    this.setState({
      title: "",
      description: "",
      link: "",
      dueDate: null,
      pay: null,
      languages: [],
    })
    
  })


  this.handleClose();
}


  render() {
    return (
      <div>
        <Tooltip title="Create Bug" aria-label="Add">
          <Fab onClick={this.handleClickOpen} color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Bug</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the below information 
            </DialogContentText>
            <TextField
              value = {this.state.title}
              name="title"
              autoFocus
              margin="dense"
              id="name"
              label="Bug Title"
              type="title"
              fullWidth
              onChange = {this.handleInputChange}
            />
            <TextField
              value = {this.state.description}
              name="description"
              autoFocus
              margin="dense"
              id="name"
              label="Bug description"
              type="description"
              fullWidth
              onChange = {this.handleInputChange}
            />
            
            <TextField
              value = {this.state.link}
              name="link"
              autoFocus
              margin="dense"
              id="link"
              label="GitHub Link"
              type="link"
              fullWidth
              onChange = {this.handleInputChange}
            />
          <form>
            <TextField
              value = {this.state.dueDate}
              name="dueDate"
              id="date"
              label="Due Date"
              type="date"
              onChange = {this.handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </form>
            <TextField
              value = {this.state.pay}
              name="pay"
              autoFocus
              margin="dense"
              id="name"
              label="Pay"
              type="pay"
              fullWidth
              onChange = {this.handleInputChange}
            />
            <div>
              <LongMenu
              value = {this.state.languages}
              name="languages"
              onChange = {this.handleInputChange}
               />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.postBug} color="primary" >
              Post Bug
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}