import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import StartPage from './StartPage';
import DocViewer from './DocViewer';

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path='/'><StartPage /></Route>
            <Route exact path='/viewer'><DocViewer /></Route>
        </BrowserRouter>        
    );
}