import React, { useContext } from 'react';

//Import Context for Exams
import { ExamsContext } from '../ExamsContext';

//Import Layout for Exams
import ExamLayout from '../layouts/ExamLayout';

import { CurrentUserContext, StudentContext } from '../LoginContext';


function HomeStudent() {
    const [currentUser] = useContext(CurrentUserContext)
    const [student] = useContext(StudentContext);
    const [exams] = useContext(ExamsContext);


    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Lista examenelor</h1></div>
            </div>
            <div className="row mt-5 mb-5">
                {exams.map((exam, index) => student.map((stud) =>
                    (currentUser === stud.name && stud.faculty === exam.faculty && stud.yearOfStudy === exam.yearOfStudy) && <ExamLayout materie={exam.course} profesor={exam.professor} data={exam.date} key={index} isStudent={true} />
                ))}
            </div>

        </div>
    )
}
export default HomeStudent;