import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/HeaderRouter';
import ExpenseDashboardPage from '../components/DashboardRouter';
import AddExpensePage from '../components/AddRouter';
import EditExpensePage from '../components/EditRouter';
import HelpPage from '../components/HelpRouter';
import NotFoundPage from '../components/NotFoundRouter';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;