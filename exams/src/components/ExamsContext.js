import React, { useState, useEffect, createContext } from 'react';

import ApiServices from '../components/Constants/APIHandler';

export const ExamsContext = createContext();

export const ExamsProvider = (props) => {



    const [exams, setExams] = useState([]);

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


        <ExamsContext.Provider value={[exams, setExams]}>
            {props.children}
        </ExamsContext.Provider>


    );
}
