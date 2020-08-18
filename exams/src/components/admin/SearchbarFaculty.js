import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ExamsContext } from '../ExamsContext';  

import { getter } from '../Constants/APIHandler'




export default function Searchbar() {

    const [, setExams] = useContext(ExamsContext);
    const [facultyI, setFacultyI] = useState('');


    const EXAMS_API = 'http://localhost:9191/exams'
    const EXAMS_API_FAC = `http://localhost:9191/students/${facultyI}`


    useEffect(
        () => {
            if (facultyI === '') {
                getter(EXAMS_API)
                    .then(res => {
                        setExams(res.data);
                    })
            } else {
                getter(EXAMS_API_FAC)
                    .then(res => {
                        setExams(res.data);
                    })
            }
        }, [facultyI])
    return (
        <div className="col-12 text-center">
            <h5>Cautare dupa numele facultatii: </h5> <input type="text" value={facultyI} onChange={e => setFacultyI(e.target.value)} />
        </div>
    )
}
