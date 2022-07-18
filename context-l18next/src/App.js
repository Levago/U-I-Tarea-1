import React from 'react';
import Counter from './Components/VisistCounter';
import Header from './Components/data';
import Grid from './Components/Grid';
import './styles.css';
import { FormattedMessage, FormattedDate } from 'react-intl';

const App = () => {
    return ( <
        div >
        <
        Header / >

        <
        div className = "main" >
        <
        h1 className = "titulo" >
        <
        FormattedMessage id = "app.welcome"
        defaultMessage = "Welcome"
        values = {
            {
                name: 'Carlos Arturo'
            }
        }
        /> < /
        h1 > <
        p className = "subtitulo" >
        <
        FormattedDate value = { Date.now() }
        year = "numeric"
        month = "long"
        day = "numeric"
        weekday = "long" /
        >
        <
        /p>

        <
        Grid / >
        <
        /div> < /
        div >
    );
}


function App() {
    return ( <
        div className = "App" >
        <
        React.StrictMode >
        <
        Counter / >
        <
        /React.StrictMode> < /
        div >
    );
}

export default App;