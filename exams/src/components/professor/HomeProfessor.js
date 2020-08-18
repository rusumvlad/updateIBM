import React, { useContext } from 'react';

//Import Context for Exams
import { ExamsContext } from '../ExamsContext';
import { CurrentUserContext } from '../LoginContext';

//Import Layout for Exams
import ExamLayout from '../layouts/ExamLayout';

function HomeProfessor() {

    const [exams] = useContext(ExamsContext);
    const [currentUser] = useContext(CurrentUserContext);
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Lista examenelor - Profesor {currentUser}</h1></div>
            </div>
            <div className="row">
                {exams.map((exam, index) =>
                    exam.professor === currentUser && <ExamLayout materie={exam.course} data={exam.date} nrLocuri={exam.seats} key={index} isProfessor={true} />
                )}
            </div>
        </div>
    )
}

export default HomeProfessor;