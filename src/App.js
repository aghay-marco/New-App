import React, { useState, useEffect } from "react";
import Students from "./Components/Students";
import './App.css'
import Button from "./Components/UI/button/button";
import NewStudent from "./Components/student/newStudents/newStudent";

const App = () => {
  const [studentsState, setStudents] = useState([
    { id: 0, name: "mahdi", classNumber: 204, phoneNumber: 123, email: "mr.a.asgari@gmail.com" },
    { id: 1, name: "saeed", classNumber: 205, phoneNumber: 123, email: "mr.a.asgari@gmail.com" },
    { id: 2, name: "amir", classNumber: 206, phoneNumber: 123, email: "mr.a.asgari@gmail.com" },
    { id: 3, name: "amirali", classNumber: 207, phoneNumber: 123, email: "mr.a.asgari@gmail.com" },
  ]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [toggle, setToggle] = useState(false)
  const [searchBarValue, setSearchBarValue] = useState('');
  const [studentName, setStudentName] = useState('')
  const [studentClass, setStudentClass] = useState('')
  const [studentPhoneNumber, setStudentPhoneNumber] = useState('')
  const [studentEmail, setStudentEmail] = useState('')
  useEffect(() => {
    setArrayHolder(studentsState)
  }, []);
  const searchFilterFunction = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemsData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemsData.indexOf(textData) > -1
    })
    setStudents(itemData);
    setSearchBarValue(event.target.value);
  }

  const nameChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex(s => {
      return s.id === id
    })
    const student = { ...studentsState[studentIndex] };
    student.name = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students)
  }

  const classNumberChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex(s => {
      return s.id === id
    })
    const student = { ...studentsState[studentIndex] };
    student.classNumber = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students)
  }

  const phoneNumberChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex(s => {
      return s.id === id
    })
    const student = { ...studentsState[studentIndex] };
    student.phoneNumber = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students)
  }

  const emailChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex(s => {
      return s.id === id
    })
    const student = { ...studentsState[studentIndex] };
    student.email = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students)
  }

  const deleteStudent = (index) => {
    const students = [...studentsState];
    students.splice(index, 1);
    setStudents(students)
  }

  const toggleHandler = () => {
    setToggle(!toggle)
    console.log(toggle)
  }

  const studentNameHandler = (event) => {
    setStudentName(event.target.value)
  }
  const studentClassHandler = (event) => {
    setStudentClass(event.target.value)
  }
  const studentPhoneNumberHandler = (event) => {
    setStudentPhoneNumber(event.target.value)
  }
  const studentEmailHandler = (event) => {
    setStudentEmail(event.target.value)
  }
  const addstudent = () => {
    const newStudentState = [...studentsState]
    newStudentState.push({
      'id': studentsState.length,
      'name': studentName,
      'classNumber': studentClass,
      'phoneNumber': studentPhoneNumber,
      'email': studentEmail,

    })
    setStudents(newStudentState);
    setStudentName('');
    setStudentClass('')
    setStudentPhoneNumber('')
    setStudentEmail('')
  }
  return (
    <div className="App">
      <NewStudent
        studentName={studentName}
        studentClass={studentClass}
        studentPhoneNumber={studentPhoneNumber}
        studentEmail={studentEmail}
        studentNameHandler={studentNameHandler}
        studentClassHandler={studentClassHandler}
        studentPhoneNumberHandler={studentPhoneNumberHandler}
        studentEmailHandler={studentEmailHandler}
        addStudent={addstudent}
      />
      <input type="text" value={searchBarValue} onChange={searchFilterFunction} />
      <Button
        btnType="success"
        clicked={toggleHandler}
      >
        تغییر وضعیت نمایش
      </Button>

      <Students
        studentsList={studentsState}
        nameChanged={nameChangeHandler}
        classNumberChanged={classNumberChangeHandler}
        phoneNumberChanged={phoneNumberChangeHandler}
        emailChanged={emailChangeHandler}
        deleted={deleteStudent}
        toggle={toggle}
      />
    </div >
  )
}

export default App;
