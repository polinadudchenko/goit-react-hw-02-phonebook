import React, { Component } from 'react';
import './App.css';
import ContactForm from './ContactForm';
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  
  state = {
  contacts: [],
  name: ''
  }
  
  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();    
    this.setState(( prevState ) => ({
      contacts: prevState.contacts.push(uuidv1(), this.state.name)
    }))
  }

  render() {
    return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onHandleChange={this.handleChange} onHandleSubmit={this.handleSubmit} />

      {/* <h2>Contacts</h2>
      <Filter ... />
      <ContactList ... /> */}
    </div>
  );
  }
  
}

export default App;
