import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Views/Home';
import Analytic from '../Views/Analytics';

// Routes
const Routes: React.FC = () => {
    return (
        <>
            <div className="routes">
                <Router>
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route exact path="/analytics" render={() => <Analytic />} />
                    </Switch>
                </Router>
            </div>
        </>
    );
};

export default Routes;