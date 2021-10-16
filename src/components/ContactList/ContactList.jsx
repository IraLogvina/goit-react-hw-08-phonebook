import React from "react";
import style from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { visibleContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
import Delete from "@material-ui/icons/Delete";

export default function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  const list = useSelector(visibleContacts);

  return (
    <div>
      <ul className={style.list}>
        {list.map(({ id, name, number }) => (
          <li key={id} className={style.listItem}>
            <span className={style.listItemName}>{name}:</span>
            <span className={style.listItemNumber}>{number}</span>
            <Delete
              color="action"
              onClick={() => dispatch(deleteContact(id))}
              cursor="pointer"
              size="large"
            ></Delete>
          </li>
        ))}
      </ul>
    </div>
  );
}
