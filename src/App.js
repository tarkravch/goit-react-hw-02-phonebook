import React, { Component } from "react";
import ContactForm from "./components/contact-form/ContactForm";
import ContactList from "./components/contact-list/ContactList";
import Filter from "./components/filter/Filter";
import initialContacts from "./components/contactArr.json";
import shortid from "shortid";

class App extends Component {
  static defaultProps = {};

  static propTypes = {
    //
  };

  state = {
    contacts: initialContacts,
    filter: "",
  };
  deleteContact = (itemNameId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== itemNameId
      ),
    }));
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filterByName = (event) => {
    this.setState({ filter: event.currentTarget.value });
    console.log(this.state.filter);
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    console.log(normalizedFilter);

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <Filter value={this.state.filter} onChange={this.filterByName} />
          <ContactList
            items={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
