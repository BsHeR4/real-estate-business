import React from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({ label, name, checked, onChange, required }) => {
    return (
        <div className={styles.checkboxGroup}>
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
                required={required}
                className={styles.checkboxInput}
            />
            {label && <label htmlFor={name} className={styles.checkboxLabel}>{label}</label>}
        </div>
    );
};

export default CheckBox;
