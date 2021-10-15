import React from "react";
import style from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/selectors";
import { filterContacts } from "../../redux/contacts/actions";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className={style.title}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
        className={style.input}
      />
    </div>
  );
};

export default Filter;
