import React from 'react';
import 'react-router';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import BreweryList from './BreweryList';
import BreweryDetails from './BreweryDetails';

const App: React.FC = () => {
    return (
        <Router>
            <Route exact={true} path="/" render={() => <Redirect from="/" to="/breweries" />} />
            <Route exact={true} path="/breweries" component={BreweryList} />
            <Route path="/breweries/:id" component={BreweryDetails}/>
        </Router>
    );
};

export default App;
