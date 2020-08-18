import React from 'react';

//Components layout and style
import NavbarStudent from '../layouts/NavbarStudent';
import Footer from '../layouts/Footer';
import '../../css/Navbar.css';

//import router-dom
import { Switch, Route } from 'react-router-dom';

//import Student Pages
import HomeStudent from './HomeStudent';

//Import css for Student
import '../../css/Student.css';

import * as ROUTES from '../Constants/routes'



function pageStudent() {


    return (
        <div>
            <NavbarStudent />
            <Switch>
                <Route path={ROUTES.STUDENTHOME} component={HomeStudent} />
            </Switch>
            <Footer />
        </div>
    )

}

export default pageStudent;
