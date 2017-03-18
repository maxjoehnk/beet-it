import React from 'react';
import { Results } from '../results';
import { Query } from './query';
import { ipcRenderer } from 'electron';
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
    }

    componentDidMount() {
        this.query();
    }

    query(query) {
        ipcRenderer.send('query', query);
    }

    handleDragStart = result => {
        ipcRenderer.send('startDrag', result);
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
