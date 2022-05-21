import React, { useState } from "react";
import Students from "./Components/Students";
import './App.css'

const App = () => {
  const [students, setStudents] = useState([
    { id: 0, name: 'mahdi', classNumber: 1234, phoneNumber: 222, email: 'mr.a.asgari@gmail.com' },
    { id: 1, name: 'amir', classNumber: 12345, phoneNumber: 2223, email: 'mr.a.asgari@gmail.com' },
    { id: 2, name: 'saeed', classNumber: 123456, phoneNumber: 2224, email: 'mr.a.asgari@gmail.com' },
    { id: 3, name: 'amirali', classNumber: 1234567, phoneNumber: 2225, email: 'mr.a.asgari@gmail.com' },
  ])
  return (
    <div className="App">
      <Students
        studentsList={students}
      />
    </div >
  )
}

export default App;
