import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';

const ActivitySubRoutes: any = [
    {
        url: '/activities',
        component: lazy(() => import('./activitiesTable'))
    },
    {
        url: '/activities/activity-report',
        component: lazy(() => import('./activitiesReport'))
    },
    {
        url: '/activities/activity-details/:id',
        component: lazy(() => import('./activityDetails'))
    },
];

const ActivityRouter = () => {
    return (
        <Switch>
            {ActivitySubRoutes.map((singleRoute: any) => {
                const { path, exact, url, ...otherProps } = singleRoute;
                return (
                    <Route
                        exact={exact === false ? false : true}
                        key={singleRoute.url}
                        path={singleRoute.url}
                        {...otherProps}
                    />
                );
            })}
        </Switch>
    );
};

export { ActivitySubRoutes };
export default ActivityRouter;
