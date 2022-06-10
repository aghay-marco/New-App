import React from 'react';
import Student from './student/student';
import './student/Students.css'
const Students = (props) => {
    if (props.toggle) {
        return (
            <div className='student-section'>
                {
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
                }
            </div>

        )
    }
    return (
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
}

export default Students;