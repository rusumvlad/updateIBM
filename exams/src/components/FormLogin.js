import React, { useState, useContext } from 'react'
//Import imgs
import userLogo from '../img/user-logo.svg';

//Import Icons
import { FaUserAlt, FaLock } from 'react-icons/fa';

//Import router-dom
import { withRouter } from 'react-router-dom';

//Import CSS
import '../css/FormLogin.css';
//Import LoginContext
import { LoginContext, CurrentUserContext, isLoggedContext } from './LoginContext';
import * as ROUTES from './Constants/routes'


function FormLogin(props) {
    const { history } = props;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const [, setisLogged] = useContext(isLoggedContext)
    const [users] = useContext(LoginContext);
    const [, setCurrentUser] = useContext(CurrentUserContext);
    const [mouseEnter, setMouseEnter] = useState(false)


    const [userFocus, setUserFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [errorInc, setErrorInc] = useState(false);
    const [errorEmpty, setErrorEmpty] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let verify;
        if (username === '' || password === '') {
            setErrorEmpty(true);
            verify = false;
        } else {
            setErrorEmpty(false);
            for (let i = 0; i < users.length; i++) {
                if (username === users[i].username && password === users[i].password) {
                    if (users[i].usertype === "professor") {
                        verify = true;
                        setCurrentUser(users[i].username);
                        history.push(ROUTES.PROFHOME);
                        break;
                    } else if (users[i].usertype === "student") {
                        verify = true;
                        setCurrentUser(users[i].username);
                        history.push(ROUTES.STUDENTHOME);
                        break;
                    } else if (users[i].usertype === "admin") {
                        verify = true;
                        setCurrentUser(users[i].username);
                        history.push(ROUTES.ADMINHOME);
                        break;
                    }

                } else {
                    verify = false;
                    setErrorInc(true);
                }
            }
        }
        if (verify === true) {
            setisLogged(true);
        }


        setUsername('')
        setPassword('')
    }

    return (
        <div className='containerForm'>
            <div className='login-content'>
                <form
                    className={`formFocus ${mouseEnter ? 'enter' : ''} `}
                    onSubmit={handleSubmit}
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                >
                    <img src={userLogo} alt='Logo' />
                    <h2 className='titleLogin'>ExamHUB</h2>
                    <div className={`input-div one ${userFocus ? "focus" : username === '' ? '' : "focus"}`}>
                        <div className='i'>
                            <FaUserAlt />
                        </div>
                        <div className='div'>
                            <label htmlFor='username'>Username</label>

                            <input
                                type='text'
                                name='username'
                                value={username}
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={`input-div pass ${passwordFocus ? "focus" : password === '' ? '' : "focus"}`}>
                        <div className='i'>
                            <FaLock />
                        </div>
                        <div className='div'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                name='password'
                                value={password}
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <input type='submit' className='btn' value='Login' />
                    {errorInc && <p style={{ color: 'red', fontWeight: 'bold' }}>Username sau parola incorecte!</p>}
                    {errorEmpty && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Nu trebuie lasate campuri libere!</p>}
                </form>
            </div>
        </div>
    )
}
export default withRouter(FormLogin);