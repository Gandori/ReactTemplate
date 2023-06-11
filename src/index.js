import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import './themes.sass';

const App = lazy(() =>
    import(/* webpackChunkName: "app" */ './app')
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);