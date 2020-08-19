import React, { useContext, useState, useEffect } from 'react';
import { ExamsContext } from '../ExamsContext';

import ApiServices from '../Constants/APIHandler'

export default function Searchbar() {

    const [, setExams] = useContext(ExamsContext);
    const [facultyI, setFacultyI] = useState('');
    const [error, setError] = useState(false);

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
                ApiServices.getExams()
                    .then(res => {
                        setExams(res.data);
                        setError(false);
                    })
            } else if (validareNumar(facultyI) === true) {
                ApiServices.filterYearOfStudy(facultyI)
                    .then(res => {
                        setExams(res.data);
                        if (res.data.length === 0) {
                            setError(true);
                        } else {
                            setError(false);
                        }
                    })
            } else if (validareString(facultyI) === true) {
                ApiServices.filterFaculty(facultyI)
                    .then(res => {
                        setExams(res.data);
                        if (res.data.length === 0) {
                            setError(true);
                        } else {
                            setError(false);
                        }
                    })
            }
        }, [facultyI])
    return (
        <div className="col-12 text-center">
            <h5>Cautare dupa numele facultatii/anul de studiu: </h5> <input type="text" value={facultyI} onChange={e => setFacultyI(e.target.value)} />
            {error && <p className="mt-5">Nu a fost gasit nici un rezultat!</p>}
        </div>
    )
}
