import React, { Component } from "react";
import shortid from "shortid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (event) => {
    /*  this.setState({
      name: event.currentTarget.value,
      number: event.currentTarget.value,
    }); */
    const { name, value } = event.currentTarget;
    console.log(event.currentTarget.value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // const [name, number] = event.currentTarget;
    this.props.onSubmit(this.state); /* передаємо значення на проп onSubmit */
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
