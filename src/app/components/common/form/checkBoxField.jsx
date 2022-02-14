import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ label, value, onChange, name, children, error }) => {
   const handleChange = () => {
      onChange({ name: name, value: !value });
   };
   const getInputClasses = () => {
      return "form-check-input" + (error ? " is-invalid" : "");
   };
   return (
      <div className="form-check mb-4">
         <input
            className={getInputClasses()}
            type="checkbox"
            value=""
            id={name}
            checked={value}
            onChange={handleChange}
         />
         <label className="form-check-label" htmlFor={name}>
            {children}
         </label>
         {error && <div className="invalid-feedback">{error}</div>}
      </div>
   );
};

CheckBoxField.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string,
   value: PropTypes.bool,
   onChange: PropTypes.func,
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ]),
   error: PropTypes.string
};

export default CheckBoxField;