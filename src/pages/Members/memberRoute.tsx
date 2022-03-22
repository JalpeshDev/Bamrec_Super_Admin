import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';

const memberSubRoutes: any = [
    {
        url: '/members',
        component: lazy(() => import('./memberTable'))
    },
    {
        url: '/members/system-administration',
        component: lazy(() => import('../Admin/systemAdmin'))
    },
    {
        url: '/members/file-opening',
        component: lazy(() => import('./memberFile'))
    },
    {
        url: '/members/details',
        component: lazy(() => import('./memberDetails'))
    }
];

const MemberRouter = () => {
    return (
        <Switch>
            {memberSubRoutes.map((singleRoute: any) => {
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

export { memberSubRoutes };
export default MemberRouter;
