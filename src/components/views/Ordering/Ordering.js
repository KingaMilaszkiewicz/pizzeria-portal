import React from 'react';
import styles from './Ordering.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Ordering = ({id}) => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <Link to='/ordering/new'>New</Link>
    <Link to='/ordering/order/:id'> {id} </Link>
  </div>
);

Ordering.propTypes = {
  id: PropTypes.string,
};


export default Ordering;
