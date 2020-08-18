import React, { useContext, useState } from 'react'

//Import Exams Context
import { ExamsContext } from '../ExamsContext';

import axios from 'axios';
//Import Exams Layout
import ExamLayout from '../layouts/ExamLayout';

import Alert from 'react-bootstrap/Alert';

import { deleter, putter } from '../Constants/APIHandler'

const DELETE_EXAM_API = 'http://localhost:9191/deleteExam/'
const UPDATE_EXAM_API_STATUS = 'http://localhost:9191/updateStatus/'


function PenddingExams() {
    const [exams, setExams] = useContext(ExamsContext);
    const [show, setShow] = useState(false);
    const [showR, setShowR] = useState(false);
    function remove(id) {
        deleter(DELETE_EXAM_API + id)
            .then(res => {
                setExams(exams.filter(ex => ex.id !== id))
                setShowR(true);
            }
            )
    }
    function removeLocal(id) {
        setExams(exams.filter(ex => ex.id !== id))
    }

    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Examene in Asteptare</h1></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {show === true && <Alert variant="info" onClose={() => setShow(false)} dismissible>
                            <p>Examenul a fost acceptat</p>
                        </Alert>}
                        {showR === true && <Alert variant="info" onClose={() => setShowR(false)} dismissible>
                            <p>Examenul a fost respins</p>
                        </Alert>}
                    </div>
                </div>
            </div>
            <div className="row mt-5">

                {exams.map((exam) =>
                    exam.status === "in asteptare" && <ExamLayout materie={exam.course} status={exam.status} nrLocuri={exam.seats} profesor={exam.professor} data={exam.date} academicYear={exam.academycYear} semester={exam.semester} yearOfStudy={exam.yearOfStudy} faculty={exam.faculty} key={exam.id} isPend={true} removeExam={() => remove(exam.id)}
                        updateStatus={() => {
                            const data = { status: 'acceptat' }
                            putter(UPDATE_EXAM_API_STATUS + exam.id, data)
                                .then(
                                    setShow(true)

                                )
                            removeLocal(exam.id);
                        }}
                    />

                )}
                {(exams.length === 0) &&
                    <div className="col-12 text-center">
                        <h3>Nu sunt examene in asteptare!</h3>
                    </div>
                }

            </div>
        </div>
    )
}

export default PenddingExams;