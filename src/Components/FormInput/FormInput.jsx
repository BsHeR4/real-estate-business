import React from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ label, type = "text", name, value, onChange, placeholder, required }) => {
    return (
        <div className={styles.inputGroup}>
            {label && <label htmlFor={name} className={styles.inputLabel}>{label}</label>}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={styles.inputField}
            />
        </div>
    );
};

export default FormInput;
