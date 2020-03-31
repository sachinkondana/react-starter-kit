import React, { useState, useEffect } from 'react';
import Utils from '../_services/Utils';

import Goal from './components/Goal';
import GoalActions from './actions';

import styles from './Goals.module.scss';

const EMPTY_GOAL = {
    title: '',
    description: '',
};

function ManageGoals() {
    const [goals, setGoals] = useState([]);
    const [notifications, setNotifications] = useState(null);

    useEffect(() => {
        GoalActions.getGaols().then(({ data }) => setGoals(data));
    }, []);

    const handleChange = (newGoal, index) => {
        const newGoals = [...goals];
        newGoals[index] = {
            ...newGoal,
            dirty: true,
        };

        setGoals(newGoals);
    };

    const deleteGoal = (index) => {
        GoalActions.deleteGoals(index).then(() => {
            const newGoals = [...goals];

            newGoals.splice(index, 1);
            setGoals(newGoals);
        });
    };

    const handleFormSubmit = () => { };

    const saveGoals = () => {
        const updatedGoals = goals.filter((g) => g.dirty);
        GoalActions.bulkSave(updatedGoals).then(() => {
            // Mark all saved goals
            const newGoals = goals.map((g) => Utils.omit(g, 'dirty'));
            setGoals(newGoals);
        }).catch((error) => setNotifications(error.message));
    };

    // soft actions
    const createNewGoal = () => {
        const newGoals = [...goals, { ...EMPTY_GOAL }];

        setGoals(newGoals);
    };

    const renderGoals = (goals.length > 0) ? goals.map((g, index) => (
        <Goal
            key={`${g.id}`}
            id={index}
            data={g}
            onSubmit={handleFormSubmit}
            onRemove={deleteGoal}
            onChange={handleChange}
        />
    )) : (
        <div className={styles.empty}>There is no goals in your list, please create one.</div>
    );

    const renderActions = (
        <div className={styles.actions}>
            <button type="button" className="danger" onClick={() => createNewGoal()}>
                <i className="icon-bullseye" />
                {' '}
                Add a New Goal
            </button>
            <button type="button" className="primary" onClick={() => saveGoals()}>Save</button>
        </div>
    );

    const renderError = notifications ? (
        <div className={notifications}>{notifications}</div>
    ) : null;

    return (
        <div className={styles.goals}>
            {renderGoals}
            {renderActions}
            {renderError}
        </div>
    );
}

export default ManageGoals;
