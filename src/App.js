import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import s from './App.module.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  
  state = {
  contacts: [{id: 'ba9f1e30-400f-11ec-ac3d-5f326bb2dcb7', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'b7fcfc20-400f-11ec-ac3d-5f326bb2dcb7', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'ba9f1e40-400f-11ec-ac3d-5f326bb2dcb7', name: 'Eden Clements', number: '645-17-79'},
    {id: 'c907a010-400f-11ec-ac3d-5f326bb2dcb7', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
  }
  
  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: uuidv1(), name: this.state.name, number: this.state.number }]
    }))
  }

  render() {
    return (
      <div className={s.App}>
      <h1>Phonebook</h1>
        <ContactForm onHandleChange={this.handleChange} onHandleChangeNumber={ this.handleChange} onHandleSubmit={this.handleSubmit} />

      <h2>Contacts</h2>
      {/* <Filter ... /> */}
        <ContactList contacts={ this.state.contacts}/>
    </div>
  );
  }
  
}

export default App;
