import React, { useState, useContext } from 'react';
//Import Student Card component
//import StudentCard from './StudentCard';

//Import Icons
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { ExamsContext } from '../ExamsContext';
import { AiFillFileAdd } from 'react-icons/ai';
import { Form } from 'react-bootstrap'
import { AiFillCalendar } from 'react-icons/ai';
import { MdBook } from 'react-icons/md';
import { GoPerson, GoCalendar } from 'react-icons/go';
import { FaChair, FaSchool } from 'react-icons/fa';

import { putter,getter } from '../Constants/APIHandler'

import Alert from 'react-bootstrap/Alert';

export default function ExamLayout({ idExam, materie, data, profesor, isAdmin, isProfessor, isStudent, removeExam, updateExam, status, isPend, updateStatus, nrLocuri, academicYear, semester, yearOfStudy, faculty }) {

  const [, setExams] = useContext(ExamsContext);
  const [YearOfStudy, setYearOfStudy] = useState(yearOfStudy);
  const [Semester, setSemester] = useState(semester);
  const [Faculty, setFaculty] = useState(faculty);
  const [NrSeats, setNSeats] = useState(nrLocuri);
  const [Course, setCourse] = useState(materie);
  const [Teacher, setTeacher] = useState(profesor);
  const [Date, setDate] = useState(data);
  const [AcademycYear, setAcademicYear] = useState(academicYear);
  const [show, setShow] = useState(false);

  const [errorNumber, setErrorNumber] = useState(false);
  const [errorEmpty, setErrorEmpty] = useState(false);
  const [errorString, setErrorString] = useState(false);

  const UPDATE_API = `http://localhost:9191/updateExam/${idExam}`

  const EXAMS_API = 'http://localhost:9191/exams'

  const buttons =
    (
      <div>
        <FaEdit className="icons-admin-card" onClick={toggleForm}></FaEdit>
        <MdDelete className="icons-admin-card" onClick={removeExam}></MdDelete>
      </div>
    )

  const statusW = (
    <div>
      <h5>Numarul de locuri: {nrLocuri}</h5><hr />
      <h5>Profesor: {profesor}</h5><hr />
      <h5>Semestrul: {semester}</h5>
      <hr></hr>
      <h5>An academic: {academicYear}</h5>
      <hr></hr>
      <h5>An de studiu: {yearOfStudy}</h5>
      <hr></hr>
      <h5>Facultatea: {faculty}</h5>
      <hr />
      <h5>Status: {status}</h5>
      <AiFillFileAdd className="icons-admin-card" onClick={updateStatus}></AiFillFileAdd>
      <MdDelete className="icons-admin-card" onClick={removeExam}></MdDelete>
    </div>
  )
  const [isEditing, setEditing] = useState(false);





  function toggleForm() {
    setEditing(!isEditing);
  }
  function validareNumar(number) {
    let numbersOnly = /^[0-9\b]+$/;
    return numbersOnly.test(number);
  }
  function validareString(strings) {
    let stringsOnly = /^[A-Za-z]+$/;
    return stringsOnly.test(strings);
  }

  function cancelForm(e) {
    e.preventDefault();
    setEditing(false)
  }



  function handleSubmit(e) {
    e.preventDefault();
    const examUpdate = {
      date: Date,
      yearOfStudy: YearOfStudy,
      semester: Semester,
      academycYear: AcademycYear,
      course: Course,
      faculty: Faculty,
      status: 'acceptat',
      professor: Teacher,
      seats: NrSeats
    };
    if (Date === '' || YearOfStudy === '' || Semester === '' || AcademycYear === '' || Faculty === '' || Course === '' || Teacher === '' || NrSeats === '') {
      setErrorEmpty(true);
    } else {
      setErrorEmpty(false);
      if (validareString(Faculty) === false || validareString(Teacher) === false) {
        setErrorString(true);
      } else {
        setErrorString(false);
        if (validareNumar(YearOfStudy) === false || validareNumar(Semester) === false || validareNumar(AcademycYear) === false || validareNumar(NrSeats) === false) {
          setErrorNumber(true);

        } else {
          setErrorNumber(false);
          putter(UPDATE_API,examUpdate)
            .then(() => {
              setShow(true);
              getter(EXAMS_API).then(res => {
                setExams(res.data);
                console.log(res.data);
              })
            })

          setEditing(false);
        }
      }
    }
  }







  let adminFields = (
    <div>
      <h5>Semestrul: {semester}</h5>
      <hr></hr>
      <h5>An academic: {academicYear}</h5>
      <hr></hr>
      <h5>An de studiu: {yearOfStudy}</h5>
      <hr></hr>
      <h5>Facultatea: {faculty}</h5>
    </div>
  )
  let result;
  if (isEditing) {
    result = (
      <div className="col-md-4 col-sm-12">
        <div className="StudentCard">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicYear">
              <Form.Label><AiFillCalendar className="form-icons" />Year</Form.Label>
              <Form.Control type="text" name='yearOfStudy' value={YearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicSemester">
              <Form.Label><GoCalendar className="form-icons" />Semester</Form.Label>
              <Form.Control type="text" name='semester' value={Semester} onChange={(e) => setSemester(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicFaculty">
              <Form.Label><FaSchool className="form-icons" />Faculty</Form.Label>
              <Form.Control type="text" name='faculty' value={Faculty} onChange={(e) => setFaculty(e.target.value)} />
            </Form.Group>


            <Form.Group controlId="formBasicSeats">
              <Form.Label><FaChair className="form-icons" />Number of Seats</Form.Label>
              <Form.Control type="text" name='nSeats' value={NrSeats} onChange={(e) => setNSeats(e.target.value)} />
            </Form.Group>



            <Form.Group controlId="formBasicCourse">
              <Form.Label><MdBook className="form-icons" />Course</Form.Label>
              <Form.Control type="text" name="course" value={Course} onChange={(e) => setCourse(e.target.value)} />
            </Form.Group>



            <Form.Group controlId="formBasicTeacher">
              <Form.Label><GoPerson className="form-icons" />Teacher</Form.Label>
              <Form.Control type="text" name='teacher' value={Teacher} onChange={(e) => setTeacher(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicAcademicYear">
              <Form.Label><GoPerson className="form-icons" />An academic</Form.Label>
              <Form.Control type="text" name='academicYear' value={AcademycYear} onChange={(e) => setAcademicYear(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicDate">
              <Form.Label><GoPerson className="form-icons" />Date</Form.Label>
              <Form.Control type="text" name='date' value={Date} onChange={(e) => setDate(e.target.value)} />
            </Form.Group>

            <div className='buttonProf'>
              <button className="buttonDesign" type="submit">
                Submit
            </button>&nbsp;
            <button className="buttonDesign" onClick={cancelForm}>Cancel</button>
            </div>
            {errorNumber && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Anul de studiu, semestrul, numarul de locuri si anul academic nu au voie sa contina litere!</p>}
            {errorEmpty && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Nu trebuie lasate campuri libere!</p>}
            {errorString && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Profesorul si facultatea nu au voie sa contina cifre!</p>}
          </Form>
        </div>
      </div>
    )


  }
  else {
    result = (
      <div className='col-md-4 col-sm-12'>
        {show === true && <Alert variant="info" onClose={() => setShow(false)} dismissible>
          <p>Examenul a fost editat cu succes</p>
        </Alert>}
        <div className="StudentCard">
          <h5>Materia: {materie} </h5>
          <hr />
          <h5>Data: {data}</h5>
          <hr />
          {(isProfessor || isAdmin) && <h5>Numarul de locuri: {nrLocuri}<hr /></h5>}
          {(isStudent || isAdmin) && <div><h5>Profesor: {profesor}</h5><hr></hr></div>}
          {(isAdmin && adminFields)}


          {isPend && statusW}
          {isAdmin ? buttons : null}

        </div>
      </div>

    )
  }
  return result
}


