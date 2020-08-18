import React, { useState, useEffect, createContext } from 'react';

import { getter } from '../components/Constants/APIHandler'

export const ExamsContext = createContext();
export const wExamsContext = createContext();



export const ExamsProvider = (props) => {

    const EXAMS_URL = 'http://localhost:9191/exams'


    const [exams, setExams] = useState([]);
    const [wExams, setWExams] = useState([]);

    const listExams = () => {
        getter(EXAMS_URL).then(res => {
            setExams(res.data);
        });

    };
    useEffect(() => {
        listExams();
    }, []);
    return (

        <wExamsContext.Provider value={[wExams, setWExams]}>
            <ExamsContext.Provider value={[exams, setExams]}>
                {props.children}
            </ExamsContext.Provider>
        </wExamsContext.Provider>


    );
}
