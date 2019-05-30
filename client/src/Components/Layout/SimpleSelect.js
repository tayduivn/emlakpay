import React from "react";
import Select from "react-select";

const SimpleSelect = ({ options, placeholder, setSelect, name }) => (
  <Select
    options={options}
    placeholder={placeholder}
    onChange={e => setSelect(e, name)}
  />
);

export default SimpleSelect;
