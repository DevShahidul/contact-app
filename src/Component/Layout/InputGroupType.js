import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const InputGroupType = ({
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    error
}) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}:</label>
            <input 
            className={classnames('form-control from-control-lg', {
                'is-invalid': error
            })} 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

InputGroupType.defaultProps = {
    type: 'text'
}

InputGroupType.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

export default InputGroupType;