import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import s from './App.module.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'
import Section from './components/Section'

class App extends Component {
  
  state = {
  contacts: [{id: 'ba9f1e30-400f-11ec-ac3d-5f326bb2dcb7', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'b7fcfc20-400f-11ec-ac3d-5f326bb2dcb7', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'ba9f1e40-400f-11ec-ac3d-5f326bb2dcb7', name: 'Eden Clements', number: '645-17-79'},
    {id: 'c907a010-400f-11ec-ac3d-5f326bb2dcb7', name: 'Annie Copeland', number: '227-91-26'},],
    /* name: '',
    number: '', */
    filter: '',
  }
  
  /* handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.target.value })
  } */

  onHandlerSubmit = contact => {
    this.setState((prevState) => ({
        contacts: [...prevState.contacts, { id: uuidv1(), name: contact.name, number: contact.number }]
        }))
  }

  handleFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getFilteredContacts = () => {
    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return filteredContacts;
  }

  render() {
    return (
      <div className={s.App}>
        <h1>Phonebook</h1>
        <div className={s.App_content}>
        <Section title="Create a new Contact">
        <ContactForm /* onHandleChange={this.handleChange} onHandleChangeNumber={ this.handleChange}  */onSubmit={this.onHandlerSubmit} />
        </Section>
       
        <Section title="Contacts">
            <Filter onHandleFilter={this.handleFilter} />
            {this.getFilteredContacts().length === 0
                ? console.log('ooops')
                :<ContactList contacts={ this.state.filter ? this.getFilteredContacts() : this.state.contacts}/>
            }
          </Section>
        </div>
    </div>
  )
  }
  
}

export default App;
