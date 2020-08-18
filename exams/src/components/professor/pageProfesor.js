import React from 'react';

//Import Components layout and style
import NavbarProfesor from '../layouts/NavbarProfesor';
import Footer from '../layouts/Footer';
import '../../css/Navbar.css';

//Import router-dom
import { Switch, Route } from 'react-router-dom';
//Import Professor Pages
import FormProfessor from './FormProfessor';
import HomeProfessor from './HomeProfessor';

//Import style for Professor Pages
import '../../css/Professor.css'
import * as ROUTES from '../Constants/routes'


function PageProfesor() {

    return (
        <div>
            <NavbarProfesor />
            <Switch>
                <Route path={ROUTES.PROFHOME} exact component={HomeProfessor} />
                <Route path={ROUTES.PROFCERERE} exact component={FormProfessor} />
            </Switch>
            <Footer />
        </div>
    )

}
export default PageProfesor; 
