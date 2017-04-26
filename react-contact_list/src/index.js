import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ContactList extends React.Component {
  constructor(){
    super();
    this.state = {
      yourName: '',
      yourNumber: '',
      yourEmail: '',
      yourType: '',
      contactArray: [{
        name: '',
        number: '',
        email: '',
        type: ''}]
    };
  }
  changeStateValue(stateName, event) {
    this.setState({
      [stateName]: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();
    let formData = {
      name: this.state.yourName,
      email: this.state.yourEmail,
      number: this.state.yourNumber,
      type: this.state.yourType
  }
    let tempArray = this.state.contactArray;
    tempArray.push(formData);
    this.setState({
      contactArray: tempArray
    })
    console.log(this.state.contactArray);

  }



  render() {
    return(
      <form onSubmit={event=>this.submitForm(event)}>
        <h1>Add contact</h1>
        <div className="form-group">
          <label> Name </label>
          <input type="text"
            className="form-control"
            value={this.state.yourName}
            onChange={event => this.changeStateValue('yourName', event)}/>
        </div>
        <div className="form-group">
          <label> Phone Number</label>
          <input type="text"
            className="form-control"
            value={this.state.yourNumber}
            onChange={event => this.changeStateValue('yourNumber', event)}/>
        </div>
        <div className="form-group">
          <label> Email</label>
          <input type="text"
            className="form-control"
            value={this.state.yourEmail}
            onChange={event => this.changeStateValue('yourEmail', event)}/>
        </div>
        <div className="form-group">
          <label>Type</label>
            <select
              className="form-control"
              value={this.state.yourType}
              onChange={event => this.changeStateValue('yourType', event)}>
              <option value="family">Family</option>
              <option value="friend">Friend</option>
              <option value="coworker">Coworker</option>
          </select>
        </div>
      <button>submit</button>
      <div className="list">
        <h1>Contact list</h1>
        <ul>
          {this.state.contactArray.map((contact, idx) => <li key={idx}>{contact.name} {contact.email} {contact.number} {contact.type}</li>)}
        </ul>
      </div>
    </form>
    );
  }
}

ReactDOM.render(
  <ContactList/>,
document.getElementById('root'));
