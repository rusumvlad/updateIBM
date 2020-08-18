import React, { useContext } from 'react';
import { StudentContext } from '../LoginContext';
import UsersLayout from '../layouts/UsersLayout';

import { deleter } from '../Constants/APIHandler'
import AddStudent from './AddStudent';
import StudentsLayout from '../layouts/StudentsLayout'

const DELETE_USER_API = 'http://localhost:9191/deleteStudent/'


export default function StudentList() {
    const [student, setStudent] = useContext(StudentContext)

    function removeStudent(id) {
        deleter(DELETE_USER_API + id)
            .then(res => {
                setStudent(student.filter(stud => stud.id !== id))
            }
            )
    }
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center mt-5 mb-5">
                    <h1 className="title">Lista Studentilor</h1>
                </div>
            </div>
            <div className="row">
                {student.map((stud, index) =>
                    <StudentsLayout name={stud.name} faculty={stud.faculty} yearOfStudy={stud.yearOfStudy} removeStudent={() => removeStudent(stud.id)} key={index} studId={stud.id} />
                )}
            </div>
            <div className="row">
                <div className="col-12 text-center mt-5 mb-5">
                    <h1 className="title">Adauga un nou student</h1>
                </div>
            </div>
            <div className="row">
                <AddStudent />
            </div>

        </div>
    )
}
