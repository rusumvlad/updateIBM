import React, { useState, useContext } from 'react'
import axios from 'axios'
//Import bootstrap components
import { Form, Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

//Import Icons
import { MdBook } from 'react-icons/md';
import { GoPerson, GoCalendar } from 'react-icons/go';
import { FaChair, FaSchool } from 'react-icons/fa';
import { AiFillCalendar } from 'react-icons/ai';
import { CurrentUserContext } from '../LoginContext';

import { adder } from '../Constants/APIHandler'

const ADD_EXAM_API = 'http://localhost:9191/addExam'


function FormProfessor() {

  const [currentUser] = useContext(CurrentUserContext);
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [semester, setSemester] = useState('');
  const [faculty, setFaculty] = useState('');
  const [nSeats, setNSeats] = useState('');
  const [course, setCourse] = useState('');
  const [teacher, setTeacher] = useState(currentUser);
  const [date, setDate] = useState('');
  const [academicYear, setAcademicYear] = useState('')
  const [show, setShow] = useState(false);

  const [errorNumber, setErrorNumber] = useState(false);
  const [errorEmpty, setErrorEmpty] = useState(false);
  const [errorString, setErrorString] = useState(false);

  function validareNumar(number) {
    let numbersOnly = /^[0-9\b]+$/;
    return numbersOnly.test(number);
  }
  function validareString(strings) {
    let stringsOnly = /^[A-Za-z]+$/;
    return stringsOnly.test(strings);
  }


  function handleSubmit(e) {
    e.preventDefault();
    // setWExams(prevExams => [...prevExams, {
    //   id: uuidv4(),
    //   materie: course,
    //   data: yearOfStudy,
    //   profesor: teacher,
    //   status: 'asteptare'
    // }])
    const exam = {
      date: date,
      yearOfStudy: yearOfStudy,
      semester: semester,
      academycYear: academicYear,
      course: course,
      faculty: faculty,
      status: 'in asteptare',
      professor: teacher,
      seats: nSeats
    };

    if (date === '' || yearOfStudy === '' || semester === '' || academicYear === '' || faculty === '' || teacher === '' || course === '' || nSeats === '') {
      setErrorEmpty(true);
    } else {
      setErrorEmpty(false);
      if (validareString(faculty) === false || validareString(teacher) === false) {
        setErrorString(true);
      } else {
        setErrorString(false);
        if (validareNumar(yearOfStudy) === false || validareNumar(semester) === false || validareNumar(academicYear) === false || validareNumar(nSeats) === false) {
          setErrorNumber(true);

        } else {
          setErrorNumber(false);
          adder(ADD_EXAM_API,exam)
            .then(() => {
              setShow(true);

            })
          setYearOfStudy('');
          setSemester('');
          setFaculty('');
          setNSeats('');
          setCourse('');
          setTeacher('');
          setDate('');
          setAcademicYear('');
        }
      }
    }

  }
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-12 text-center"><h1 className="title">Cerere programare examen</h1></div>
      </div>
      <Container className="mt-5 mb-5">
        {show === true && <Alert variant="info" onClose={() => setShow(false)} dismissible>
          <p>Cerera a fost trimisa cu succes</p>
        </Alert>}
        <Form className="formDesign" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicYear">
            <Form.Label><AiFillCalendar className="form-icons" />Year</Form.Label>
            <Form.Control type="text" name='yearOfStudy' value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicSemester">
            <Form.Label><GoCalendar className="form-icons" />Semester</Form.Label>
            <Form.Control type="text" name='semester' value={semester} onChange={(e) => setSemester(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicFaculty">
            <Form.Label><FaSchool className="form-icons" />Faculty</Form.Label>
            <Form.Control type="text" name='faculty' value={faculty} onChange={(e) => setFaculty(e.target.value)} />
          </Form.Group>


          <Form.Group controlId="formBasicSeats">
            <Form.Label><FaChair className="form-icons" />Number of Seats</Form.Label>
            <Form.Control type="text" name='nSeats' value={nSeats} onChange={(e) => setNSeats(e.target.value)} />
          </Form.Group>



          <Form.Group controlId="formBasicCourse">
            <Form.Label><MdBook className="form-icons" />Course</Form.Label>
            <Form.Control type="text" name="course" value={course} onChange={(e) => setCourse(e.target.value)} />
          </Form.Group>



          <Form.Group controlId="formBasicTeacher">
            <Form.Label><GoPerson className="form-icons" />Teacher</Form.Label>
            <Form.Control type="text" name='teacher' value={teacher} readOnly />
          </Form.Group>

          <Form.Group controlId="formBasicAcademicYear">
            <Form.Label><GoPerson className="form-icons" />An academic</Form.Label>
            <Form.Control
              type="text"
              name='academicYear'
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicDate">
            <Form.Label><GoPerson className="form-icons" />Date</Form.Label>
            <Form.Control type="text" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Group>

          <div className='buttonProf'>
            <button className="buttonDesign" type="submit">
              Submit
            </button>
          </div>
          {errorNumber && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Anul de studiu, semestrul, numarul de locuri si anul academic nu au voie sa contina litere!</p>}
          {errorEmpty && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Nu trebuie lasate campuri libere!</p>}
          {errorString && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Profesorul si facultatea nu au voie sa contina cifre!</p>}
        </Form>
      </Container>
    </div>
  )
}



export default FormProfessor;
