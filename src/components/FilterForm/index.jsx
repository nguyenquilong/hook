import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

FilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
FilterForm.defaultProps = {
  onSubmit: null,
};

function FilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleChangeSearchTerm(e) {
    e.preventDefault();
    setSearchTerm(e.target.value);
    if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      onSubmit(searchTerm);
    }, 300);
  }
  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleChangeSearchTerm} />
    </form>
  );
}

export default FilterForm;
