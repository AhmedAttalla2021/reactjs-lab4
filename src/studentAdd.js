import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StudentAdd extends Component {
  state = {
    id: "",
    name: "",
    age: "",
    courses: "",
    trackName: "",
    dateOfBirth: "",
    address: "",
  };

  addNewStd = () => {
    let newStd = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      courses: this.state.courses,
      trackName: this.state.trackName,
      dateOfBirth: this.state.dateOfBirth,
      address: this.state.address,
    };
    this.props.history.push("/");
    this.props.location.addRef(newStd);
  };

  //  fireInput = (e) => {
  //     this.setState({
  //       id: e.target.value,
  //       /* name: e.target.value,
  //       age: e.target.value,
  //       courses: e.target.value,
  //       trackName: e.target.value,
  //       dateOfBirth: e.target.value,
  //       address: e.target.value,*/
  //     });
  //   };

  render() {
    return (
      <>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="txtID"
              aria-describedby="ID"
              placeholder="ID"
              value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="txtName"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="txtAge"
              placeholder="Age"
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="txtCourses"
              placeholder="courses"
              value={this.state.courses}
              onChange={(e) => this.setState({ courses: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="txtTrack"
              placeholder="track Name"
              value={this.state.trackName}
              onChange={(e) => this.setState({ trackName: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="txtDate"
              placeholder="Date Of birth"
              value={this.state.dateOfBirth}
              onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="txtAddress"
              placeholder="Address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <input
            type="button"
            value="AddStudent"
            className="btn btn-outline-primary"
            onClick={this.addNewStd}
          />
        </form>
        {/*<Link to="/" className="btn btn-primary">
          goto list
        </Link> */}
      </>
    );
  }
}
