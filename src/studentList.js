import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StudentList extends Component {
  state = {
    studentsList: this.props.students,
  };
  addStudent = (newStudent) => {
    console.log(this.state.studentsList);
    // this.state.studentsList.forEach((element) => {
    //   if (newStudent.id == element.id) {
    //     alert("enter correct id");
    //     return;
    //   } else {
    //     this.state.studentsList.push(newStudent);
    //     this.setState({ studentsList: this.state.studentsList });
    //     return;
    //   }
    // });
    for (let i = 0; i < this.state.studentsList.length; i++) {
      if (newStudent.id == this.state.studentsList[i].id) {
        alert("Invalid ID");
        return;
      }
    }
    /*let stateCloneArr = [...this.state.studentsList];
    stateCloneArr.findIndex((student) => student.id == newStudent.id); */
    this.state.studentsList.push(newStudent);
    this.setState({ studentsList: this.state.studentsList });
  };

  myOwnEditHandler(editItem) {
    let activeTime = this.state.studentsList.find(
      (item) => item.id == editItem.id
    );
    activeTime.id = editItem.id;
    activeTime.name = editItem.name;
    activeTime.age = editItem.age;
    activeTime.courses = editItem.courses;
    activeTime.trackName = editItem.trackName;
    activeTime.dateOfBirth = editItem.dateOfBirth;
    activeTime.address = editItem.address;
    this.setState({
      studentsList: this.state.studentsList,
    });
  }
  render() {
    return (
      <>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Courses</th>
              <th scope="col">TrakName</th>
              <th scope="col">DateOfBirth</th>
              <th scope="col">Address</th>
              <th scope="col">Del Btn</th>
              <th scope="col"> Edit Btn</th>
            </tr>
          </thead>

          <tbody>
            {this.state.studentsList.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.courses}</td>
                  <td>{student.trackName}</td>
                  <td>{student.dateOfBirth}</td>
                  <td>{student.address}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => this.props.ondelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {" "}
                    <Link
                      to={{
                        pathname: `/editStud/${student.id}`,
                        editRef: this.myOwnEditHandler,
                        currentItem: student,
                      }}
                      className="btn btn-outline-primary"
                    >
                      Edit{" "}
                    </Link>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Link
          to={{ pathname: "/addNewStud", addRef: this.addStudent }}
          className="btn btn-primary"
        >
          Add Student
        </Link>
      </>
    );
  }
}
