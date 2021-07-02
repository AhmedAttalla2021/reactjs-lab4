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

    /* showlist: true,
    showadd: false,
    logged: false,
    registered: false,*/
  };

  delStudent = (studIndex) => {
    // ( splice)الطريقة الاولى باستخدام

    this.state.Students.splice(studIndex, 1);
    this.setState({ Students: this.state.Students });
  };

  /*delStudent = (stud) => {                                           // ( filter)الطريقة الثانية باستخدام

    let newarr = this.state.Students.filter((p) => stud.id != p.id); 
    this.setState({ Students: newarr });
  };*/

  // addStudent = (newStudent) => {
  //   let newStudentsArr = [...this.state.Students, newStudent];

  //   this.setState({ Students: newStudentsArr, showlist: true, showadd: false });
  // };

  /*  loginHandler = (loginObject) => {
    this.setState({ logged: true });
    window.localStorage.setItem("loginusername", loginObject.UserName);
    window.localStorage.setItem("loginpassword", loginObject.Password);
    window.localStorage.setItem("loginObject", JSON.stringify(loginObject));
    // window.localStorage.setItem("username", JSON.stringify(loginObject.));
  };

  registerHandler = (registerObject) => {
    window.localStorage.setItem("name", registerObject.Name);
    window.localStorage.setItem("address", registerObject.Address);
    window.localStorage.setItem("age", registerObject.Age);
    window.localStorage.setItem("email", registerObject.Email);
    window.localStorage.setItem("username", registerObject.Username);
    window.localStorage.setItem("password", registerObject.Password);
    window.localStorage.setItem("confirmpass", registerObject.Confirmpass);
    window.localStorage.setItem(
      "registerObject",
      JSON.stringify(registerObject)
    );
  };*/

  /* componentWillMount() {
    let registerObj = JSON.parse(window.localStorage.getItem("registerObject"));
    if (registerObj != null) {
      this.setState({ registered: true });
    }
  }*/

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
    //   if (this.state.registered != false) {
    //     if (this.state.logged != false) {
    //       if (this.state.Students != null) {
    //         if (this.state.showlist == true && this.state.showadd == false) {
    //           return (
    //             <>
    //               <StudentList
    //                 Studentsarr={this.state.Students}
    //                 ondelete={this.delStudent}
    //               />
    //               <input
    //                 type="button"
    //                 value="addStud"
    //                 className="btn btn-primary"
    //                 onClick={() =>
    //                   this.setState({ showlist: false, showadd: true })
    //                 }
    //               />
    //             </>
    //           );
    //         } else if (
    //           this.state.showlist == false &&
    //           this.state.showadd == true
    //         ) {
    //           return <StudentAdd add={this.addStudent} />;
    //         } else {
    //           return <div>loading ....</div>;
    //         }
    //       }
    //     } else {
    //       return (
    //         <>
    //           <Login theLoginHandler={this.loginHandler} />
    //         </>
    //       );
    //     }
    //   } else {
    //     return <Register theRegisterHandler={this.registerHandler} />;
    //   }
  }
}
