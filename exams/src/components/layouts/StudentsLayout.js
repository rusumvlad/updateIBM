import React from 'react'
import { useState, useContext } from 'react'
//Import Icons
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { StudentContext } from '../LoginContext';
import { Form } from 'react-bootstrap'
import { AiFillCalendar } from 'react-icons/ai';
import { GoCalendar } from 'react-icons/go';
import { FaSchool } from 'react-icons/fa';

import { putter, getter } from '../Constants/APIHandler'

import Alert from 'react-bootstrap/Alert';


export default function StudentsLayout({ name, faculty, yearOfStudy, removeStudent, studId }) {

    const [, setStudent] = useContext(StudentContext)
    const [isEditing, setEditing] = useState(false);
    const [Name, setName] = useState(name);
    const [Faculty, setFaculty] = useState(faculty);
    const [YearOfStudy, setYearOfStudy] = useState(yearOfStudy)
    const [show, setShow] = useState(false);


    const [errorEmpty, setErrorEmpty] = useState(false);
    const [errorOption, setErrorOption] = useState(false);

    const UPDATE_API = `http://localhost:9191/updateStudents/${studId}`
    const LOGIN_API = 'http://localhost:9191/students'
    function handleEdit() {
        setEditing(!isEditing)
    }
    function cancelForm(e) {
        e.preventDefault();
        setEditing(false)
    }
    function validareNumar(number) {
        let numbersOnly = /^[0-9\b]+$/;
        return numbersOnly.test(number);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const studentUpdate = {
            name: Name,
            faculty: Faculty,
            yearOfStudy: YearOfStudy
        }
        if (name !== "" && faculty !== "" && yearOfStudy !== "") {
            if (validareNumar(yearOfStudy) === false) {
                setErrorOption(true);
            }
            else {
                setErrorOption(false);
                putter(UPDATE_API, studentUpdate)
                    .then(() => {
                        setShow(true);
                        getter(LOGIN_API).then(res => {
                            setStudent(res.data);
                        })
                    })
                setEditing(false);
                setErrorOption(false);
                setErrorEmpty(false);
            }
        } else {
            setErrorEmpty(true);
        }



    }

    let display;
    if (isEditing) {
        display = (
            <div className="col-md-4 col-sm-12">

                <div className="StudentCard">

                    <Form onSubmit={handleSubmit}>


                        <Form.Group controlId="formBasicName">
                            <Form.Label><AiFillCalendar className="form-icons" />Name</Form.Label>
                            <Form.Control type="text" name='Name' value={Name} onChange={(e) => setName(e.target.value)} readOnly />
                        </Form.Group>

                        <Form.Group controlId="formBasicFaculty">
                            <Form.Label><GoCalendar className="form-icons" />Faculty</Form.Label>
                            <Form.Control type="text" name='Faculty' value={Faculty} onChange={(e) => setFaculty(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicYearOfStudy">
                            <Form.Label><FaSchool className="form-icons" />YearOfStudy</Form.Label>
                            <Form.Control type="text" name='YearOfStudy' value={YearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} />
                        </Form.Group>




                        <div className='buttonProf'>
                            <button className="buttonDesign" type="submit">
                                Submit
            </button>&nbsp;
            <button className="buttonDesign" onClick={cancelForm}>Cancel</button>
                        </div>
                        {errorEmpty && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Nu trebuie lasate campuri libere!</p>}
                        {errorOption && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Anul de studiu nu are voie sa contina litere!</p>}
                    </Form>
                </div>
            </div>
        )
    }
    else {
        display = (<div className='col-md-4  col-12 mb-3'>
            {show === true && <Alert variant="info" onClose={() => setShow(false)} dismissible>
                <p>Studentul a fost editat cu succes</p>
            </Alert>}
            <div className="Userlist-card ">

                <h4>Name: {name} </h4>
                <hr />
                <h4>Faculty: {faculty}</h4>
                <hr />
                <h4>YearOfStudy: {yearOfStudy}</h4>
                <p>
                    <FaEdit className="icons-admin-card" onClick={handleEdit}></FaEdit>
                    <MdDelete className="icons-admin-card" onClick={removeStudent} ></MdDelete>
                </p>
            </div>
        </div>)
    }


    return (

        display

    );
}
