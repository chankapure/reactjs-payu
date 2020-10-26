import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Form from "./Form";

function SelectReason() {
  const options = [
    { label: "To Register in Exhibition", value: "to register in exhibition" },
    {
      label: "To Register in Publishers Conference",
      value: "to register in publishers conference"
    },

    {
      label: "To Register in Translation Grant",
      value: "to register in translation grant"
    },
    { label: "Others", value: "others" }
  ];

  const [selected, setSelected] = useState([]);
  const [disabled, setdisabled] = useState(false);
  return (
    <div className="form__row">
      <span>Please Select Your Reason for Registration:</span>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select Your Reason for Registration"}
        className={"selectAll"}
      />
    </div>
  );
}

export default SelectReason;
