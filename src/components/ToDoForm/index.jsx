import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};
ToDoForm.defaultProps = {
  onSubmit: null,
};

function ToDoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function onhandleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValue = {
      title: value,
    };
    onSubmit(formValue);
    setValue("");
  }
  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  return (
    <form onSubmit={onhandleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default ToDoForm;
