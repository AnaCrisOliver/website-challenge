import React from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import SearchProperty from './pages/SearchProperty';
import PropertyDetails from './pages/PropertyDetails';
import Budgets from './pages/Budgets';
import Calendar from './pages/Calendar';
import Clients from './pages/Clients';
import Control from './pages/Control';

function Routes() {
    return(
        <BrowserRouter/>
    );
};

export default Route;