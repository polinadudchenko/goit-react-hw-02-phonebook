import React, { Component } from "react";
import PropTypes from 'prop-types'
import { v1 as uuidv1 } from 'uuid';
import s from './ContactList.module.css'

class ContactList extends Component{

    render() {
        const { contacts } = this.props;
        console.log(contacts);
        return <ul className={s.contact_list}>
            {contacts.map(({id, name}) => {
                return <li key={id } className={s.contact_list__item}>
                    {name}
                </li>})}
            
        </ul>
    }
}

export default ContactList