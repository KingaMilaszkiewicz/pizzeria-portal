import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tables = ({ id }) => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to='/tables/booking/:id'>Booking {id} </Link>
    <Link to='/tables/event/:id'>Event {id}</Link>
    {id}
  </div>
);

Tables.propTypes = {
  id: PropTypes.string,
};


export default Tables;
