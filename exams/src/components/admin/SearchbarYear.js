import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ExamsContext } from '../ExamsContext';

import { getter } from '../Constants/APIHandler'

export default function SearchbarYear() {

    const [, setExams] = useContext(ExamsContext);
    const [yearOfStudy, setyearOfStudy] = useState('');


    const EXAMS_API = 'http://localhost:9191/exams'
    const EXAMS_API_YEAR = `http://localhost:9191/students/exams/${yearOfStudy}`


    useEffect(
        () => {
            if (yearOfStudy === '') {
                getter(EXAMS_API)
                    .then(res => {
                        setExams(res.data);
                    })
            } else {
                getter(EXAMS_API_YEAR)
                    .then(res => {
                        setExams(res.data);
                    })
            }
        }, [yearOfStudy])
    return (
        <div className="col-12 text-center">
            <h5>Cautare dupa anul de studiu: </h5> <input type="text" value={yearOfStudy} onChange={e => setyearOfStudy(e.target.value)} />
        </div>
    )
}
