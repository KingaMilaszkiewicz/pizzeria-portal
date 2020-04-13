import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Ordering from './components/views/Ordering/Ordering';
import Tables from './components/views/Tables/Tables';
import PageNav from './components/layout/PageNav/PageNav';
import Homepage from './components/views/Homepage/Homepage';
import BookedTables from './components/views/BookedTables/BookedTables';
import BookedEvents from './components/views/BookedEvents/BookedEvents';
import NewOrder from './components/views/NewOrder/NewOrderContainer';
import Order from './components/views/Order/Order';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <PageNav />
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookedTables} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={BookedEvents} />

            <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order} />

            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
