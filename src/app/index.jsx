import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin  from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Main } from './main';

import 'mdi/css/materialdesignicons.css';
import 'roboto-fontface';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Main/>
    </MuiThemeProvider>,
    document.getElementById("react")
);