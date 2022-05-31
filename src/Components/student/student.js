import React from 'react';
import './Students.css'

const Student = (props) => {
    return (
        <div className="students">
            <label>شماره دانش آموزی : {props.id} </label>
            <label>نام خانوادگی  </label>
            <input type="text" value={props.name} onChange={props.nameChanged} />

            <label>شماره کلاس  </label>
            <input type="number" value={props.classNumber} onChange={props.classNumberChanged} />

            <label>شماره تلفن  </label>
            <input type="number" value={props.phoneNumber} onChange={props.phoneNumberChanged} />

            <label>ایمیل  </label>
            <input type="email" value={props.email} onChange={props.emailChanged} />

            <label style={{ color: "red" }} onClick={props.deleted}>
                حذف
            </label>
        </div>
    )
}
export default Student;