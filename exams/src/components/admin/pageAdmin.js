import React from 'react'

//Import router-dom
import { Route, Switch } from 'react-router-dom'

//Import Admin Pages
import HomeAdmin from './HomeAdmin'
import UsersList from './UsersList';

//Import Components layout and style
import NavbarAdmin from '../layouts/NavbarAdmin'
import Footer from '../layouts/Footer';
import '../../css/Navbar.css';
import PenddingExams from './PendingExams';
import * as ROUTES from '../Constants/routes'
import StudentList from './StudentList';



function PageAdmin() {

    return (
        <div>
            <NavbarAdmin />
            <Switch>
                <Route path={ROUTES.ADMINHOME} exact component={HomeAdmin} />
                <Route path={ROUTES.ADMINUSERSLIST} exact component={UsersList} />
                <Route path={ROUTES.ADMINSTUDENTSLIST} exact component={StudentList} />
                <Route path={ROUTES.ADMINPENDING} exact component={PenddingExams} />

            </Switch>
            <Footer />
        </div>
    )

}
export default PageAdmin;