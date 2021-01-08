import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";



const App = () => {
    return (
        <div className="container-fluid">
            <Router>
                <Header />
                <Route path="/" exact component={StreamList}>Stream List</Route>
                <Route path="/streams/show" exact component={StreamShow}>Stream Show</Route>
                <Route path="/streams/new" exact component={StreamCreate}>Stream Create</Route>
                <Route path="/streams/edit" exact component={StreamEdit}>Stream Edit</Route>
                <Route path="/streams/delete" exact component={StreamDelete}>Stream Delete</Route>
            </Router>
        </div>
    );
};

export default App;