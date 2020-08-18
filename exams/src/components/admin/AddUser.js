import React, { useState, useContext } from 'react';
//Import Context for Login
import { LoginContext } from '../LoginContext';

//Import bootstrap components
import { Form, Container } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'


import {adder,getter} from '../Constants/APIHandler'



//Import Icons
import { FaUserAlt, FaLock, FaUsers } from 'react-icons/fa';

const ADD_USER_API = 'http://localhost:9191/login/addUser'
const USER_API = `http://localhost:9191/login/users`

export default function AddUser() {
    const [users, setUsers] = useContext(LoginContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('');
    const usertypeList = ['admin', 'student', 'professor'];
    const [admin, student, prof] = usertypeList;
    const [show, setShow] = useState(false);

    const [errorExist, setErrorExist] = useState(false);
    const [errorEmpty, setErrorEmpty] = useState(false);
    const [errorOption, setErrorOption] = useState(false);
    const updateName = (e) => {
        setUsername(e.target.value);
    }

    const updatePass = (e) => {
        setPassword(e.target.value);
    }

    const updateUsertype = (e) => {
        setUsertype(e.target.value);
        console.log(e.target.value);
    }

    const addUser = e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
            usertype: usertype
        };
        let verifyUser = users.find(user => user.username === username);
        if (verifyUser === undefined) {
            setErrorExist(false);
            if (username !== "" && password !== "") {
                if (usertype === "") {
                    setErrorOption(true);
                }
                else {
                    setErrorOption(false);

                    adder(ADD_USER_API,user)
                        .then(() => {
                            setShow(true);
                            getter(USER_API).then(res => {
                                setUsers(res.data);
                            })
                        })
                    setErrorOption(false);
                    setErrorEmpty(false);
                    setErrorExist(false);
                    setUsername("");
                    setPassword("");
                }
            } else {
                setErrorEmpty(true);
            }



        } else {
            setErrorExist(true);
            setUsername("");
            setPassword("");
        }




    }
    return (


        <Container>
            <div className="row">
                <div className="col-12 text-center">
                    {show === true && <Alert variant="info" onClose={() => setShow(false)} dismissible>
                        <p>Utilizatorul a fost adaugat cu succes</p>
                    </Alert>
                    }
                </div>
            </div>
            <Form className="formDesign" onSubmit={addUser}>
                <Form.Group controlId="formUsername">
                    <Form.Label><FaUserAlt className="form-icons" />Username</Form.Label>
                    <Form.Control type="text" name="name" value={username} onChange={updateName} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label><FaLock className="form-icons" />Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={updatePass} />
                </Form.Group>
                <Form.Group controlId="formUsertype">
                    <Form.Label><FaUsers className="form-icons" />Usertype</Form.Label>
                    <Form.Control as="select" name="usertype" defaultValue="" onChange={updateUsertype} custom >
                        <option value="" disabled>Please select an item</option>
                        <option value={admin} >Admin</option>
                        <option value={student}>Student</option>
                        <option value={prof}>Profesor</option>
                    </Form.Control>
                </Form.Group>
                <div className='buttonProf'>
                    <button className="buttonDesign" type="submit">
                        Submit
                    </button>
                </div>
                {errorExist && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Numele de utilizator exista deja!</p>}
                {errorEmpty && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Nu trebuie lasate campuri libere!</p>}
                {errorOption && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Selectati o optiune!</p>}
            </Form>
        </Container>

    )
}