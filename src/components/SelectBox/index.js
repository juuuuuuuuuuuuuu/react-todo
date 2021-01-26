import React from 'react';

function SelectBox({ options, selectedValue, style, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <div className="form-group" style={Object.assign({}, style)}>
      <select
        className="form-control float-right"
        style={{ width: '150px' }}
        onChange={handleChange}
        value={selectedValue}
      >
        {options.map((option, idx) => <option key={idx} value={option.value}>{option.title}</option>)}
      </select>
    </div>
  );
}
export default SelectBox;
