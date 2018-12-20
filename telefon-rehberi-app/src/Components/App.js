import React, { Component } from 'react';
import '../App.css';

import Contacts from './Contacts';

class App extends Component {

  constructor(){
    super();
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts: [
      {
        name: 'Abdullah',
        phone: '0 545 787 89 18'
      },
      {
        name: 'Murat',
        phone: '0 531 913 05 63'
      }
    ]
  };

  addContact(contact){
    const { contacts } = this.state;
    contacts.push(contact);

    this.setState({
        contacts: contacts
    });
  };

  render() {
    return (
      <div className="App">
        <Contacts
            addContact={this.addContact}
            contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
