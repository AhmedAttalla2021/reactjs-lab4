import React, { Component } from "react";
import StudentAdd from "./studentAdd";
import StudentList from "./studentList";
import Edit from "./studentEdit";
import { BrowserRouter, Route } from "react-router-dom";

export default class StudentAppCom extends Component {
  state = {
    Students: [
      {
        id: 1,
        name: "ahmed",
        age: 27,
        courses: ["html", "css", "react"],
        trackName: "frontEnd",
        dateOfBirth: 1994,
        address: "gharbia",
      },
      {
        id: 2,
        name: "ali",
        age: 26,
        courses: ["javascript", "c#", "angular"],
        trackName: "backEnd",
        dateOfBirth: 1995,
        address: "dakahlia",
      },
      {
        id: 3,
        name: "amr",
        age: 25,
        courses: ["swift", "java", "c++"],
        trackName: "mobiledevelopment",
        dateOfBirth: 1996,
        address: "sharqia",
      },
    ],
  };

  delStudent = (studIndex) => {
    // ( splice)الطريقة الاولى باستخدام

    this.state.Students.splice(studIndex, 1);
    this.setState({ Students: this.state.Students });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Route
            component={() => (
              <StudentList
                students={this.state.Students}
                ondelete={this.delStudent}
              />
            )}
            path="/"
            exact
          />
          <Route component={StudentAdd} path="/addNewStud" exact />
          <Route component={Edit} path="/editStud/:id" exact />
        </BrowserRouter>
        ;
      </>
    );
  }
}
