import React from "react";
// import shortid from "shortid";

const ContactList = ({ items, onDeleteContact }) => (
  <div>
    <ul>
      {items.map((itemName) => (
        //  id = shortid.generate()
        <li key={itemName.id}>
          {itemName.name}: {itemName.number}
          <button onClick={() => onDeleteContact(itemName.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
