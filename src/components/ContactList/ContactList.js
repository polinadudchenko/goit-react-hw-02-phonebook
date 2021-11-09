import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Contact from '../Contact';

class ContactList extends Component{
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
        onDeleteContact: PropTypes.func,
    }

    render() {
        const { contacts, onDeleteContact } = this.props;
        return <table className={s.contact_list} >
            <thead>
                <tr>
                   <th>Name</th>
                   <th>Number</th>
                   <th>Обработать</th>
                </tr>
            </thead>
            <tbody>
            {contacts.map(({ id, name, number }) => (
                <tr key={id} className={s.contact_list__item}>
                    <Contact name={name} number={number} deleteBtn={() => onDeleteContact(id) }/>
                </tr>)
            )}
            </tbody> 
        </table> 
    }
}

export default ContactList