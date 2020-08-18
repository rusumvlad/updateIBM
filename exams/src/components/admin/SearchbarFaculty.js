import React, { useContext, useState, useEffect } from 'react';
import { ExamsContext } from '../ExamsContext';

import ApiServices from '../Constants/APIHandler'

export default function Searchbar() {

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
                ApiServices.getExams()
                    .then(res => {
                        setExams(res.data);
                    })
            } else if (validareNumar(facultyI) === true) {
                ApiServices.filterYearOfStudy(facultyI)
                    .then(res => {
                        setExams(res.data);
                    })
            } else if (validareString(facultyI) === true) {
                ApiServices.filterFaculty(facultyI)
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
