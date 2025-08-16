import React from 'react';
import styles from './FormSelect.module.css';

const FormSelect = ({ label, name, value, onChange, options }) => {
    return (
        <div className={styles.selectGroup}>
            {label && <label htmlFor={name} className={styles.selectLabel}>{label}</label>}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={styles.selectField}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value} disabled={option.value === ''}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FormSelect;
