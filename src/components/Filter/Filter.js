import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './Filter.module.css'

class Filter extends Component{
    static propTypes = {
       onHandleFilter: PropTypes.func,
    }
    render() {
        const { onHandleFilter } = this.props;
         return <label className={s.filter_form__label}> Find a contact
                <input
                    type="text"                
                    className={s.filter_form__input}
                    name="filter"
                    onChange={onHandleFilter}
                />
            </label>
     }
}

export default Filter