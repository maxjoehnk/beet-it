import React from 'react';
import { Results } from '../results';
import { Query } from './query';
import { ipcRenderer, remote } from 'electron';
import Paper from 'material-ui/Paper';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
        ipcRenderer.on('results', (event, results) => {
            this.setState({ results });
        });
        this.webContents = remote.getCurrentWebContents();
    }

    componentDidMount() {
        this.query();
    }

    query(query) {
        ipcRenderer.send('query', query);
    }

    handleDragStart = result => {
        this.webContents.startDrag({
            file: result.file,
            icon: null
        });
    };

    render() {
        return (
            <Paper style={{height: '100vh'}}>
                <Query onChange={this.query}/>
                <Results results={this.state.results}
                         onDragStart={this.handleDragStart}/>
            </Paper>
        );
    }
}
