import React, { Component } from "react";

export default class Edit extends Component {
  state = {
    id: "",
    name: "",
    age: "",
    courses: "",
    trackName: "",
    dateOfBirth: "",
    address: "",
  };

  CustomSavingEdit = () => {
    console.log(this.state);
    this.props.location.editRef({
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      courses: this.state.courses,
      trackName: this.state.trackName,
      dateOfBirth: this.state.dateOfBirth,
      address: this.state.address,
    });
  };
  render() {
    console.log("Edit props objecy", this.props);
    return (
      <>
        ID
        <input
          type="text"
          value={this.state.id}
          onChange={(e) => this.setState({ id: e.target.value })}
        />
        Name
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        Age
        <input
          type="text"
          value={this.state.age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        Courses
        <input
          type="text"
          value={this.state.courses}
          onChange={(e) => this.setState({ courses: e.target.value })}
        />
        trackName
        <input
          type="text"
          value={this.state.trackName}
          onChange={(e) => this.setState({ trackName: e.target.value })}
        />
        dateOfBirth
        <input
          type="text"
          value={this.state.dateOfBirth}
          onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
        />
        Address
        <input
          type="text"
          value={this.state.address}
          onChange={(e) => this.setState({ address: e.target.value })}
        />
        <li>{this.props.location.currentItem.id}</li>
        <li>{this.props.location.currentItem.name}</li>
        <li>{this.props.location.currentItem.age}</li>
        <li>{this.props.location.currentItem.courses}</li>
        <li>{this.props.location.currentItem.trackName}</li>
        <li>{this.props.location.currentItem.dateOfBirth}</li>
        <li>{this.props.location.currentItem.address}</li>
        <input
          type="button"
          value="SavingEdit"
          onClick={this.CustomSavingEdit}
        />
      </>
    );
  }
}
