import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin  from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Main } from './main';

import 'mdi/css/materialdesignicons.css';
import 'roboto-fontface';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Main/>
    </MuiThemeProvider>,
    document.getElementById("react")
);
