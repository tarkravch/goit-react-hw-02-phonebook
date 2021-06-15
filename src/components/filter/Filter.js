import React from "react";

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;
