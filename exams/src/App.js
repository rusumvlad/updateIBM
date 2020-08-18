import React from 'react';

//Import router-dom
import { Switch, Route } from 'react-router-dom';

//Import components
import FormLogin from './components/FormLogin';
import PageProfesor from './components/professor/pageProfesor';
import PageStudent from './components/student/pageStudent';
import PageAdmin from './components/admin/pageAdmin';
//Import Contexts
import { ExamsProvider } from './components/ExamsContext';
import { LoginProvider } from './components/LoginContext';

import PrivateRoute from './components/Navigation/PrivateRoute';
import * as ROUTES from './components/Constants/routes'



function App() {
  return (
    <LoginProvider>
      <ExamsProvider>
        <div className="App">
          <Switch >
            <Route path={ROUTES.LOGIN} exact component={FormLogin} />
            <PrivateRoute path={ROUTES.PROFHOME} exact component={PageProfesor} />
            <PrivateRoute path={ROUTES.PROFCERERE} exact component={PageProfesor} />
            <PrivateRoute path={ROUTES.STUDENTHOME} exact component={PageStudent} />
            <PrivateRoute path={ROUTES.ADMINHOME} exact component={PageAdmin} />
            <PrivateRoute path={ROUTES.ADMINUSERSLIST} exact component={PageAdmin} />
            <PrivateRoute path={ROUTES.ADMINSTUDENTSLIST} exact component={PageAdmin} />
            <PrivateRoute path={ROUTES.ADMINPENDING} exact component={PageAdmin} />
            <Route path={ROUTES.ERROR} exact component={() => '404 PAGE NOT FOUND!'} />
          </Switch>

        </div>
      </ExamsProvider>
    </LoginProvider>
  );
}

export default App;
