import React, { useEffect } from 'react';
import Student from './student/student';
import './student/Students.css'
const Students = (props) => {
    useEffect(() => {
        console.log('change')
    }, [props.studentsList])
    let studentList = (
        props.studentsList.map((person, index) =>
            <Student
                key={index}
                id={person.id}
                name={person.name}
                classNumber={person.classNumber}
                phoneNumber={person.phoneNumber}
                email={person.email}
                nameChanged={(event) => props.nameChanged(event, person.id)}
                classNumberChanged={(event) => props.classNumberChanged(event, person.id)}
                phoneNumberChanged={(event) => props.phoneNumberChanged(event, person.id)}
                emailChanged={(event) => props.emailChanged(event, person.id)}
                deleted={props.deleted}
            />
        )
    )
    if (props.toggle) {
        return (
            <div className='student-section'>
                {
                    studentList
                }
            </div>

        )
    }
    return studentList
}

export default Students;