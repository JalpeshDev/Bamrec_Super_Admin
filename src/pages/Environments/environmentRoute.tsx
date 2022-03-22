import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';

const EnvironmentSubRoutes: any = [
    {
        url: '/environments',
        component: lazy(() => import('./environmentsTable'))
    },
    {
        url: '/environments/environment-report',
        component: lazy(() => import('./environmentReport'))
    },
    {
        url: '/environments/environment-details/:id',
        component: lazy(() => import('./environmentDetail'))
    }
];

const EnvironmentRouter = () => {
    return (
        <Switch>
            {EnvironmentSubRoutes.map((singleRoute: any) => {
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

export { EnvironmentSubRoutes };
export default EnvironmentRouter;
