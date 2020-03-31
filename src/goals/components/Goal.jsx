import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../_services/Utils';

import styles from './Goal.module.scss';

function Goal(props) {
    const {
        id, data, onSubmit, onRemove, onChange,
    } = props;

    // eslint-disable-next-line func-names
    const handleChange = (event) => Utils.debounce((function (e) {
        e.preventDefault();

        const newGoal = {
            ...data,
            [e.target.name]: e.target.value,
        };

        onChange(newGoal, id);
    }(event)), 100);


    return (
        <form className={styles.form} onSubmit={onSubmit} key={id} autoComplete="off">
            <span className={`icon-trash ${styles.deleteIcon}`} onClick={() => onRemove(id)} />
            <div className={styles.content}>
                <input type="text" name="title" placeholder="Type the goal title here" value={data.title} onChange={(e) => handleChange(e)} />
                <textarea name="description" placeholder="Type the goal description here" value={data.description} onChange={(e) => handleChange(e)} />
            </div>
        </form>
    );
}

Goal.propTypes = {
    id: PropTypes.any,
    data: PropTypes.any,
    onSubmit: PropTypes.func,
    onRemove: PropTypes.func,
    onChange: PropTypes.func,
};

Goal.defaultProps = {
    id: null,
    data: null,
    onSubmit: null,
    onRemove: null,
    onChange: null,
};

export default Goal;
