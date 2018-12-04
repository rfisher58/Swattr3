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
import NewCard from "../NewCards/NewCards"
import "./edit.css";
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';




export default class Edit extends React.Component {
  state = {
    open: false,
    title:"",
    description: "",
    link: "",
    dueDate: Date,
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
componentDidMount(){
  console.log(this.props)
  this.setState({
    title:this.props.bug.title,
    description:this.props.bug.description,
    link: this.props.bug.link,
    dueDate: this.props.bug.dueDate,
    pay: this.props.bug.pay,
    languages: this.props.languages,
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

// post bug to database
postBug = id =>{
  console.log(this.state);

  Axios.put(`/api/bugs/${id}`, this.state).then((response)=>{
    this.setState({
      title: "",
      description: "",
      link: "",
      dueDate: Date,
      pay: null,
      languages: [],
    })
  })
  this.handleClose();
}


// delete bug from data base
deleteBug = id => {
    console.log(id);
    Axios.delete(`/api/bugs/${id}`).then((response)=>{
        console.log(response)
    })
    this.handleClose();
}

// edit bugs

editBug = event => {

}


  render() {
    return (
      
      <div>
         <Tooltip title="Edit Bug" aria-label="Add">
          <Fab color="secondary" aria-label="Edit" onClick={this.handleClickOpen}>
            <Icon>edit_icon</Icon>
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
              defaultValue = {this.props.bug.title}
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
              defaultValue = {this.props.bug.description}
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
              defaultValue = {this.props.bug.link}
              name="link"
              autoFocus
              margin="dense"
              id="link"
              label="GitHub Link"
              type="link"
              fullWidth
              onChange = {this.handleInputChange}
            />
            <TextField
              defaultValue = {this.props.bug.dueDate}
              name="dueDate"
              id="dueDate"
              label="Due Date"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
              onChange = {this.handleInputChange}
            />
            <TextField
              defaultValue = {this.props.bug.pay}
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
              defaultValue = {this.props.bug.languages}
              name="languages"
              onChange = {this.handleInputChange}
               />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={(event) =>{ event.preventDefault(); this.postBug(this.props.bug._id)}} color="primary" >
              Update Bug
            </Button>
            <Button onClick={(event) =>{ event.preventDefault(); this.deleteBug(this.props.bug._id)}} color="primary" >
              Delete Bug
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}





