import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import Organazation from "./pages/Oraganazation";
import Mentors from "./pages/Mentros";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/login";
import Family from "./pages/Family/index";
import Events from "./pages/Events";
import JobRequest from "./pages/JobRequest";
import Analytics from "./pages/Analytics";
import Newsfeed from "./pages/Newsfeed";
import Settings from "./pages/Settings";
import Signup from "./pages/Auth/Signup";
import Events2Screen from "./pages/Events/Events2Screen";
import OrganizationProfile from "./pages/Oraganazation/OrganizationProfile";
import OraganazationModel from "./pages/Modals/OraganazationModal/OrganizationModel";
import ProposeMentor from "./pages/JobRequest/ProposeMentor/ProposeMentor";
import ProposedMentors from "./pages/JobRequest/ProposedMentors/ProposedMentors";
import MentorProfile from "./pages/JobRequest/ViewProfile/ViewProfile";


const NoMatchPage = () => {
    return (
        <Row className="margin-top">
            <Col xs={{ span: 12, offset: 6 }}>
                <Card>
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h2>Page not found</h2>
                            <Link to="/dashboard">back to member</Link>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};
// const UnRestrictedRoute = ({ component: Component, isLoggedIn, ...rest }: any) => (
//     <Route
//         {...rest}
//         render={(props) =>
//             !isLoggedIn ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: '/dashboard',
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     />
// );
// const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }: any) => (
//     <Route
//         {...rest}
//         render={(props) =>
//             isLoggedIn ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: '/',
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     />
// );


const Router = ({ history }: any) => {

    return (
    //     <ConnectedRouter history={history}>
    //     <Switch>
    //         <UnRestrictedRoute
    //             exact
    //             path="/"
    //             component={Login}
    //             // isLoggedIn={isLoggedIn}
    //         />
    //             <RestrictedRoute
    //             path="/dashboard"
    //             component={Dashboard}
    //             // isLoggedIn={isLoggedIn}
    //         />
    //         <RestrictedRoute
    //             path="/oraganazation"
    //             component={Oraganazation}
    //             // isLoggedIn={isLoggedIn}
    //         />
    //         {/* <RestrictedRoute
    //             path={memberRoutes}
    //             component={Member}
    //             isLoggedIn={isLoggedIn}
    //         />
    //         <RestrictedRoute
    //             path={statistiquesRoutes}
    //             component={Statistiques}
    //             isLoggedIn={isLoggedIn}
    //         />
    //         <RestrictedRoute
    //             path={activityRoutes}
    //             component={activity}
    //             isLoggedIn={isLoggedIn}
    //         />
    //         <RestrictedRoute
    //             path={environmentRoutes}
    //             component={environments}
    //             isLoggedIn={isLoggedIn}
    //         />
    //         <RestrictedRoute
    //             path={teamMeetingRoutes}
    //             component={teamMeeting}
    //             isLoggedIn={isLoggedIn}
    //         /> */}
    //         <Route path="*" component={NoMatchPage} />
    //     </Switch>
    // </ConnectedRouter>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/dashboard" exact={true} component={Dashboard} />
                <Route path="/oraganazation" exact={true} component={Organazation} />
                <Route path="/mentors" exact={true} component={Mentors} />
                <Route path="/family" exact={true} component={Family} />
                <Route path="/events" exact={true} component={Events} />
                <Route path="/jobrequest" exact={true} component={JobRequest} />
                <Route path="/propose-mentor" exact={true} component={ProposeMentor} />
                <Route path="/analytics" exact={true} component={Analytics} />
                <Route path="/newsfeed" exact={true} component={Newsfeed} />
                <Route path="/proposed-mentors" exact={true} component={ProposedMentors} />
                <Route path="/settings" exact={true} component={Settings} />
                <Route path="/Signup" exact={true} component={Signup} />
                <Route path='/event-calender' exact={true} component={Events2Screen}/>
                <Route path='/organization-profile' exact={true} component={OrganizationProfile}/>
                <Route path='/mentor-profile' exact={true} component={MentorProfile}/>
                <Route path='/organization-modal' exact={true} component={OraganazationModel}/>
                <Route path="*" component={NoMatchPage} />
            </Switch>
        </ConnectedRouter>
    )
}

export default connect((state: any) => ({
    isLoggedIn: "state.auth.token" !== null
}))(Router);