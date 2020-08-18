import React, { useContext } from 'react'
import { isLoggedContext } from '../LoginContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const [isLogged] = useContext(isLoggedContext);
    return (
        <Route
            {...rest}
            render={props => {
                if (isLogged) {
                    return <Component {...props} />;
                }
                else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default PrivateRoute