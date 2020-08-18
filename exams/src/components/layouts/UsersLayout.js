import React from 'react'
import { useState, useContext } from 'react'
//Import Icons
import { FaEdit, FaLock, FaUserAlt, FaUsers } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { LoginContext } from '../LoginContext';
import { Form } from 'react-bootstrap'
import { AiFillCalendar } from 'react-icons/ai';


import { putter, getter } from '../Constants/APIHandler'

import Alert from 'react-bootstrap/Alert';
import axios from 'axios';


export default function UsersLayout({ username, password, usertype, removeUsers, userId }) {

  const [, setUser] = useContext(LoginContext)
  const [isEditing, setEditing] = useState(false);
  const [Username, setUsername] = useState(username);
  const [Password, setPassword] = useState(password);
  const [Usertype, setUsertype] = useState(usertype)
  const [show, setShow] = useState(false);


  const [errorEmpty, setErrorEmpty] = useState(false);
  const [errorOption, setErrorOption] = useState(false);

  const UPDATE_API = `http://localhost:9191/updateUser/${userId}`
  const LOGIN_API = 'http://localhost:9191/login/users'
  function handleEdit() {
    setEditing(!isEditing)
  }
  function cancelForm(e) {
    e.preventDefault();
    setEditing(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userUpdate = {
      username: Username,
      password: Password,
      usertype: Usertype
    }
    if (username !== "" && password !== "") {
      if (Usertype !== "professor" && Usertype !== "admin" && Usertype !== "student") {
        setErrorOption(true);
      }
      else {
        setErrorOption(false);
        putter(UPDATE_API, userUpdate)
          .then(() => {
            setShow(true);
            getter(LOGIN_API).then(res => {
              setUser(res.data);
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


            <Form.Group controlId="formBasicUsername">
              <Form.Label><FaUserAlt className="form-icons" />Username</Form.Label>
              <Form.Control type="text" name='Username' value={Username} onChange={(e) => setUsername(e.target.value)} readOnly />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label><FaLock className="form-icons" />Password</Form.Label>
              <Form.Control type="text" name='Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicUsertype">
              <Form.Label><FaUsers className="form-icons" />Usertype</Form.Label>
              <Form.Control type="text" name='Usertype' value={Usertype} onChange={(e) => setUsertype(e.target.value)} />
            </Form.Group>




            <div className='buttonProf'>
              <button className="buttonDesign" type="submit">
                Submit
            </button>&nbsp;
            <button className="buttonDesign" onClick={cancelForm}>Cancel</button>
            </div>
            {errorEmpty && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Nu trebuie lasate campuri libere!</p>}
            {errorOption && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Selectati o optiune valida!</p>}
          </Form>
        </div>
      </div>
    )
  }
  else {
    display = (<div className='col-md-4  col-12 mb-3'>
      {show === true && <Alert variant="info" onClose={() => setShow(false)} dismissible>
        <p>Utilizatorul a fost editat cu succes</p>
      </Alert>}
      <div className="Userlist-card ">

        <h4>Username: {username} </h4>
        <hr />
        <h4>Password: {password}</h4>
        <hr />
        <h4>Usertype: {usertype}</h4>
        <p>
          <FaEdit className="icons-admin-card" onClick={handleEdit}></FaEdit>
          <MdDelete className="icons-admin-card" onClick={removeUsers} ></MdDelete>
        </p>
      </div>
    </div>)
  }


  return (

    display

  );
}
