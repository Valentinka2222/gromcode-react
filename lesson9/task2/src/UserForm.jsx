import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      student: '',
      occupation: '',
      about: '',
    };
  }

  handleChange = event => {
    const { name, value, checked, type } = event.target;

    const val = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: val,
    });
  };
  handleSubmit = (event, obj) => {
    event.preventDefault();
    this.props.onSubmit(obj);
  };

  render() {
    const { name, student, occupation, about } = this.state;
    return (
      <form className="login-form" onSubmit={event => this.handleSubmit(event, this.state)}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            value={student}
            onChange={this.handleChange}
            type="checkbox"
            id="student"
            name="student"
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            onChange={this.handleChange}
            value={occupation}
            className="form-input"
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="coconut">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            onChange={this.handleChange}
            value={about}
            className="form-input"
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default UserForm;
