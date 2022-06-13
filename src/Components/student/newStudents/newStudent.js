import React from "react";
import './newStudent.css'
import Button from "../../UI/button/button";
const NewStudent = (props) => {
    const {
        studentName,
        studentClass,
        studentPhoneNumber,
        studentEmail,
        studentNameHandler,
        studentClassHandler,
        studentPhoneNumberHandler,
        studentEmailHandler,
        addStudent }
        = props;
    return (
        <div className="newStudent" >
            <h1>اضافه کردن دانش آموز</h1>
            <label>نام و نام خانوادگی</label>
            <input type="text" value={studentName} onChange={studentNameHandler} />
            <label>کلاس</label>
            <input type="number" value={studentClass} onChange={studentClassHandler} />
            <label>شماره تلفن</label>
            <input type="number" value={studentPhoneNumber} onChange={studentPhoneNumberHandler} />
            <label>ایمیل</label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler} />
            <Button clicked={addStudent} btnType="danger">
                اضافه کردن
            </Button>
        </div >

    )
}

export default NewStudent