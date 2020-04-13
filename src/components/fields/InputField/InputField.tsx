import React from 'react';

const InputField = (props: {
  input: any,
  meta: any,
  placeholder: string,
}) => {
  const {
    input,
    meta,
    placeholder = '',
  } = props;

  const {
    error,
    touched
  } = meta

  return (
    <div className="InputField">
      <input
        className="form-control"
        placeholder={placeholder}
        {...input}
      />

      <p className="text-danger">{touched && (error && <span>{error}</span>)}</p>
    </div>
  );
};

export default InputField;
