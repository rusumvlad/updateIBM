import React, { useState, useContext } from 'react';
//Import Context for Login
import { StudentContext } from '../LoginContext';

//Import bootstrap components
import { Form, Container } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'


import { adder, getter } from '../Constants/APIHandler'



//Import Icons
import { FaUserAlt, FaLock, FaUsers, FaSchool } from 'react-icons/fa';
import { AiFillCalendar } from 'react-icons/ai';

const ADD_STUDENT_API = 'http://localhost:9191/addStudent'
const STUDENT_API = `http://localhost:9191/students`

export default function AddStudent() {
    const [student, setStudent] = useContext(StudentContext);
    const [name, setName] = useState('');
    const [faculty, setFaculty] = useState('');
    const [yearOfStudy, setYearOfStudy] = useState('');

    const [show, setShow] = useState(false);

    const [errorExist, setErrorExist] = useState(false);
    const [errorEmpty, setErrorEmpty] = useState(false);
    const [errorOption, setErrorOption] = useState(false);
    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateFaculty = (e) => {
        setFaculty(e.target.value);
    }

    const updateYear = (e) => {
        setYearOfStudy(e.target.value);
    }
    function validareNumar(number) {
        let numbersOnly = /^[0-9\b]+$/;
        return numbersOnly.test(number);
    }

    const addUser = e => {
        e.preventDefault();
        const user = {
            name: name,
            faculty: faculty,
            yearOfStudy: yearOfStudy
        };
        let verifyUser = student.find(user => user.name === name);
        if (verifyUser === undefined) {
            setErrorExist(false);
            if (name !== "" && faculty !== "" && yearOfStudy !== "") {
                if (validareNumar(yearOfStudy) === false) {
                    setErrorOption(true);
                }
                else {
                    setErrorOption(false);

                    adder(ADD_STUDENT_API, user)
                        .then(() => {
                            setShow(true);
                            getter(STUDENT_API).then(res => {
                                setStudent(res.data);
                            })
                        })
                    setErrorOption(false);
                    setErrorEmpty(false);
                    setErrorExist(false);
                    setName("");
                    setFaculty("");
                    setYearOfStudy("");
                }
            } else {
                setErrorEmpty(true);
            }



        } else {
            setErrorExist(true);
            setName("");
            setFaculty("");
        }




    }
    return (


        <Container>
            <div className="row">
                <div className="col-12 text-center">
                    {show === true && <Alert variant="info" onClose={() => setShow(false)} dismissible>
                        <p>Studentul a fost adaugat cu succes</p>
                    </Alert>
                    }
                </div>
            </div>
            <Form className="formDesign" onSubmit={addUser}>
                <Form.Group controlId="formUsername">
                    <Form.Label><FaUserAlt className="form-icons" />Name</Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={updateName} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label><FaSchool className="form-icons" />Faculty</Form.Label>
                    <Form.Control type="text" name="faculty" value={faculty} onChange={updateFaculty} />
                </Form.Group>
                <Form.Group controlId="formUsertype">
                    <Form.Label><AiFillCalendar className="form-icons" />Year of Study</Form.Label>
                    <Form.Control type="text" name="yearOfStudy" value={yearOfStudy} onChange={updateYear} />
                </Form.Group>
                <div className='buttonProf'>
                    <button className="buttonDesign" type="submit">
                        Submit
                    </button>
                </div>
                {errorExist && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Numele de student exista deja!</p>}
                {errorEmpty && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Nu trebuie lasate campuri libere!</p>}
                {errorOption && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Anul de studiu nu are voie sa contina litere!</p>}
            </Form>
        </Container>

    )
}