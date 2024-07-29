import React from 'react';
import './InputField.css';
import content from '../common.json'

const InputField = ({ value, onChange, onSubmit }) => {
  return (
    <div className="input-field">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={content.type_question}
      />
      <button onClick={onSubmit}>{content.send}</button>
    </div>
  );
};

export default InputField;
