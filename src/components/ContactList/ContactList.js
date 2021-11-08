import React, { Component } from "react";
import PropTypes from 'prop-types'
import { v1 as uuidv1 } from 'uuid';
import s from './ContactList.module.css'
import  Contact from '../Contact'

class ContactList extends Component{

    render() {
        const { contacts } = this.props;
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
                    <Contact name={name} number={number} />
                </tr>)
            )}
            </tbody> 
        </table> 
    }
}

export default ContactList