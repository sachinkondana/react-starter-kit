import React from 'react';
import Utils from '../../_services/Utils';

import styles from './Goal.module.scss';

function Goal(props) {
    const { id, data, onSubmit, onRemove, onChange } = props;

    const handleChange = (e) => Utils.debounce((function (e) {
        e.preventDefault();

        const newGoal = {
            ...data,
            [e.target.name]: e.target.value,
        };

        onChange(newGoal, id);
    })(e), 100);


    return (
        <form className={styles.form} onSubmit={onSubmit} key={id} autoComplete="off">
            <span className={`icon-trash ${styles.deleteIcon}`} onClick={() => onRemove(id)}></span>
            <div className={styles.content}>
                <input type="text" name="title" placeholder="Type the goal title here" value={data.title} onChange={e => handleChange(e)} />
                <textarea name="description" placeholder="Type the goal description here" value={data.description} onChange={e => handleChange(e)} />
            </div>
        </form>
    );
}

export default Goal;