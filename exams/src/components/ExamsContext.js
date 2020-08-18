import React, { useState, useEffect, createContext } from 'react';

import ApiServices from '../components/Constants/APIHandler';

export const ExamsContext = createContext();
export const wExamsContext = createContext();



export const ExamsProvider = (props) => {



    const [exams, setExams] = useState([]);
    const [wExams, setWExams] = useState([]);

    const listExams = () => {
        ApiServices.getExams()
            .then(res => {
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
