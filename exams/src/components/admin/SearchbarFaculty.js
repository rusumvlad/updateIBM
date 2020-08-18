import React, { useContext, useState, useEffect } from 'react';
import { ExamsContext } from '../ExamsContext';

import { getter } from '../Constants/APIHandler'




export default function Searchbar() {

    const EXAMS_API = 'http://localhost:9191/exams'
    const EXAMS_API_FAC = `http://localhost:9191/students/`
    const EXAMS_API_YEAR = `http://localhost:9191/students/exams/`

    const [, setExams] = useContext(ExamsContext);
    const [facultyI, setFacultyI] = useState('');




    function validareNumar(number) {
        let numbersOnly = /^[0-9\b]+$/;
        return numbersOnly.test(number);
    }
    function validareString(strings) {
        let stringsOnly = /^[A-Za-z]+$/;
        return stringsOnly.test(strings);
    }

    useEffect(
        () => {
            if (facultyI === '') {
                getter(EXAMS_API)
                    .then(res => {
                        setExams(res.data);
                    })
            } else if (validareNumar(facultyI) === true) {
                getter(EXAMS_API_YEAR + `${facultyI}`)
                    .then(res => {
                        setExams(res.data);
                    })
            } else if (validareString(facultyI) === true) {
                getter(EXAMS_API_FAC + `${facultyI}`)
                    .then(res => {
                        setExams(res.data);
                    })
            }
        }, [facultyI])
    return (
        <div className="col-12 text-center">
            <h5>Cautare dupa numele facultatii/anul de studiu: </h5> <input type="text" value={facultyI} onChange={e => setFacultyI(e.target.value)} />
        </div>
    )
}
