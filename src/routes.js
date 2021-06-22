import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import ProjectInfo from './components/UI/ProjectInfo';
import NotFound from './components/UI/404';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Layout} />
                <Route path='/project/:id' render={(routeProps) => <ProjectInfo data={routeProps.location.state} />} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
};

export default Routes;