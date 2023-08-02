import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/selectors";
import { filterContacts } from "redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
const filter = useSelector(selectFilter);

return (
    <label>
        Find contacts by name
        <input type='text' name="filter" value={filter} onChange={e => dispatch(filterContacts(e.target.value))} placeholder="Enter name" autoComplete="on"></input>
    </label>
);
};

export default Filter;
