import React from 'react';
import '../../styles/Input.css';

const Input = ({
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    prefix,
    suffix,
    helperText,
    error,
    id,
    min,
    max
}) => {
    return (
        <div className="input-group">
            {label && <label htmlFor={id} className="input-label">{label}</label>}
            <div className={`input-wrapper ${error ? 'error' : ''}`}>
                {prefix && <span className="input-prefix">{prefix}</span>}
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="input-field"
                    min={min}
                    max={max}
                />
                {suffix && <span className="input-suffix">{suffix}</span>}
            </div>
            {helperText && <span className="input-helper">{helperText}</span>}
        </div>
    );
};

export default Input;
