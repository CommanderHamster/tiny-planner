import React from 'react';
import Select from 'react-select';
import { get, find } from 'lodash';

const SelectField = (props: {
  options: object[],
  input: {
    name: string,
    value: any,
    onChange: any
  },
  placeholder: string,
}) => {
  const {
    options,
    input,
    placeholder = '',
  } = props;

  const { name, value, onChange } = input;

  // This is so that react-select can tie into redux form's methods
  const handleOnChange = (changeValue: any) => {
    onChange(changeValue);
  };

  return (
    <div className="SelectField">
      <Select
        name={name}
        value={value || null}
        placeholder={placeholder}
        options={options}
        onChange={handleOnChange}
        isSearchable
        isMulti
      />
    </div>
  );
};

export default SelectField;
