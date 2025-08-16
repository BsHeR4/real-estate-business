import React from 'react';
import styles from './FormTextarea.module.css';

const FormTextarea = ({ label, name, value, onChange, placeholder, required }) => {
    return (
        <div className={styles.textareaGroup}>
            {label && <label htmlFor={name} className={styles.textareaLabel}>{label}</label>}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={styles.textareaField}
            />
        </div>
    );
};

export default FormTextarea;
