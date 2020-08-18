import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { getter } from '../components/Constants/APIHandler'
export const isLoggedContext = createContext()
export const LoginContext = createContext();
export const CurrentUserContext = createContext();
export const StudentContext = createContext();




const USERS_API = `http://localhost:9191/login/users`;
const STUDENTS_API = `http://localhost:9191/students`

export const LoginProvider = ({ children }) => {
    const [isLogged,setisLogged] = useState(false);
    const [users, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    const [student, setStudent] = useState([]);
    const listUser = () => {
        getter(USERS_API).then(res => {
            setUser(res.data);
        })
        getter(STUDENTS_API).then(res => {
            setStudent(res.data);
        })
    };
    useEffect(() => {
        listUser();
    }, []);

    return (
        <isLoggedContext.Provider value={[isLogged,setisLogged]}>
        <StudentContext.Provider value={[student, setStudent]}>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
                <LoginContext.Provider value={[users, setUser]}>
                    {children}
                </LoginContext.Provider>
            </CurrentUserContext.Provider>
        </StudentContext.Provider>
        </isLoggedContext.Provider>
    );
}
