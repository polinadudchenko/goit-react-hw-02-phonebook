import React, { Component } from 'react';
import PropTypes from 'prop-types'
import s from './ContactForm.module.css'

class ContactForm extends Component{
    static propTypes = {
        onHandleSubmit: PropTypes.func,
        onHandleChange: PropTypes.func,
    }
    render() {
        const {onHandleSubmit, onHandleChange } = this.props
        return <form className={s.contact_form} onSubmit={onHandleSubmit}>
            <label className={s.contact_form__label}>
                <input
                    type="text"                
                    className={s.contact_form__input}
                    name="name"
                    onChange={onHandleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label className={s.contact_form__label}>
                <input
                    type="tel"
                    name="number"
                    className={s.contact_form__input}
                    onChange={onHandleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>
            <button type="submit" className={s.contact_form__button} >
            Add to contacts
            </button>
        </form> 
    }
    

}

export default  ContactForm